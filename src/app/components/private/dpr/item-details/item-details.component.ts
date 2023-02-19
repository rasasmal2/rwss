import { Component, EventEmitter, OnInit, Output, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import config from 'src/assets/config';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit{
  roadForm: any= UntypedFormGroup;
  districtList: any = [{code: '81', name: 'BAJALI'},{code: '8', name: 'BAKSA'},{code: '10', name: 'BARPETA'},{code: '31', name: 'CACHAR'},{code: '1', name: 'CHIRANG'},{code: '12', name: 'DHEMAJI'}];
  roadList: any = [{code: '81', name: '105 to Bhirinciguri (No 1 salbari to Birinchiguri)'},{code: '8', name: 'Amguri (South) to Hasroubari via Bandwguri Part 1 (Hasroubari village to Hasroubari)'},{code: '5', name: 'Amguri Bengtol via Ouguri Road (Amguri relief camp to Bengtol)'},{code: '31', name: 'Amguri Bhirangaon to Hasraobari via Borigara Part 2 (Hasroubari to Haslabari)'},{code: '1', name: 'Amguri IB Road (Amguri to Amguri-IB)'},{code: '12', name: 'Bagargaon to Dewanpara'}];
  sorNameList:any =[{code: '23', name: 'Schedule of Rates for SH.'}];
  sorChapterList:any =[{code: '66', name: 'CARRIAGE OF MATERIALS:'},{code: '67', name: 'SITE CLEARANCE:'},{code: '68', name: 'EARTH WORK, EROSION CONTROL AND DRAINAGE:'},{code: '69', name: 'SUB-BASES, BASES ( NON- BITUMINOUS) AND SHOULDERS:'}];
  sorChapterSubHeadList:any =[{code: '66', name: '1.1 :: Loading and unloading by mechanical means (Placing tipper at loading point, loading with front end loader, dumping, turning for return trip, excluding time for haulage and return trip)'},{code: '67', name: '1.2 :: Loading and Unloading  by Manual Means'},{code: '68', name: '1.2 :: Loading and Unloading  by Manual Means'},{code: '69', name: '1.4 :: Cost of Haulage Excluding Loading and Unloading'}];
  itemList:any =[{code: '66', name: '1.1.A :: 1.1:Loading and unloading by mechanical means (Placing tipper at loading point, loading with front end loader, dumping, turning for return trip, excluding time for haulage and return trip) .A:Boulders'},{code: '67', name: '1.1.B :: 1.1:Loading and unloading by mechanical means (Placing tipper at loading point, loading with front end loader, dumping, turning for return trip, excluding time for haulage and return trip) . B:Stone aggregates'},{code: '68', name: '1.1.C :: 1.1: Loading and unloading by mechanical means (Placing tipper at loading point, loading with front end loader, dumping, turning for return trip, excluding time for haulage and return trip). C: Sand/Moorum/flyash'}];
  workCategoryList:any = [{code: '001', name: 'ABC Work'},{code: '002', name: 'XYZ Work'}]

  @Output() public onItemSubmit = new EventEmitter<any>();

  finYears:any = config.finYear;
  constructor(
    public _formBuilder: UntypedFormBuilder,
    public dialogRef: MatDialogRef<ItemDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    

  ngOnInit(): void {
    this.roadForm = this._formBuilder.group({
      workCategory: ['', Validators.required],
      sorYear: ['', Validators.required],
      sorName: ['', Validators.required],
      sorChapter: ['', Validators.required],
      chapterSubHead: ['', Validators.required],
      item: ['', Validators.required],
      itemDescription: ['', Validators.required],
      unitRate: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      amount: ['', Validators.required],
      unit: ['', Validators.required],
      tenderingItem: ['', Validators.required]
    });
    if(this.data?.data) {
      this.roadForm.setValue({
        sorYear: this.data?.data?.sorYear,
        sorName: this.data?.data?.sorName,
        sorChapter: this.data?.data?.sorChapter,
        chapterSubHead: this.data?.data?.chapterSubHead,
        item: this.data?.data?.item,
        itemDescription: this.data?.data?.itemDescription,
        unitRate: this.data?.data?.unitRate,
        quantity: this.data?.data?.quantity,
        amount: this.data?.data?.amount,
        unit: this.data?.data?.unit,
        tenderingItem: this.data?.data?.tenderingItem
      })
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmitForm(event:any) {
    if(this.roadForm.invalid) return;
    console.log("event item==",this.roadForm)
    this.onItemSubmit.emit(this.roadForm);
    this.dialogRef.close(this.roadForm.value);

  }
  onSelectItem(event:any) {
    if(event && event.name) {
      this.roadForm.patchValue({
        itemDescription: event?.name,
        unitRate: '159.00',
        unit: 'cum'
      })
    }
  }
  onChangeQuantity(event:any) {
    if(event && this.roadForm.value.unitRate) {
      let amt:any = parseFloat(event)*parseFloat(this.roadForm.value.unitRate);
      amt = amt.toFixed(2)
      this.roadForm.patchValue({
        amount:amt
      })
    }
  }
}
