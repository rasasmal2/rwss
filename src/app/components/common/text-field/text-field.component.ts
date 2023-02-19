import { Component, OnInit, Input, ViewEncapsulation, forwardRef, Output,EventEmitter  } from '@angular/core';
import { ControlContainer, FormControl, ControlValueAccessor, AbstractControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldComponent),
      multi: true
    }
  ],
})
export class TextFieldComponent implements ControlValueAccessor, OnInit {
  @Input() label:any;
  @Input() type:any='';
  @Input() isMobile:any='';
  @Input() placeholder:any;
  @Input() formControlName:any;
  @Input() maxlength:any=100;
  @Input() style:any;
  @Input() isReadOnly:any;
  @Input() matIcon:any;
  @Input() iconStyle:any
  @Input() fieldAppearence:any;
  @Output() onBlur = new EventEmitter<any>();

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
  onBlurField(event:any) {
    console.log("onBlur==",event.target.value,this.control.valid)
    if(this.control.valid && event.target.value)
    this.onBlur.emit(event.target.value)
  }

}
