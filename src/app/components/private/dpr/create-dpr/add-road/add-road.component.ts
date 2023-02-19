import { Component,Inject, OnInit,Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-road',
  templateUrl: './add-road.component.html',
  styleUrls: ['./add-road.component.css']
})
export class AddRoadComponent implements OnInit{
  roadForm: any= UntypedFormGroup;
  districtList: any = [{code: '81', name: 'BAJALI'},{code: '8', name: 'BAKSA'},{code: '10', name: 'BARPETA'},{code: '31', name: 'CACHAR'},{code: '1', name: 'CHIRANG'},{code: '12', name: 'DHEMAJI'}];
  roadList: any = [{code: '81', name: '105 to Bhirinciguri (No 1 salbari to Birinchiguri)'},{code: '8', name: 'Amguri (South) to Hasroubari via Bandwguri Part 1 (Hasroubari village to Hasroubari)'},{code: '5', name: 'Amguri Bengtol via Ouguri Road (Amguri relief camp to Bengtol)'},{code: '31', name: 'Amguri Bhirangaon to Hasraobari via Borigara Part 2 (Hasroubari to Haslabari)'},{code: '1', name: 'Amguri IB Road (Amguri to Amguri-IB)'},{code: '12', name: 'Bagargaon to Dewanpara'}];


  constructor(public _formBuilder: UntypedFormBuilder,public dialogRef: MatDialogRef<AddRoadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.roadForm = this._formBuilder.group({
      district: ['', Validators.required],
      associatedRoad: ['', Validators.required]
    });
  }
  onSubmitForm(event:any) {
    if(this.roadForm.valid)
    this.dialogRef.close(this.roadForm.value);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
