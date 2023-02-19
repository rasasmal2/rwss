import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonServiceService } from 'src/app/_services/common-service.service';
import {  AbstractControl, FormControl, FormGroup,UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators,UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-d-and-d',
  templateUrl: './create-d-and-d.component.html',
  styleUrls: ['./create-d-and-d.component.css']
})
export class CreateDAndDComponent implements OnInit {

  projectFormGroup: any= UntypedFormGroup;
  gdaFormGroup: any= UntypedFormGroup;
  hfdFormGroup: any= UntypedFormGroup;
  structuralFormGroup: any= UntypedFormGroup;
  projectTypeList: any=[{code: 'SVMW', name: 'SVMW'},{code: 'Mega', name: 'Mega'}];
  projectList: any=[{code: '001', name: 'Project 1'},{code: '002', name: 'Project 2'}];
  executingAgencyList: any=[{code: '001', name: 'Executing Agency 1'},{code: '002', name: 'Executing Agency 2'}];
  isLinear=true;
  submitted=false;
  gdaSubmitted=false;
  hfdSubmitted=false;
  structuralSubmitted=false;
  constructor(public toastService: ToastrService, public cmnService:CommonServiceService, private _formBuilder: UntypedFormBuilder,private router: Router) {}


  ngOnInit() {
    this.projectFormGroup = this._formBuilder.group({
      projectName: ['', Validators.required],
      projectType: ['', Validators.required],
      nodalOfficerName: ['', Validators.required],
      nodalOfficerEmail: ['', Validators.required],
      nodalOfficerMobileNo: ['', [Validators.required,Validators.pattern(/^[0-9]{10,10}$/)]],
      executingAgency: ['', Validators.required]
      
    });

    this.gdaFormGroup = this._formBuilder.group({
      isGDASubmitted: [false, Validators.required],
      isGDAApproved: [false, Validators.required],
      GDAApprovalDate: ['', Validators.required],
      GDASubmissionDate: ['', Validators.required],
      GDA_File: ['', Validators.required]
    });
    this.hfdFormGroup = this._formBuilder.group({
      isHFDSubmitted: [false, Validators.required],
      isHFDApproved: [false, Validators.required],
      HFDSubmissionDate: ['', Validators.required],
      HFDApprovalDate: ['', Validators.required],
      HFD_File: ['', Validators.required],
    });

    this.structuralFormGroup = this._formBuilder.group({
      isStructuralDesignSubmitted: [false, Validators.required],
      structuralDesiginSubmissionDate: ['', Validators.required],
      isStructuralDesignApproved: [false, Validators.required],
      structuralApprovalDate: ['', Validators.required],
      structuralDocFile: ['', Validators.required]
    });

    

    // this.roadDataSource = new MatTableDataSource<any>(this.roadDataList);
    // this.misDataSource = new MatTableDataSource<any>(this.misDataList);
  }
  onSaveDnD() {
    this.structuralSubmitted=true
    if(this.structuralFormGroup.invalid) return;
    this.toastService.success('D&D has been successfully Saved');
  }
  onSubmitDnD() {
    this.structuralSubmitted=true
    if(this.structuralFormGroup.invalid) return;
    this.toastService.success('D&D has been successfully sent to head of Design Cell');
  }

  onUploadGDADoc(event:any) {
    let file = event.target.files;
    const formData = new FormData();
    formData.append('file', file[0])
    console.log(formData);
    this.cmnService.setLoading(true)
    setTimeout(() => {
      this.cmnService.setLoading(false);
      this.gdaFormGroup.get('GDA_File').setValue(file[0]?.name);
    }, 500);

  }
  onUploadHFDDoc(event:any) {
    let file = event.target.files;
    const formData = new FormData();
    formData.append('file', file[0])
    console.log(formData);
    this.cmnService.setLoading(true)
    setTimeout(() => {
      this.cmnService.setLoading(false);
      this.hfdFormGroup.get('HFD_File').setValue(file[0]?.name);
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
      this.structuralFormGroup.get('structuralDocFile').setValue(file[0]?.name);
    }, 500);

  }

  saveandnext(name:any) {
    if(name=='field') {

    }else if(name=='GDA') {
      this.gdaSubmitted=true
      if(this.gdaFormGroup.invalid) return;
    
    }else if(name=='HFD') {
      this.hfdSubmitted=true
      if(this.hfdFormGroup.invalid) return;
    } else {

    }

  }
}
