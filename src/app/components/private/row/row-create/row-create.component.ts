import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonServiceService } from 'src/app/_services/common-service.service';
import {  AbstractControl, FormControl, FormGroup,UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators,UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-row-create',
  templateUrl: './row-create.component.html',
  styleUrls: ['./row-create.component.css']
})
export class RowCreateComponent implements OnInit {

  projectFormGroup: any= UntypedFormGroup;
  authorityList: any=['NH','Wildlife','Forest','PWD','Railways'];
  projectList: any=[{code: '001', name: 'Project 1'},{code: '002', name: 'Project 2'}];
  executingAgencyList: any=[{code: '001', name: 'Executing Ahency 1'},{code: '002', name: 'Executing Ahency 2'}];
  
  submitted=false;
  selectedAuthority:any=[];
  constructor(public toastService: ToastrService, public cmnService:CommonServiceService, private _formBuilder: UntypedFormBuilder,private router: Router) {}


  ngOnInit() {
    this.projectFormGroup = this._formBuilder.group({
      authorities: ['', Validators.required],
      
      isAppliedAtNH: [false],
      dateOfApplication: [''],
      timeForApproval: ['',[Validators.pattern(/^[0-9]*$/)]],
      isApprovalAcceptedNH: [false],
      applicationAcceptedDateNH: [''],

      isAppliedAtWildlife: [false],
      dateOfApplicationWildLife: [''],
      timeForApprovalWildlife: ['',[Validators.pattern(/^[0-9]*$/)]],
      isApprovalAcceptedWildlife: [false],
      applicationAcceptedDateWildLife: [''],
      
      isAppliedAtForest: [false],
      dateOfApplicationForest: [''],
      timeForApprovalForest: ['',[Validators.pattern(/^[0-9]*$/)]],
      isApprovalAcceptedForest: [false],
      applicationAcceptedDateForest: [''],
      
      isAppliedAtPWD: [false],
      dateOfApplicationPWD: [''],
      timeForApprovalPWD: ['',[Validators.pattern(/^[0-9]*$/)]],
      isApprovalAcceptedPWD: [false],
      applicationAcceptedDatePWD: [''],


      isAppliedAtRailways: [false],
      dateOfApplicationRailways: [''],
      timeForApprovalRailways: ['',[Validators.pattern(/^[0-9]*$/)]],
      isApprovalAcceptedRailways: [false],
      applicationAcceptedDateRailways: [''],
    
      rowCertificate: [''],
    });

    

    // this.roadDataSource = new MatTableDataSource<any>(this.roadDataList);
    // this.misDataSource = new MatTableDataSource<any>(this.misDataList);
  }
  onSaveDnD() {
    this.submitted=true
    if(this.projectFormGroup.invalid) return;
    this.toastService.success('RoW has been successfully Saved');
  }
  onSubmitDnD() {
    this.submitted=true
    if(this.projectFormGroup.invalid) return;
    this.toastService.success('RoW certificate has been successfully sent to the concerned Divisional Tahsildar');
  }

  onUploadRowCertificate(event:any) {
    let file = event.target.files;
    const formData = new FormData();
    formData.append('file', file[0])
    console.log(formData);
    this.cmnService.setLoading(true)
    setTimeout(() => {
      this.cmnService.setLoading(false);
      this.projectFormGroup.get('rowCertificate').setValue(file[0]?.name);
    }, 500);

  }
  onUploadStructuralDoc(event:any) {
    let file = event.target.files;
    const formData = new FormData();
    formData.append('file', file[0])
    console.log(formData);
    this.cmnService.setLoading(true)
    setTimeout(() => {
      this.cmnService.setLoading(false);
      this.projectFormGroup.get('structuralDocFile').setValue(file[0]?.name);
    }, 500);

  }
  onSelectAuthority(value:any) {
    this.selectedAuthority = value
  }
}
