import { Component, OnInit,OnChanges, Input,Output,EventEmitter, forwardRef, } from '@angular/core';
import { ControlContainer, UntypedFormControl, AbstractControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-search',
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectSearchComponent),
      multi: true
    }
  ]
})
export class SelectSearchComponent implements OnInit, OnChanges {

  @Input() label:any;
  @Input() type:any='';
  @Input() placeholder:any;
  @Input() formControlName:any;
  @Input() optionList: any;
  @Input() valueOnly:any=false;
  @Input() style: any;
  control:any = AbstractControl;

  options: any;

  @Output() onChangeValue = new EventEmitter<any>();

  selectCtrl:any;
  value:any;
  public searchFilterCtrl: UntypedFormControl  = new UntypedFormControl();


  constructor(private controlContainer: ControlContainer) { }
  ngOnChanges(changes: any) {
    if(this.optionList && this.optionList.length>0) {
      this.options = JSON.parse(JSON.stringify(this.optionList));
      
    }
    if(this.controlContainer && this.formControlName){
      this.selectCtrl = this.controlContainer.control?.get(this.formControlName);
      console.log("this.control=",this.selectCtrl)
    }
    
  }
  ngOnInit() {
    if(this.optionList && this.optionList.length>0) {
      this.options = JSON.parse(JSON.stringify(this.optionList));
      console.log("this.options==",this.options)
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
  onSelect(val: any) {
    console.log("value==",val)
    this.onChangeValue.emit(val);
  }

  search(){
    let query = this.searchFilterCtrl.value;
    console.log('query', query)
    let result = this.select(query)
    console.log("result=",result)
    this.options = result;
  }
  select(query: string):string[]{
    let result: string[] = [];
    for(let a of this.optionList){
      if(a.name.toLowerCase().indexOf(query) > -1){
        result.push(a)
      }
    }
    return result
  }
}
