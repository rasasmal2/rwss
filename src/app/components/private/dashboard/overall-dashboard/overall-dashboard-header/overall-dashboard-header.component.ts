import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-overall-dashboard-header',
  templateUrl: './overall-dashboard-header.component.html',
  styleUrls: ['./overall-dashboard-header.component.css']
})
export class OverallDashboardHeaderComponent implements OnInit {
  routeName:any;
  isSticky=false;

  constructor(public activatedRoute: ActivatedRoute, public router: Router) { 
    
  }

  ngOnInit(): void {
    
  }

}
