import { Component, EventEmitter, OnInit, Output, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import config from 'src/assets/config';

@Component({
  selector: 'app-mis-details',
  templateUrl: './mis-details.component.html',
  styleUrls: ['./mis-details.component.css']
})
export class MisDetailsComponent  implements OnInit{
  misForm: any= UntypedFormGroup;
  costTypeList:any = [{code: '1', name: 'Percentage'},{code: '2', name: 'Lumpsum'}];
  costHeadList:any = [{code: '1', name: 'Miscellaneous Work'},{code: '2', name: 'DPR Preparation Cost'},{code: '3', name: 'Price Contingencies'},{code: '4', name: 'Physical Contingencies'},{code: '5', name: 'Price Escalation'},{code: '6', name: 'Premium for Remoteness'},{code: '7', name: 'GST'},{code: '8', name: 'Labour Cess'}];


  @Output() public onItemSubmit = new EventEmitter<any>();
  isEdit:any=false;
  isPercentage:any=false;

  constructor(
    public _formBuilder: UntypedFormBuilder,
    public dialogRef: MatDialogRef<MisDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    

  ngOnInit(): void {
    this.misForm = this._formBuilder.group({
      costType: ['', Validators.required],
      costHead: ['', Validators.required],
      percentage: ['', Validators.required],
      comments: [''],
      cost: ['']
    });
    if(this.data?.data) {
      console.log("this.data?.data==",this.data?.data)
      this.isEdit=true;
      this.misForm.setValue({
        costType: JSON.parse(JSON.stringify(this.costTypeList.find((item:any) => item.name === this.data?.data?.costType))),
        costHead: JSON.parse(JSON.stringify(this.costHeadList.find((item:any) => item.name === this.data?.data?.costHead))),
        percentage: this.data?.data?.percentage,
        comments: this.data?.data?.comments,
        cost: this.data?.data?.cost
      })
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmitForm(event:any) {
    if(this.misForm.invalid) return;
    console.log("event item==",this.misForm)
    // this.onItemSubmit.emit(this.misForm);
    this.dialogRef.close(this.misForm.value);

  }
  onChangePercentage() {
    if(this.misForm.value.percentage) {
      console.log("percentage==",parseInt(this.misForm?.value?.percentage),this.data?.totalCost,parseInt(this.data?.totalCost))
      this.misForm.patchValue({
        cost: (parseFloat(this.misForm?.value?.percentage)/100)*parseFloat(this.data?.totalCost)
      })
    }
  }
  onChangeCostType(event:any) {
    this.misForm.get('cost').setValue('');
    this.misForm.get('percentage').setValue('');
    console.log("event.code==",event.code)
    if(event && event.code==1) {
      this.isPercentage=true;
      this.misForm.get('percentage').setValidators([Validators.required, Validators.maxLength(100)]);
      this.misForm.get("percentage").setErrors({'required':true});
      this.misForm.get('percentage').updateValueAndValidity();
      this.misForm.get('cost').setValidators([]);
      this.misForm.get("cost").setErrors(null);
      this.misForm.get('cost').updateValueAndValidity();
    } else if(event && event.code==2) {
      this.isPercentage=false;
      this.misForm.get('cost').setValidators([Validators.required, Validators.maxLength(100)]);
      this.misForm.get("cost").setErrors({'required':true});
      this.misForm.get('cost').updateValueAndValidity();
      this.misForm.get('percentage').setValidators([]);
      this.misForm.get("percentage").setErrors(null);
      this.misForm.get('percentage').updateValueAndValidity();
    }
  }
}
