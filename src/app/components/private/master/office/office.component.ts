import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonServiceService } from 'src/app/_services/common-service.service';
import { AddEditOfficeComponent } from './add-edit-office/add-edit-office.component';
import {  AbstractControl, FormControl, FormGroup,UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators,UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  dataList:any = [];
  displayedColumns:any = [{col:'officeName', name: 'Office Name'},{col:'officeType', name: 'Office Type'},{col:'parentOffice', name: 'Parent Office'},{col:'district', name: 'District'},{col:'wing', name: 'Wing'},{col:'lac', name: 'LAC'},{col:'Action', name: 'Action', iconType: 'edit_view'}];
  dataSource = new MatTableDataSource<any>();

  searchOfcFrm : any= UntypedFormGroup;
  officeTypeList:any = [{code:1,name:'Office 1'},{code:2,name:'Office 2'}];
  districtList:any = [{code: '81', name: 'BAJALI'},{code: '8', name: 'BAKSA'},{code: '10', name: 'BARPETA'},{code: '31', name: 'CACHAR'},{code: '1', name: 'CHIRANG'},{code: '12', name: 'DHEMAJI'}];

  constructor(public toastService: ToastrService, public cmnService:CommonServiceService, private _formBuilder: UntypedFormBuilder,private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.dataList);
    this.searchOfcFrm = this._formBuilder.group({
      officeName: [''],
      officeType: [''],
      district: ['']
    });
  }

  searchOffice() {
    if(this.searchOfcFrm.value.officeName || this.searchOfcFrm.value.officeType || this.searchOfcFrm.value.district) {

    } else {
      this.toastService.warning('Please select atleast one field');
    }
  }

  openDialog() {
    // this.dialog.open(MatModalComponent);
    let dialogRef = this.dialog.open(AddEditOfficeComponent, {
      width: '800px',
      data: { 
        component: AddEditOfficeComponent,
        title: 'Add Office'
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log("res==",res)
      if(res) {
        let obj:any = {
          roadNumber: "RRO",
          roadName: res.associatedRoad.name,
          viewRoadInMap:'View',
          district: res.district.name,
          roadLength: 0
        }
        this.dataList.push(obj);
        this.dataSource = new MatTableDataSource<any>(this.dataList);
        // this.addRoadSubject.next();
      }
    });
  }

  onClickRoadTableAction(event:any) {
    console.log("event--",event)
    if(event && event.element && event.action=='Edit') {
      this.editRoadChaonage(event.element)
    }
    
  }
  editRoadChaonage(element:any) {
    element = element;
    console.log(element);
    let originaldata=this.dataSource;
    let dialogRef = this.dialog.open(AddEditOfficeComponent, {
      width: '800px',
      data: { element: element,originalform:this, component: AddEditOfficeComponent, title: 'Edit Office' }
    });
    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
     //this.animal = result;
    //  this.refresh(result);
    });
  }
}
