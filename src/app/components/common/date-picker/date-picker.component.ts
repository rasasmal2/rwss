import { Component, OnInit, Input, ViewEncapsulation, forwardRef } from '@angular/core';
import { ControlContainer, FormControl, ControlValueAccessor, AbstractControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ],
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {
  @Input() label:any;
  @Input() type:any='';
  @Input() isMobile:any='';
  @Input() placeholder:any;
  @Input() formControlName:any;
  @Input() maxlength:any=100;
  @Input() style:any;
  control:any = AbstractControl;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    if(this.controlContainer && this.formControlName){
      this.control = this.controlContainer.control?.get(this.formControlName);
      console.log("this.control=",this.control)
   }

  }

  registerOnChange(){

  }

  registerOnTouched(){

  }
  writeValue(){

  }
  setDisabledState(){

  }

}
