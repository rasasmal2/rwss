import { Component,Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-d-and-d-summary',
  templateUrl: './d-and-d-summary.component.html',
  styleUrls: ['./d-and-d-summary.component.css']
})
export class DAndDSummaryComponent implements OnInit{

  @Input() formDetails: any;
  loginUser: any;

  constructor(public toastService: ToastrService, private router: Router) {}

  ngOnInit(): void {
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

