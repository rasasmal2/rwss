import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-contractor-dashboard',
  templateUrl: './contractor-dashboard.component.html',
  styleUrls: ['./contractor-dashboard.component.css']
})
export class ContractorDashboardComponent implements OnInit {
  projectList = ['Project 1', 'Project 2', 'Project 3'];
  finYear = ['2018-19','2019-20','2020-21', '2021-22', '2022-23'];
  divisionList = ['Abhayapuri Mechanical Division','Abhayapuri Mechanical Division','Baithalangso Road Division','Barpeta, Baghbar & Chenga Territorial Road Division','Charaideo District Territorial Road Division','Dholai & Sonai Territorial Road Division','South Kamrup Territorial Road Division'];
  schemeList = ['SOPD-FDR','SOPD-G','SOPD-GSP', 'SOPD-ODS', 'SOPD-SCSP', 'SOPD-SS','SOPD-TSP','Sansad Adarsh Gram Yojana'];

  showProjectList = false;
  showProjectDetails = false;
  showProjectSearch = true;

  public columnDefs: ColDef[] = [
    { field: 'projectNo',
      cellStyle: {color: 'red', cursor: 'pointer'}
    },
    {
      field: 'projectName'
    },
    { field: 'divisionName'},
    { field: 'schemeName' },
    { field: 'finYear' }
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 150,
    filter: true,
  };
  public rowData!: any[];
  constructor() { }

  ngOnInit(): void {
  }

  onSelectProject() {

  }

  onGridReady(params:any) {
      this.rowData = [
        {
          "projectNo": "PRJ/40/2022-23/3440",
          "projectName": 'Improvement of GS road under SOPD-G scheme, FY 2022-23',
          "divisionName": "Guwahati Road Division",
          "schemeName": 'SOPD-G',
          "finYear": "2022-23"
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
