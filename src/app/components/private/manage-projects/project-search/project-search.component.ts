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
      cellStyle: {color: '#046A38', cursor: 'pointer'},
      cellRenderer : ((params:any)=>{
        return '<span title="' + params.value + '">'+params.value+'</span>';
      })
    },
    {
      field: 'projectType'
    },
    { field: 'projectStartDate'},
    { field: 'projectEndDate' },
    { field: 'circle' },
    { field: 'division' }
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
      },
      {
        "projectName": 'Execution of Rural Piped water project in Koraput District',
        "projectType": "Mega",
        "projectStartDate": "04/01/2022",
        "projectEndDate": "03/30/2023",
        "circle": "C5",
        "division": "D1",
        projectValue: "100Cr",
        executingAgency: "NCC",
        registeredAddress: "Hydrabad",
        contactPerson: "S Muttu"
      },
      {
        "projectName": 'Execution of Rural Piped water project in Malkangiri District',
        "projectType": "Mega",
        "projectStartDate": "04/01/2022",
        "projectEndDate": "03/30/2025",
        "circle": "C7",
        "division": "D4",
        projectValue: "400Cr",
        executingAgency: "NCC",
        registeredAddress: "Hydrabad",
        contactPerson: "S Muttu"
      },
      {
        "projectName": 'Execution of Rural Piped water project in Angul District',
        "projectType": "Mega",
        "projectStartDate": "04/01/2022",
        "projectEndDate": "03/30/2025",
        "circle": "C1",
        "division": "D3",
        projectValue: "200Cr",
        executingAgency: "Tata",
        registeredAddress: "Mumbai",
        contactPerson: "P Rao"
      },
      {
        "projectName": 'Execution of Rural Piped water project in Nayagarh District',
        "projectType": "Mega",
        "projectStartDate": "04/01/2022",
        "projectEndDate": "03/30/2025",
        "circle": "C2",
        "division": "D1",
        projectValue: "300Cr",
        executingAgency: "NCC",
        registeredAddress: "Hydrabad",
        contactPerson: "S Muttu"
      },
      {
        "projectName": 'Execution of Rural Piped water project in Kendrapara District',
        "projectType": "Mega",
        "projectStartDate": "04/01/2022",
        "projectEndDate": "03/30/2024",
        "circle": "C1",
        "division": "D2",
        projectValue: "200Cr",
        executingAgency: "L&T",
        registeredAddress: "Mumbai",
        contactPerson: "S Mehta"
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
