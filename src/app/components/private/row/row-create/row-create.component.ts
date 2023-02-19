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
  
  submitted=false
  constructor(public toastService: ToastrService, public cmnService:CommonServiceService, private _formBuilder: UntypedFormBuilder,private router: Router) {}


  ngOnInit() {
    this.projectFormGroup = this._formBuilder.group({
      authorities: ['', Validators.required],
      
      isAppliedAtNH: [false],
      dateOfApplication: ['',[Validators.required]],
      timeForApproval: ['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
      isApprovalAcceptedNH: [false],
      applicationAcceptedDateNH: ['',[Validators.required]],

      isAppliedAtWildlife: [false],
      dateOfApplicationWildLife: ['',[Validators.required]],
      timeForApprovalWildlife: ['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
      isApprovalAcceptedWildlife: [false],
      applicationAcceptedDateWildLife: ['',[Validators.required]],
      
      isAppliedAtForest: [false],
      dateOfApplicationForest: ['',[Validators.required]],
      timeForApprovalForest: ['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
      isApprovalAcceptedForest: [false],
      applicationAcceptedDateForest: ['',[Validators.required]],
      
      isAppliedAtPWD: [false],
      dateOfApplicationPWD: ['',[Validators.required]],
      timeForApprovalPWD: ['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
      isApprovalAcceptedPWD: [false],
      applicationAcceptedDatePWD: ['',[Validators.required]],


      isAppliedAtRailways: [false],
      dateOfApplicationRailways: ['',[Validators.required]],
      timeForApprovalRailways: ['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
      isApprovalAcceptedRailways: [false],
      applicationAcceptedDateRailways: ['',[Validators.required]],
    
      rowCertificate: ['',[Validators.required]],
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
}
