import { Component, OnInit, Input, ViewEncapsulation, forwardRef } from '@angular/core';
import { ControlContainer, FormControl, ControlValueAccessor, AbstractControl, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true
    }
  ],
})
export class TextAreaComponent implements OnInit {
  @Input() label:any;
  @Input() type:any='';
  @Input() placeholder:any;
  @Input() formControlName:any;
  @Input() style:any;
  
  control:any = AbstractControl;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    if(this.controlContainer && this.formControlName){
      this.control = this.controlContainer.control?.get(this.formControlName);
      console.log("this.control=",this.control)
   }
  }
  writeValue(value: any): void {
    console.log("value----=",value)
    // this.value = value ? value : ''
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }
  

}
