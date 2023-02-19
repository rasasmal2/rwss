import { Component,OnInit } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { CommonServiceService } from 'src/app/_services/common-service.service';
import {  AbstractControl, FormControl, FormGroup,UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators,UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.css']
})
export class ProjectSearchComponent implements OnInit{
  showProjectList = false;
  showProjectDetails = false;
  showProjectSearch = true;

  public columnDefs: ColDef[] = [
    { field: 'projectName',
      cellStyle: {color: '#046A38', cursor: 'pointer'}
    },
    {
      field: 'projectType'
    },
    { field: 'projectValue'},
    { field: 'projectStartDate' },
    { field: 'projectEndDate' },
    { field: 'projectDuration' },
    { field: 'projectProgress' }
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 150,
    filter: true,
  };
  public rowData!: any[];
  projectFormGroup: any= UntypedFormGroup;
  projectTypeList: any=[{code: 'SVMW', name: 'SVMW'},{code: 'Mega', name: 'Mega'}];
  projectList: any=[{code: '001', name: 'Project 1'},{code: '002', name: 'Project 2'}];
  executingAgencyList: any=[{code: '001', name: 'Executing Ahency 1'},{code: '002', name: 'Executing Ahency 2'}];
  


  constructor(public toastService: ToastrService, public cmnService:CommonServiceService, private _formBuilder: UntypedFormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.projectFormGroup = this._formBuilder.group({
      projectName: [''],
      projectType: [''],
      projectStartDate: [''],
      projectEndDate: [''],
    });
   
  }


  onGridReady(params:any) {
    this.rowData = [
      {
        "projectName": "Project 1",
        "projectType": 'SVMV',
        "projectValue": "21Cr",
        "projectStartDate": '2/2/23',
        "projectEndDate": '2/1/24',
        "projectDuration": "24 Months",
        "projectProgress": "30%"
      },
      {
        "projectName": "Project 2",
        "projectType": 'SVMV',
        "projectValue": "1Cr",
        "projectStartDate": '1/2/23',
        "projectEndDate": '2/8/23',
        "projectDuration": "6 Months",
        "projectProgress": "50%"
      }]
}
onCellClicked(event:any) {
  window.scroll({ 
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
  });
  this.showProjectDetails = true;
  this.showProjectList = false;
  this.showProjectSearch = false;
}
onSearchProject(event: any) {
  event.preventDefault();
  if(this.projectFormGroup.value.projectName || this.projectFormGroup.value.projectType || this.projectFormGroup.value.projectStartDate || this.projectFormGroup.value.projectEndDate) {
    this.showProjectList = true;
  } else {
    this.toastService.warning('Please select one search field');
  }
  // Swal.fire({
  //   text: 'Toast with custom target',
  //   target: '#custom-target',
  //   customClass: {
  //     container: 'position-absolute'
  //   },
  //   toast: true,
  //   position: 'bottom'
  // })
  
}
goBack() {
  this.showProjectDetails = false;
  this.showProjectList = true;
  this.showProjectSearch = true;
}

}
