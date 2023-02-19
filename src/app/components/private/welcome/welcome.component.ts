import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridReadyEvent } from 'ag-grid-community';

// import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  loginUser: any = '';
  userName: any = '';

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


  constructor(private router: Router) { }
  ngOnInit(): void {

    this.loginUser = localStorage.getItem('loginUser');
    this.userName = localStorage.getItem('name');
    // let userDetails = this.authService.getLoggedUser();
    // if(userDetails) {
    //   localStorage.setItem("isLoggedIn", 'true');
    //   localStorage.setItem('loginUser', 'Executive Engineer');
    //   this.loginUser ='Executive Engineer';
    //   this.userName = userDetails.name;
    //   // this.router.navigate(['/dashboard'])
    // }
  }

  onGridReady(params:any) {
    let loginUser = localStorage.getItem('loginUser')

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
      }]

    // if(loginUser == 'Executive Engineer') {
    //   this.rowData = [
    //     {
    //       "taskId": "PRJ/40/2020-21/3440",
    //       "taskDescription": 'Improvement of GS road',
    //       "module": "Contract Management",
    //       "submittedOn": '19/08/2022',
    //       "submittedBy": "Arup Das - Assistant Executive Engineer - South Kamrup Territorial Road Division"
    //     },
    //     {
    //       "taskId": "PKG/40/2020-21/36540",
    //       "taskDescription": 'Improvement of MG road',
    //       "module": "DPR",
    //       "submittedOn": '21/09/2022',
    //       "submittedBy": "Arup Das - Assistant Executive Engineer - South Kamrup Territorial Road Division"
    //     },
    //     {
    //       "taskId": "PRO/40/2020-21/36540",
    //       "taskDescription": 'Improvement of MRD road',
    //       "module": "Procurement",
    //       "submittedOn": '22/09/2022',
    //       "submittedBy": "Arup Das - Assistant Executive Engineer - South Kamrup Territorial Road Division"
    //     }
    //   ]
    // } else if(loginUser == 'Chief Engineer') {
    //   this.rowData = [
    //     {
    //       "taskId": "PKG/40/2020-21/33540",
    //       "taskDescription": 'Improvement of Zoo road',
    //       "module": "DPR",
    //       "submittedOn": '24/09/2022',
    //       "submittedBy": "Bimal Kalita - Executive Engineer - South Kamrup Territorial Road Division"
    //     },
    //     {
    //       "taskId": "PRO/32/2020-21/23540",
    //       "taskDescription": 'Improvement of Narengi road',
    //       "module": "Procurement",
    //       "submittedOn": '25/09/2022',
    //       "submittedBy": "Apurba Sharma - Executive Engineer - North Kamrup Territorial Road Division"
    //     },
    //     {
    //       "taskId": "PRJ/12/2020-21/3440",
    //       "taskDescription": 'Improvement of AT road',
    //       "module": "Contract Management",
    //       "submittedOn": '25/09/2022',
    //       "submittedBy": "Tridib Boro - Executive Engineer - Goalpara Division"
    //     }
    //   ]
    // } else if (loginUser == 'Contractor') {
    //   this.rowData = [{
    //     "taskId": "MB/40/2020-21/26540",
    //     "taskDescription": 'MB Batch 1 : Project No. - PRO/40/2020-21/36540',
    //     "module": "Contract Management",
    //     "submittedOn": '22/09/2022',
    //     "submittedBy": "Arup Das - Assistant Executive Engineer - South Kamrup Territorial Road Division"
    //   }]
    // } else {
    //   this.rowData = [{
    //     "taskId": "PKG/40/2020-21/36540",
    //     "taskDescription": 'Improvement of VIP road',
    //     "module": "DPR",
    //     "submittedOn": '23/09/2022',
    //     "submittedBy": "Bimal Kalita - Executive Engineer - South Kamrup Territorial Road Division"
    //   }]
    // }
    
  }
  goTo(path:any) {
    this.router.navigate([path])
  }
}
