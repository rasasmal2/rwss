import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import {  Editor, Toolbar } from 'ngx-editor';
import config from '../../../../../assets/config';
import {  AbstractControl, FormControl, FormGroup,UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators,UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import {MatDialog} from '@angular/material/dialog';
import { MatModalComponent } from 'src/app/components/common/mat-modal/mat-modal.component';
import { AddRoadComponent } from './add-road/add-road.component';
import { EditRoadComponent } from './edit-road/edit-road.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';

import { ToastrService } from 'ngx-toastr';
import { MisDetailsComponent } from '../mis-details/mis-details.component';
import { AttachmentDetailsComponent } from '../attachment-details/attachment-details.component';
import { CopyDprDialogComponent } from '../copy-dpr-dialog/copy-dpr-dialog.component';
import { CommonServiceService } from 'src/app/_services/common-service.service';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-create-dpr',
  templateUrl: './create-dpr.component.html',
  styleUrls: ['./create-dpr.component.css']
})
export class CreateDprComponent implements OnInit {

  projectFormGroup: any= UntypedFormGroup;
  projectTypeList: any=[{code: 'SVMW', name: 'SVMW'},{code: 'Mega', name: 'Mega'}];
  durationList: any = [{code: '6', name: '6 Months'},{code: '12', name: '12 Months'},{code: '24', name: '24 Months'}];
  circleList:any = [{code: 'c-1', name: 'Circle 1'},{code: 'c-2', name: 'Circle 2'},{code: 'c-3', name: 'Circle 3'},{code: 'c-4', name: 'Circle 4'},{code: 'c-5', name: 'Circle 5'},{code: 'c-6', name: 'Circle 6'},{code: 'c-7', name: 'Circle 7'}];
  divisionList:any = [{code: 'div-1', name: 'Division 1'},{code: 'div-2', name: 'Division 2'},{code: 'div-3', name: 'Division 3'}];
  authorityFormGroup: any= UntypedFormGroup;

  steps:any = config.steps;
  isLinear:any =true;
  formDetails:any;
  milestoneDataSource = new MatTableDataSource<any>();
  milestoneDisplayedColumns:any=[{col:'milestone', name: 'Milestone'},{col:'startDate', name: 'Start Time'},{col:'endDate', name: 'End Time'},{col:'timeline', name: 'Timeline'},{col:'payment', name: 'Payment'}]
  milestoneDetails:any;
  isConsentChecked:any=false;


  constructor(public toastService: ToastrService, public cmnService:CommonServiceService, private _formBuilder: UntypedFormBuilder,private router: Router, public dialog: MatDialog) {}
  onEdit() {
    alert('edit')
  }
  ngOnInit() {
    this.projectFormGroup = this._formBuilder.group({
      projectName: ['', Validators.required],
      projectType: ['', Validators.required],
      projectValue: ['', Validators.required],
      projectStartDate: ['', Validators.required],
      projectEndDate: ['', Validators.required],
      projectDuration:['',Validators.required],
      circle:['',Validators.required],
      division:['',Validators.required],
      contractorName:['',Validators.required],
      registeredAddress:['',Validators.required],
      contactPerson:['',Validators.required],
    });

    this.authorityFormGroup = this._formBuilder.group({
      rowAuthorityName: ['', Validators.required],
      contractorAgrFile: ['', Validators.required],
    });

    // this.roadDataSource = new MatTableDataSource<any>(this.roadDataList);
    // this.misDataSource = new MatTableDataSource<any>(this.misDataList);
  }

  saveandnext(val:any) {
    this.formDetails = {
      projectDetails: this.projectFormGroup.value,
      authorityDetails: this.authorityFormGroup.value,
      milestoneDataSource: this.milestoneDataSource,
      milestoneDisplayedColumns: this.milestoneDisplayedColumns
    }

    console.log("onChangeMilestone formDetails==",this.formDetails)
  }

  onContractAgrUpload(event:any) {
    let file = event.target.files;
      const formData = new FormData();
      formData.append('module', 'property-upload')
      formData.append('file', file[0])
      console.log(formData);
      this.cmnService.setLoading(true)
      setTimeout(() => {
        this.cmnService.setLoading(false);
        this.authorityFormGroup.get('contractorAgrFile').setValue(file[0]?.name);
      }, 1000);
      
  }

  onChangeMilestone(event:any) {
    console.log("onChangeMilestone==",event)
    if(event && event?.value)
    this.milestoneDetails = event.value;
    this.milestoneDataSource = new MatTableDataSource<any>(this.milestoneDetails);
  }

  onSubmitForm(){
    this.router.navigate(['construction/project-submit'])
  }

 

  

}
