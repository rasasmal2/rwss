import { Component,OnInit } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { CommonServiceService } from 'src/app/_services/common-service.service';
import {  AbstractControl, FormControl, FormGroup,UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators,UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import config from '../../../../../assets/config';


@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent implements OnInit {
  finYear = ['2018-19','2019-20','2020-21', '2021-22', '2022-23'];

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
  projectData:any
  constructor(public toastService: ToastrService, public cmnService:CommonServiceService, private _formBuilder: UntypedFormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.projectFormGroup = this._formBuilder.group({
      projectName: [''],
      projectType: [''],
      projectStartDate: [''],
      projectEndDate: [''],
    });
  }

  onSelectProject() {

  }

  onGridReady(params:any) {
      this.rowData = config.projectList;
  }
  onCellClicked(event:any) {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
    console.log("event==",event)
    this.projectData = event.data
    this.showProjectDetails = true;
    this.showProjectList = false;
    this.showProjectSearch = false;
  }
  onSearchProject(event: any) {
    event.preventDefault();
    // Swal.fire({
    //   text: 'Toast with custom target',
    //   target: '#custom-target',
    //   customClass: {
    //     container: 'position-absolute'
    //   },
    //   toast: true,
    //   position: 'bottom'
    // })
    this.showProjectList = true;
  }
  goBack() {
    this.showProjectDetails = false;
    this.showProjectList = true;
    this.showProjectSearch = true;
  }
}

