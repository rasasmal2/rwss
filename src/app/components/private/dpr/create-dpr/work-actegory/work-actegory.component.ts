import {AfterViewInit, Component, OnInit, ViewChild, Input, Output, EventEmitter,Inject} from '@angular/core';

import { AbstractControl, FormArray, FormBuilder, FormControl,UntypedFormBuilder, FormGroup,UntypedFormGroup,Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-work-actegory',
  templateUrl: './work-actegory.component.html',
  styleUrls: ['./work-actegory.component.css']
})
export class WorkActegoryComponent implements OnInit, AfterViewInit{
  
  dataList:any = [
    // {position:1, chainageFrom: '0', chainageTo: '2.15'}
    
  ];
  displayedColumns:any = ['position','workDescription','totalCost','action'];
  columnNames:any=[];
  dataSource:any = new MatTableDataSource<any>();

  isLoading = true;

  VOForm: any= UntypedFormGroup;
  isEditableNew: boolean = true;
  @ViewChild(MatPaginator) paginator:any= MatPaginator;
  paginatorList:any;
  idx: any;

  constructor( private fb: UntypedFormBuilder,public _formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    // console.log("datadata==",this.data)
    this.dataSource = new MatTableDataSource<any>(this.dataList);
    
    this.VOForm = this._formBuilder.group({
      VORows: this._formBuilder.array([])
    });
    console.log("this.dataSource==",this.dataSource)
    this.VOForm = this.fb.group({
      VORows: this.fb.array(this.dataList.map((val:any) => this.fb.group({
        position: new FormControl(val.position),
        workDescription: new FormControl(val.workDescription),
        totalCost: new FormControl(val.totalCost),
        action: new FormControl('existingRecord'),
        isEditable: new FormControl(true),
        isNewRow: new FormControl(false),
      })
      )) //end of fb array
    }); // end of form group cretation
    this.isLoading = false;
    this.dataSource = new MatTableDataSource((this.VOForm.get('VORows') as FormArray).controls);
    // this.dataSource.paginator = this.paginator;

    const filterPredicate = this.dataSource.filterPredicate;
      this.dataSource.filterPredicate = (data: AbstractControl, filter:any) => {
        return filterPredicate.call(this.dataSource, data.value, filter);
      }
  }
  onSubmitForm(event:any) {

  }

  onClickEditTableAction(event:any) {
    console.log("edit event==",event)
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  //   this.paginatorList = document.getElementsByClassName('mat-paginator-range-label');

  //  this.onPaginateChange(this.paginator, this.paginatorList);

  //  this.paginator.page.subscribe(() => { // this is page change event
  //    this.onPaginateChange(this.paginator, this.paginatorList);
  //  });
  }


  // @ViewChild('table') table: MatTable<PeriodicElement>;
  AddNewRow() {
    // this.getBasicDetails();
    const control = this.VOForm.get('VORows') as FormArray;
    console.log("control==",control,this.dataSource)
    control.insert(control.value.length,this.initiateVOForm());
    this.dataSource = new MatTableDataSource(control.controls);
    console.log("control==",control,this.dataSource)
    // control.controls.unshift(this.initiateVOForm());
    // this.openPanel(panel);
    //   this.table.renderRows();
    //   this.dataSource.data = this.dataSource.data;
  }

  // this function will enabled the select field for editd
  EditSVO(VOFormElement:any, i:any) {

    // VOFormElement.get('VORows').at(i).get('name').disabled(false)
    VOFormElement.get('VORows').at(i).get('isEditable').patchValue(false);
    // this.isEditableNew = true;

  }

  // On click of correct button in table (after click on edit) this method will call
  SaveVO(VOFormElement:any, i:any) {
    // alert('SaveVO')
    VOFormElement.get('VORows').at(i).get('isEditable').patchValue(true);
  }

  // On click of cancel button in the table (after click on edit) this method will call and reset the previous data
  CancelSVO(VOFormElement:any, i:any) {
    VOFormElement.get('VORows').at(i).get('isEditable').patchValue(true);
  }

  deleteSVO(VOFormElement:any, i:any) {
    // VOFormElement.get('VORows').removeAt(i)

    const control = this.VOForm.get('VORows') as FormArray;
    console.log("control==",control)
    control.removeAt(i);
    this.dataSource = new MatTableDataSource(control.controls)
  }



onPaginateChange(paginator: MatPaginator, list: HTMLCollectionOf<Element>) {
     setTimeout((idx) => {
         let from = (paginator.pageSize * paginator.pageIndex) + 1;

         let to = (paginator.length < paginator.pageSize * (paginator.pageIndex + 1))
             ? paginator.length
             : paginator.pageSize * (paginator.pageIndex + 1);

         let toFrom = (paginator.length == 0) ? 0 : `${from} - ${to}`;
         let pageNumber = (paginator.length == 0) ? `0 of 0` : `${paginator.pageIndex + 1} of ${paginator.getNumberOfPages()}`;
         let rows = `Page ${pageNumber} (${toFrom} of ${paginator.length})`;

         if (list.length >= 1)
             list[0].innerHTML = rows; 

     }, 0, paginator.pageIndex);
}


  initiateVOForm(): FormGroup {
    return this.fb.group({

      position: new FormControl(234),
      workDescription: new FormControl(''),
      totalCost: new FormControl(0),
      action: new FormControl('newRecord'),
      isEditable: new FormControl(false),
      isNewRow: new FormControl(true),
    });
  }
}