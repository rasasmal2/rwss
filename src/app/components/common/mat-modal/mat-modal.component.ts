import { Component, Inject,Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-modal',
  templateUrl: './mat-modal.component.html',
  styleUrls: ['./mat-modal.component.css']
})
export class MatModalComponent {
  constructor(
    public dialogRef: MatDialogRef<MatModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
    onItemSubmit(event:any) {
      console.log("onItemSubmit event==",this.dialogRef)
    }
}
