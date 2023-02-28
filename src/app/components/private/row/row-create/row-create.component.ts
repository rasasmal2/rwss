import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonServiceService } from 'src/app/_services/common-service.service';
import {  AbstractControl, FormControl, FormGroup,UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators,UntypedFormControl,FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-row-create',
  templateUrl: './row-create.component.html',
  styleUrls: ['./row-create.component.css']
})
export class RowCreateComponent implements OnInit {

  searchFormGrp: any= UntypedFormGroup;
  projectFormGroup: any= UntypedFormGroup;
  authFormGroup: any= UntypedFormGroup;
  authorityList: any=['NH','Wildlife','Forest','PWD','Railways'];
  projectList: any=[{code: '001', name: 'Project 1'},{code: '002', name: 'Project 2'}];
  executingAgencyList: any=[{code: '001', name: 'Executing Ahency 1'},{code: '002', name: 'Executing Ahency 2'}];
  
  submitted=false;

  isLinear=true;
  projectTypeList: any=[{code: 'SVMW', name: 'SVMW'},{code: 'Mega', name: 'Mega'}];

  circleList:any = [{code: 'c-1', name: 'Circle 1'},{code: 'c-2', name: 'Circle 2'},{code: 'c-3', name: 'Circle 3'},{code: 'c-4', name: 'Circle 4'},{code: 'c-5', name: 'Circle 5'},{code: 'c-6', name: 'Circle 6'},{code: 'c-7', name: 'Circle 7'}];
  divisionList:any = [{code: 'div-1', name: 'Division 1'},{code: 'div-2', name: 'Division 2'},{code: 'div-3', name: 'Division 3'}];
  showPropertyDetails = false;
  showModal=false;
  properties:any=[
    {
      "projectName": 'Execution of Rural Piped water project in Khurdah District',
      "projectType": "Mega",
      "projectStartDate": "04/01/2022",
      "projectEndDate": "03/30/2024",
      "circle": "C3",
      "division": "D2",
      projectValue: "300Cr",
      executingAgency: "TPL",
      registeredAddress: "Mumbai",
      contactPerson: "S Ghosh"
    },
    {
      "projectName": 'Execution of Rural Piped water project in Puri District',
      "projectType": "Mega",
      "projectStartDate": "04/01/2022",
      "projectEndDate": "03/30/2024",
      "circle": "C1",
      "division": "D1",
      projectValue: "200Cr",
      executingAgency: "L&T",
      registeredAddress: "Mumbai",
      contactPerson: "S Mehta"
    },
    {
      "projectName": 'Execution of Rural Piped water project in Balangir District',
      "projectType": "Mega",
      "projectStartDate": "04/01/2022",
      "projectEndDate": "03/30/2024",
      "circle": "C4",
      "division": "D1",
      projectValue: "200Cr",
      executingAgency: "NCC",
      registeredAddress: "Hydrabad",
      contactPerson: "S Muttu"
    },
    {
      "projectName": 'Execution of Rural Piped water project in Ganjam District',
      "projectType": "Mega",
      "projectStartDate": "04/01/2022",
      "projectEndDate": "03/30/2024",
      "circle": "C2",
      "division": "D1",
      projectValue: "300Cr",
      executingAgency: "NCC",
      registeredAddress: "Hydrabad",
      contactPerson: "S Muttu"
    },
    {
      "projectName": 'Execution of Rural Piped water project in Koraput District',
      "projectType": "Mega",
      "projectStartDate": "04/01/2022",
      "projectEndDate": "03/30/2024",
      "circle": "C5",
      "division": "D1",
      projectValue: "300Cr",
      executingAgency: "NCC",
      registeredAddress: "Hydrabad",
      contactPerson: "S Muttu"
    }];
  selectedProperty:any;
  isConsentChecked=false;
  formDetails:any;
  selectedAuthority:any=[];

  constructor(public toastService: ToastrService, public cmnService:CommonServiceService, private _formBuilder: UntypedFormBuilder,private router: Router) {}
  onSearchProperty() {
    let projectType = this.searchFormGrp.get('projectType').value;
    let projectName = this.searchFormGrp.get('projectName').value;
    let circle = this.searchFormGrp.get('circle').value;
    let division = this.searchFormGrp.get('division').value;
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
    this.searchFormGrp = this._formBuilder.group({
      projectName: [''],
      projectType: [''],
      circle: [''],
      division: [''],
    });
    let projectData:any = localStorage.getItem('projectData');
    if(projectData) {
      projectData = JSON.parse(projectData)
    }
    this.projectFormGroup = this._formBuilder.group({
      
      // isAppliedAtNH: [false],
      // dateOfApplication: ['',[Validators.required]],
      // timeForApproval: ['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
      // isApprovalAcceptedNH: [false],
      // applicationAcceptedDateNH: ['',[Validators.required]],

      // isAppliedAtWildlife: [false],
      // dateOfApplicationWildLife: ['',[Validators.required]],
      // timeForApprovalWildlife: ['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
      // isApprovalAcceptedWildlife: [false],
      // applicationAcceptedDateWildLife: ['',[Validators.required]],
      
      // isAppliedAtForest: [false],
      // dateOfApplicationForest: ['',[Validators.required]],
      // timeForApprovalForest: ['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
      // isApprovalAcceptedForest: [false],
      // applicationAcceptedDateForest: ['',[Validators.required]],
      
      // isAppliedAtPWD: [false],
      // dateOfApplicationPWD: ['',[Validators.required]],
      // timeForApprovalPWD: ['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
      // isApprovalAcceptedPWD: [false],
      // applicationAcceptedDatePWD: ['',[Validators.required]],


      // isAppliedAtRailways: [false],
      // dateOfApplicationRailways: ['',[Validators.required]],
      // timeForApprovalRailways: ['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
      // isApprovalAcceptedRailways: [false],
      // applicationAcceptedDateRailways: ['',[Validators.required]],
    
      // rowCertificate: ['',[Validators.required]],
    });
    this.authFormGroup = this._formBuilder.group({
      authorities: this._formBuilder.array([]),
    })
    // let projectData:any = localStorage.getItem('projectData');
    // if(projectData) {
    //   projectData = JSON.parse(projectData)
    // }
    setTimeout((res) => {
      this.authorityList = ["NH", "Wildlife", "Forest", "PWD", "Railways"];
      // console.log("projectData?.authorityDetails?.rowAuthorityName==",projectData?.authorityDetails?.rowAuthorityName)
      // this.projectFormGroup.get('authorities').setValue("NH");
      if(projectData?.authorityDetails?.rowAuthorityName?.length>0) {
        let tt:any = projectData?.authorityDetails?.rowAuthorityName;
        this.selectedAuthority = tt;
        tt.forEach((element:any) => {
          if(element=='NH') {
           
            this.projectFormGroup.addControl('isAppliedAtNH', new FormControl(false,Validators.required));
            this.projectFormGroup.addControl('dateOfApplication', new FormControl('',Validators.required));
            this.projectFormGroup.addControl('timeForApproval', new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)]));
            this.projectFormGroup.addControl('isApprovalAcceptedNH', new FormControl(false,Validators.required));
            this.projectFormGroup.addControl('applicationAcceptedDateNH', new FormControl('',Validators.required));
          }
          if(element=='Wildlife') {
            this.projectFormGroup.addControl('isAppliedAtWildlife', new FormControl(false,Validators.required));
            this.projectFormGroup.addControl('dateOfApplicationWildLife', new FormControl('',Validators.required));
            this.projectFormGroup.addControl('timeForApprovalWildlife', new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)]));
            this.projectFormGroup.addControl('isApprovalAcceptedWildlife', new FormControl(false,Validators.required));
            this.projectFormGroup.addControl('applicationAcceptedDateWildLife', new FormControl('',Validators.required));
          }
          if(element=='Forest') {

            this.projectFormGroup.addControl('isAppliedAtForest', new FormControl(false,Validators.required));
            this.projectFormGroup.addControl('dateOfApplicationForest', new FormControl('',Validators.required));
            this.projectFormGroup.addControl('timeForApprovalForest', new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)]));
            this.projectFormGroup.addControl('isApprovalAcceptedForest', new FormControl(false,Validators.required));
            this.projectFormGroup.addControl('applicationAcceptedDateForest', new FormControl('',Validators.required));
          }

          if(element=='PWD') {

            this.projectFormGroup.addControl('isAppliedAtPWD', new FormControl(false,Validators.required));
            this.projectFormGroup.addControl('dateOfApplicationPWD', new FormControl('',Validators.required));
            this.projectFormGroup.addControl('timeForApprovalPWD', new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)]));
            this.projectFormGroup.addControl('isApprovalAcceptedPWD', new FormControl(false,Validators.required));
            this.projectFormGroup.addControl('applicationAcceptedDatePWD', new FormControl('',Validators.required));
          }

          if(element=='Railways') {

            this.projectFormGroup.addControl('isAppliedAtRailways', new FormControl(false,Validators.required));
            this.projectFormGroup.addControl('dateOfApplicationRailways', new FormControl('',Validators.required));
            this.projectFormGroup.addControl('timeForApprovalRailways', new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)]));
            this.projectFormGroup.addControl('isApprovalAcceptedRailways', new FormControl(false,Validators.required));
            this.projectFormGroup.addControl('applicationAcceptedDateRailways', new FormControl('',Validators.required));
          }
          
        });
      }
      
    });

    

    // this.roadDataSource = new MatTableDataSource<any>(this.roadDataList);
    // this.misDataSource = new MatTableDataSource<any>(this.misDataList);
  }

  saveandnext(name:any) {
    if(name=='property_details') {

    } else if(name=='authority') {
      
    }

    this.formDetails = {
      projectDetails: this.selectedProperty,
      authorityDetails: this.projectFormGroup.value,
      rowAuthorities: this.selectedAuthority
    }

  }
  onSaveRow() {
    this.submitted=true
    if(this.projectFormGroup.invalid) return;
    this.toastService.success('RoW has been successfully Saved');
  }
  onSubmitRow() {
    this.submitted=true;
    this.toastService.success('RoW certificate has been successfully sent to the concerned Divisional Tahsildar');
    setTimeout(() => {
      this.router.navigate(['/welcome'])
    }, 500);
    
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
