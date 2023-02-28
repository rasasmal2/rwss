import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import {  Editor, Toolbar } from 'ngx-editor';
import config from '../../../../../assets/config';
import {  AbstractControl, FormControl, FormGroup,UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators,UntypedFormControl, FormArray } from '@angular/forms';
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
  task:any = {
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'success'},
      {name: 'Warn', completed: false, color: 'warn'},
    ]
  }

  steps:any = config.steps;
  isLinear:any =true;
  formDetails:any;
  milestoneDataSource = new MatTableDataSource<any>();
  milestoneDisplayedColumns:any=[{col:'milestone', name: 'Milestone'},{col:'startDate', name: 'Start Time'},{col:'endDate', name: 'End Time'},{col:'timeline', name: 'Timeline'},{col:'payment', name: 'Payment %'}]
  milestoneDetails:any;
  isConsentChecked:any=false;
  allComplete:any=false;
  authorityList:any;
  formDetailsToSave:any;

  milestoneFormGroup: any= UntypedFormGroup;
  totalMileStonePayment: any;
  submitted=false;

  constructor(public toastService: ToastrService, public cmnService:CommonServiceService, private _formBuilder: UntypedFormBuilder,private router: Router, public dialog: MatDialog) {}
  onEdit() {
    alert('edit')
  }
  onChange(event:any) {
    const interests = <FormArray>this.authorityFormGroup.get('rowAuthorityName') as FormArray;

    if(event.checked) {
      interests.push(new FormControl(event.source.value))
    } else {
      const i = interests.controls.findIndex(x => x.value === event.source.value);
      interests.removeAt(i);
    }
  }
  ngOnInit() {
    this.projectFormGroup = this._formBuilder.group({
      projectName: ['', Validators.required],
      projectType: ['', Validators.required],
      projectValue: ['', Validators.required],
      projectStartDate: ['', Validators.required],
      projectEndDate: ['', Validators.required],
      // projectDuration:['',Validators.required],
      circle:['',Validators.required],
      division:['',Validators.required],
      contractorName:['',Validators.required],
      registeredAddress:['',Validators.required],
      contactPerson:['',Validators.required],
    });

    this.authorityFormGroup = this._formBuilder.group({
      rowAuthorityName: this._formBuilder.array([]),
      contractorAgrFile: [null, Validators.required],
    });
    this.milestoneFormGroup = this._formBuilder.group({
      totalMilestone: ['', Validators.required]
    });
    setTimeout((res) => {
      this.authorityList = ["NH", "Wildlife", "Forest", "PWD", "Railways"];
    });
    // this.roadDataSource = new MatTableDataSource<any>(this.roadDataList);
    // this.misDataSource = new MatTableDataSource<any>(this.misDataList);
  }

  saveandnext(val:any) {
    if(val=="Milestone") {
      if(this.milestoneFormGroup.value.totalMilestone!=100) {
        
        this.toastService.warning('Total Milestone payment must be 100%');
        return;
      }
    }else if(val=='authority') {
      this.submitted=true
      if(this.authorityFormGroup.invalid) return;
    
    }
    this.formDetails = {
      "projectDetails": this.projectFormGroup.value,
      "authorityDetails": this.authorityFormGroup.value,
      "milestoneDataSource": this.milestoneDataSource,
      "milestoneData": this.milestoneDetails,
      "milestoneDisplayedColumns": this.milestoneDisplayedColumns
    }

    this.formDetailsToSave = {
      "projectDetails": this.projectFormGroup.value,
      "authorityDetails": this.authorityFormGroup.value,
      "milestoneData": this.milestoneDetails,
      "milestoneDisplayedColumns": this.milestoneDisplayedColumns
    }

    console.log("onChangeMilestone formDetailsToSave==",JSON.stringify(this.formDetailsToSave))

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
    if(event)
    this.milestoneDetails = event?.formValue?.value;
    
    this.totalMileStonePayment = event?.totalPayment;
    if(this.totalMileStonePayment==100) {
      this.milestoneFormGroup.patchValue({
        totalMilestone: this.totalMileStonePayment
      })
    } else {
      this.milestoneFormGroup.patchValue({
        totalMilestone: null
      })
    }
    this.milestoneDataSource = new MatTableDataSource<any>(this.milestoneDetails);
  }

  onSubmitForm(){
    
    localStorage.setItem('projectData', JSON.stringify(this.formDetailsToSave))
    this.router.navigate(['construction/project-submit'])
  }

  stringify(obj:any) {
    let cache:any = [];
    let str = JSON.stringify(obj, function(key, value) {
      if (typeof value === "object" && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      return value;
    });
    cache = null; // reset the cache
    return str;
  }

 

  

}
