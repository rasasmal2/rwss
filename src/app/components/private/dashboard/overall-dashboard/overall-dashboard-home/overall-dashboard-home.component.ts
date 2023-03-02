import { Component, OnInit } from '@angular/core';
import config from '../../../../../../assets/config';

@Component({
  selector: 'app-overall-dashboard-home',
  templateUrl: './overall-dashboard-home.component.html',
  styleUrls: ['./overall-dashboard-home.component.css']
})
export class OverallDashboardHomeComponent implements OnInit {
  stateOpeions:any = config.state;
  stateSelected = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectState() {
    this.stateSelected = true;
  }

}
