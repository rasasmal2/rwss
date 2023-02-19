import { Component, EventEmitter, OnInit, Output, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import config from 'src/assets/config';

@Component({
  selector: 'app-attachment-details',
  templateUrl: './attachment-details.component.html',
  styleUrls: ['./attachment-details.component.css']
})
export class AttachmentDetailsComponent implements OnInit{
  misForm: any= UntypedFormGroup;
  attachmentTypeList:any = [{code: '1', name: 'Social Documents'},{code: '2', name: 'Environment Management Plan'},{code: '3', name: 'Land Acquisition Plan'},{code: '4', name: 'Resettlement and Rehabilitation Documents '},{code: '5', name: 'Water Supply Line Shifting'}];


  @Output() public onItemSubmit = new EventEmitter<any>();
  isEdit:any=false;

  constructor(
    public _formBuilder: UntypedFormBuilder,
    public dialogRef: MatDialogRef<AttachmentDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    

  ngOnInit(): void {
    this.misForm = this._formBuilder.group({
      attachment: ['', Validators.required],
      type: ['', Validators.required],
      description: ['']
    });
    if(this.data?.data) {
      console.log("this.data?.data==",this.data?.data)
      this.isEdit=true;
      this.misForm.setValue({
        attachment: 'www.png',
        type: this.attachmentTypeList.find((item:any) => item.name === this.data?.data?.type),
        description: this.data?.data?.description
      })
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmitForm(event:any) {
    if(this.misForm.invalid) return;
    console.log("event item==",this.misForm)
    this.onItemSubmit.emit(this.misForm);
    this.dialogRef.close(this.misForm.value);

  }
}
