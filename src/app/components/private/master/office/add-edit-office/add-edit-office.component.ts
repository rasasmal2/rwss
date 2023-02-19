import { Component,Inject, OnInit,Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-office',
  templateUrl: './add-edit-office.component.html',
  styleUrls: ['./add-edit-office.component.css']
})
export class AddEditOfficeComponent implements OnInit{
  officeForm: any= UntypedFormGroup;
  districtList: any = [{code: '81', name: 'BAJALI'},{code: '8', name: 'BAKSA'},{code: '10', name: 'BARPETA'},{code: '31', name: 'CACHAR'},{code: '1', name: 'CHIRANG'},{code: '12', name: 'DHEMAJI'}];
  wingList: any = [{code: '81', name: 'Wing 1'},{code: '8', name: 'Wing 2'},{code: '5', name: 'Wing 3'}];
  officeTypeList: any = [{code: '81', name: 'Type 1'},{code: '8', name: 'Type 2'},{code: '5', name: 'Type 3'}];
  lacList: any = [{code: '81', name: 'LAC 1'},{code: '8', name: 'LAC 2'},{code: '5', name: 'LAC 3'}];

  constructor(public _formBuilder: UntypedFormBuilder,public dialogRef: MatDialogRef<AddEditOfficeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.officeForm = this._formBuilder.group({
      officeName: ['', Validators.required],
      officeType: ['', Validators.required],
      district: ['', Validators.required],
      wing: ['', Validators.required],
      lac: ['', Validators.required],
      isActive: [true]
    });
  }
  onSubmitForm(event:any) {
    if(this.officeForm.valid)
    this.dialogRef.close(this.officeForm.value);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}