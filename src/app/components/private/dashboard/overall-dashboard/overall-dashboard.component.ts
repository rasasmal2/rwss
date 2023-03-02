import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overall-dashboard',
  templateUrl: './overall-dashboard.component.html',
  styleUrls: ['./overall-dashboard.component.css']
})
export class OverallDashboardComponent implements OnInit {
  routeName: any;

  constructor(public router: Router) { this.routeName =  this.router.url;
     }

  ngOnInit(): void {
    console.log("this.routeName=",this.routeName)
  }

}
