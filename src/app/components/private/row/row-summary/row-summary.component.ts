import { Component,Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-row-summary',
  templateUrl: './row-summary.component.html',
  styleUrls: ['./row-summary.component.css']
})
export class RowSummaryComponent implements OnInit{

  @Input() formDetails: any;
  loginUser: any;

  constructor(public toastService: ToastrService, private router: Router) {}

  ngOnInit(): void {
    console.log("formDetails==",this.formDetails)
    this.loginUser = localStorage.getItem('loginUser')
  }
  getDate(date:any) {
    return new Date(date).toDateString()
  }

  onApprove() {
    this.toastService.success('D&D Approved Successfully');
    this.router.navigate(['/welcome'])
  }

  onReject() {
    this.toastService.warning('D&D has been rejected');
    this.router.navigate(['/welcome'])
  }

}

