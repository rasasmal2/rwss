import { Component,Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.css']
})
export class ProjectSummaryComponent implements OnInit{

  @Input() formDetails: any;

  ngOnInit(): void {
    console.log("formDetails==",this.formDetails)
  }

}
