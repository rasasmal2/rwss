import { Component,Input,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-project-approval-details',
  templateUrl: './project-approval-details.component.html',
  styleUrls: ['./project-approval-details.component.css']
})
export class ProjectApprovalDetailsComponent implements OnInit{
  milestoneDataSource = new MatTableDataSource<any>();

  @Input() formDetails: any;
  constructor(public toasterService: ToastrService) {}

  ngOnInit(): void {
    console.log("formDetails==",this.formDetails)
    this.milestoneDataSource = new MatTableDataSource<any>(this.formDetails?.milestoneData);
  }

  onApprove() {
    this.toasterService.success("Application Approved Successfully")
  }
  onReject() {
    this.toasterService.error("Application Rejected Successfully")
  }
}
