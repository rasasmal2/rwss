import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonServiceService } from 'src/app/_services/common-service.service';
import {  AbstractControl, FormControl, FormGroup,UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators,UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import config from '../../../../../assets/config';

import {
  ColDef,
  ColGroupDef,
  GridApi,
  GridReadyEvent,
} from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-project-status-tracking',
  templateUrl: './project-status-tracking.component.html',
  styleUrls: ['./project-status-tracking.component.css']
})
export class ProjectStatusTrackingComponent implements OnInit{
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
    { field: 'division' },
    { field: 'status' }
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
  private gridApi!: GridApi<any>;


  constructor(public toastService: ToastrService, public cmnService:CommonServiceService, private _formBuilder: UntypedFormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.projectFormGroup = this._formBuilder.group({
      projectName: [''],
      projectType: [''],
      projectStartDate: [''],
      projectEndDate: [''],
    });
   
  }

  onGridReady(params: GridReadyEvent<any>) {
    this.gridApi = params.api;

    this.rowData = config.projectList;
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

changeMilestone(event:any) {
  if(event) {
    this.toastService.success(event.msg);
    setTimeout(() => {
      this.goBack()
    }, 200);
    
  }
}
onBtExport() {
  this.gridApi.exportDataAsExcel();
}

}
