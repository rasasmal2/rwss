import { Component, EventEmitter, OnInit, Output, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import config from 'src/assets/config';

@Component({
  selector: 'app-copy-dpr-dialog',
  templateUrl: './copy-dpr-dialog.component.html',
  styleUrls: ['./copy-dpr-dialog.component.css']
})
export class CopyDprDialogComponent implements OnInit{
  copyDPRFOrm: any= UntypedFormGroup;
  
  

  @Output() public onItemSubmit = new EventEmitter<any>();
  isEdit:any=false;
  selectedRow:any;

  searchTableColumns:any = [{col:'select', name: 'Select'},{col:'dprNo', name: 'DPR No.'},{col:'dprName', name: 'DPR Name'},{col:'createdOn', name: 'Created On'},{col:'createdBy', name: 'Created By'}];
  searchTableDataSource:any = [
    { dprNo: '010023', dprName: 'Test 001',createdOn:'20/01/2023', createdBy: 'Diganta Goswami' },
    { dprNo: '010024', dprName: 'Test 002',createdOn:'21/01/2023', createdBy: 'Diganta Goswami' }
  
  ];

  constructor(
    public _formBuilder: UntypedFormBuilder,
    public dialogRef: MatDialogRef<CopyDprDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public tostService: ToastrService) { }

    

  ngOnInit(): void {
    this.copyDPRFOrm = this._formBuilder.group({
      dprName: [''],
      dprNo: [''],
      createFrom: [''],
      createTo: ['']
    });
    if(this.data?.data) {
      console.log("this.data?.data==",this.data?.data)
      this.isEdit=true;
      this.copyDPRFOrm.setValue({
        dprName: this.data?.data?.dprName,
        dprNo: this.data?.data?.dprNo,
        createFrom: this.data?.data?.createFrom,
        createTo: this.data?.data?.createTo
      })
    }
  }
  onSelectCheckBox(event:any) {
    console.log(event);
    this.selectedRow=event;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSearchCopyDPR(event:any) {
    if(this.copyDPRFOrm.invalid) return;
    console.log("event item==",this.copyDPRFOrm)
    // this.onItemSubmit.emit(this.copyDPRFOrm);
    // this.dialogRef.close(this.copyDPRFOrm.value);

  }
  onCopyDPR() {
    console.log("this.selectedRow==",this.selectedRow)
    if(this.selectedRow){
      this.dialogRef.close(this.selectedRow);
    }else {
      this.tostService.error('Please select a DPR');
    }
    
  }
}

