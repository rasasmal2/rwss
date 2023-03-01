import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonServiceService } from 'src/app/_services/common-service.service';
import {  AbstractControl, FormControl, FormGroup,UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators,UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import config from '../../../../../assets/config';

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
  circleList:any = [{code: 'c-1', name: 'Circle 1'},{code: 'c-2', name: 'Circle 2'}];
  divisionList:any = [{code: 'div-1', name: 'Division 1'},{code: 'div-2', name: 'Division 2'},{code: 'div-3', name: 'Division 3'}];
  showPropertyDetails = false;
  showModal=false;
  properties:any=config.projectList;
  selectedProperty:any;
  isConsentChecked=false;
  formDetails:any;
  loginUser:any;

  constructor(public toastService: ToastrService, public cmnService:CommonServiceService, private _formBuilder: UntypedFormBuilder,private router: Router) {}
  onSearchProperty() {
    let projectType = this.projectFormGroup.get('projectType').value;
    let projectName = this.projectFormGroup.get('projectName').value;
    let circle = this.projectFormGroup.get('circle').value;
    let division = this.projectFormGroup.get('division').value;
    if(projectType || projectName || circle ||  division) {
      
      this.cmnService.setLoading(true);
      setTimeout(() => {
        this.showModal = true;
        
        this.cmnService.setLoading(false);
      }, 500);
    } else {
      this.toastService.info('Please select at-least one field')
    }
    
  }
  hide() {
    this.showModal = false;
  }

  onSelectProperty(property:any) {
    this.showPropertyDetails = true;
    this.selectedProperty = property;
    // this.propertyGroup.get('uniquePropertyId').setValue(property?.propertyId);
    this.showModal = false;
  }
  getDate(date:any) {
    return new Date(date).toDateString()
  }

  ngOnInit() {
    this.projectFormGroup = this._formBuilder.group({
      projectName: [''],
      projectType: [''],
      circle: [''],
      division: [''],
      nodalOfficerName: ['', Validators.required],
      nodalOfficerEmail: ['', Validators.required],
      nodalOfficerMobileNo: ['', [Validators.required,Validators.pattern(/^[0-9]{10,10}$/)]],
      // executingAgency: ['', Validators.required]
      
    });

    this.gdaFormGroup = this._formBuilder.group({
      isGDASubmitted: [false, Validators.required],
      isGDAApproved: [false, Validators.required],
      GDAApprovalDate: [''],
      GDASubmissionDate: ['', Validators.required],
      GDA_File: ['', Validators.required]
    });
    this.hfdFormGroup = this._formBuilder.group({
      isHFDSubmitted: [false, Validators.required],
      isHFDApproved: [false, Validators.required],
      HFDSubmissionDate: ['', Validators.required],
      HFDApprovalDate: [''],
      HFD_File: ['', Validators.required],
    });

    this.structuralFormGroup = this._formBuilder.group({
      isStructuralDesignSubmitted: [false, Validators.required],
      structuralDesiginSubmissionDate: ['', Validators.required],
      isStructuralDesignApproved: [false, Validators.required],
      structuralApprovalDate: [''],
      structuralDocFile: ['', Validators.required]
    });

      let loginUser:any = localStorage.getItem('loginUser');
      this.loginUser = loginUser;
      if(loginUser=='Chief D&D') {
        this.setData();
      }

    // this.roadDataSource = new MatTableDataSource<any>(this.roadDataList);
    // this.misDataSource = new MatTableDataSource<any>(this.misDataList);
  }
  setData() {
    let ddDetails:any = localStorage.getItem('d_d_details');
    if(ddDetails) {
      ddDetails = JSON.parse(ddDetails);
    }
    this.showPropertyDetails = true;
    this.selectedProperty = ddDetails?.projectDetails;
    this.projectFormGroup.patchValue({
      
      nodalOfficerName: ddDetails?.nodalOfficerDetails?.nodalOfficerName,
      nodalOfficerEmail: ddDetails?.nodalOfficerDetails?.nodalOfficerEmail,
      nodalOfficerMobileNo: ddDetails?.nodalOfficerDetails?.nodalOfficerMobileNo,
    })
    this.gdaFormGroup.patchValue({
      isGDASubmitted: ddDetails?.gadDetails?.isGDASubmitted,
      isGDAApproved: ddDetails?.gadDetails?.isGDAApproved,
      GDAApprovalDate: ddDetails?.gadDetails?.GDAApprovalDate,
      GDASubmissionDate: ddDetails?.gadDetails?.GDASubmissionDate,
      GDA_File: ddDetails?.gadDetails?.GDA_File
    });
    this.hfdFormGroup.patchValue({
      isHFDSubmitted: ddDetails?.hfdDetails?.isHFDSubmitted,
      isHFDApproved: ddDetails?.hfdDetails?.isHFDApproved,
      HFDApprovalDate: ddDetails?.hfdDetails?.HFDApprovalDate,
      HFDSubmissionDate: ddDetails?.hfdDetails?.HFDSubmissionDate,
      HFD_File: ddDetails?.hfdDetails?.HFD_File
    });

    this.structuralFormGroup.patchValue({
      isStructuralDesignSubmitted: ddDetails?.structuralDetails?.isStructuralDesignSubmitted,
      isStructuralDesignApproved: ddDetails?.structuralDetails?.isStructuralDesignApproved,
      structuralApprovalDate: ddDetails?.structuralDetails?.structuralApprovalDate,
      structuralDesiginSubmissionDate: ddDetails?.structuralDetails?.structuralDesiginSubmissionDate,
      structuralDocFile: ddDetails?.structuralDetails?.structuralDocFile
    });
  }
  onSaveDnD() {
    
    this.toastService.success('D&D has been successfully Saved');
  }
  onSubmitDnD() {
    this.formDetails = {
      projectDetails: this.selectedProperty,
      nodalOfficerDetails: this.projectFormGroup.value,
      gadDetails: this.gdaFormGroup.value,
      hfdDetails: this.hfdFormGroup.value,
      structuralDetails: this.structuralFormGroup.value,
    }
    localStorage.setItem('d_d_details', JSON.stringify(this.formDetails));
    this.router.navigate(['d-and-d/submit'])
  }

  onUploadGDADoc(event:any) {
    let file = event.target.files;
    const formData = new FormData();
    formData.append('file', file[0])
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
    } else if(name=='structural') {
      this.structuralSubmitted=true
      if(this.structuralFormGroup.invalid) return;
      this.formDetails = {
        projectDetails: this.selectedProperty,
        nodalOfficerDetails: this.projectFormGroup.value,
        gadDetails: this.gdaFormGroup.value,
        hfdDetails: this.hfdFormGroup.value,
        structuralDetails: this.structuralFormGroup.value,
      }
    }

  }
}
