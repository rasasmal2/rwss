import {AfterViewInit, Component, OnInit, ViewChild, Input, Output, EventEmitter,Inject} from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatModalComponent } from 'src/app/components/common/mat-modal/mat-modal.component';
import { AbstractControl, FormArray, FormBuilder, FormControl,UntypedFormBuilder, FormGroup,UntypedFormGroup,Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { startWith, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-road',
  templateUrl: './edit-road.component.html',
  styleUrls: ['./edit-road.component.css']
})
export class EditRoadComponent implements OnInit, AfterViewInit{
  
  dataList:any = [
    // { milestone: '0', startDate: '2.15'}
    
  ];
  displayedColumns:any = ['position','milestone','startDate','endDate','timeline','payment','action'];
  columnNames:any=[];
  dataSource:any = new MatTableDataSource<any>();

  isLoading = true;

  startTimeList:any=[{code: '1', name: 'April 2022'},{code: '2', name: 'May 2022'},
  {code: '3', name: 'Jun 2022'},
  {code: '4', name: 'Jul 2022'},
  {code: '5', name: 'Aug 2022'},
  {code: '6', name: 'Sept 2022'},
  {code: '7', name: 'Oct 2022'},
  {code: '8', name: 'Nov 2022'},
  {code: '9', name: 'Dec 2022'},
  {code: '10', name: 'Jan 2023'},
  {code: '11', name: 'Feb 2023'},
  {code: '12', name: 'Mar 2023'},
  {code: '13', name: 'April 2023'},
  {code: '14', name: 'May 2023'},
  {code: '15', name: 'Jun 2023'},
  {code: '16', name: 'July 2023'},
  {code: '17', name: 'Aug 2023'},
  {code: '18', name: 'Sept 2023'},
  {code: '19', name: 'Oct 2023'},
  {code: '20', name: 'Nov 2023'},
  {code: '21', name: 'Dec 2023'},
  {code: '22', name: 'Jan 2024'},
  {code: '23', name: 'Feb 2024'},
  {code: '24', name: 'Mar 2024'}
  ]
  endTimeList:any=[{code: '1', name: 'April 2022'},{code: '2', name: 'May 2022'},
  {code: '3', name: 'Jun 2022'},
  {code: '4', name: 'Jul 2022'},
  {code: '5', name: 'Aug 2022'},
  {code: '6', name: 'Sept 2022'},
  {code: '7', name: 'Oct 2022'},
  {code: '8', name: 'Nov 2022'},
  {code: '9', name: 'Dec 2022'},
  {code: '10', name: 'Jan 2023'},
  {code: '11', name: 'Feb 2023'},
  {code: '12', name: 'Mar 2023'},
  {code: '13', name: 'April 2023'},
  {code: '14', name: 'May 2023'},
  {code: '15', name: 'Jun 2023'},
  {code: '16', name: 'July 2023'},
  {code: '17', name: 'Aug 2023'},
  {code: '18', name: 'Sept 2023'},
  {code: '19', name: 'Oct 2023'},
  {code: '20', name: 'Nov 2023'},
  {code: '21', name: 'Dec 2023'},
  {code: '22', name: 'Jan 2024'},
  {code: '23', name: 'Feb 2024'},
  {code: '24', name: 'Mar 2024'}
  ]

  VOForm: any= UntypedFormGroup;
  isEditableNew: boolean = true;
  @ViewChild(MatPaginator) paginator:any= MatPaginator;
  paginatorList:any;
  idx: any;

  @Output() public changeMilestone = new EventEmitter<any>();

  constructor( private fb: UntypedFormBuilder,public _formBuilder: UntypedFormBuilder,
    public tosasService: ToastrService) { }


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.dataList);
    
    this.VOForm = this._formBuilder.group({
      VORows: this._formBuilder.array([])
    });
    console.log("this.dataSource==",this.dataSource)
    this.VOForm = this.fb.group({
      VORows: this.fb.array(this.dataList.map((val:any) => this.fb.group({
        // position: new FormControl(val.position),
        milestone: new FormControl(val.milestone,Validators.required),
        startDate: new FormControl(val.startDate,Validators.required),
        endDate: new FormControl(val.endDate,Validators.required),
        timeline: new FormControl(val.timeline,Validators.required),
        payment: new FormControl(val.payment,Validators.required),
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
    control.insert(control.length+1,this.initiateVOForm());
    this.dataSource = new MatTableDataSource(control.controls)
    // control.controls.unshift(this.initiateVOForm());
    // this.openPanel(panel);
      // this.table.renderRows();
      // this.dataSource.data = this.dataSource.data;
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
    
    console.log("---",VOFormElement.get('VORows').at(i).valid)
    if(VOFormElement.get('VORows').at(i).invalid) return;
    let milestoneTable:any = {
      totalPayment: this.getTotalPayment(),
      formValue: this.VOForm.get('VORows')
    }
    this.changeMilestone.emit(milestoneTable)
    VOFormElement.get('VORows').at(i).get('isEditable').patchValue(true);
    
  }

  // On click of cancel button in the table (after click on edit) this method will call and reset the previous data
  CancelSVO(VOFormElement:any, i:any) {
    if(VOFormElement.get('VORows').at(i).invalid) return;
    VOFormElement.get('VORows').at(i).get('isEditable').patchValue(true);
  }
  DeleteSVO(VOFormElement:any, i:any) {
    const control = this.VOForm.get('VORows') as FormArray;
    console.log("control==",control)
    control.removeAt(i);
    this.dataSource = new MatTableDataSource(control.controls)
    this.changeMilestone.emit(this.VOForm.get('VORows'))
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

      // position: new FormControl(234),
      milestone: new FormControl('',Validators.required),
      startDate: new FormControl('',Validators.required),
      endDate: new FormControl('',Validators.required),
      timeline: new FormControl('',Validators.required),
      payment: new FormControl(0,Validators.required),
      action: new FormControl('newRecord'),
      isEditable: new FormControl(false),
      isNewRow: new FormControl(true),
    });
  }

  onSaveChainageDetails() {
    console.log("this.VOFormthis.VOForm==",this.VOForm)
  }
  saveandnext() {
    console.log("this.VOForm ==",this.VOForm.value)
  }
  onChangeStartTime(event:any,index:any) {
    if(event) {
      let enTimeList:any=[], flag=false;
      this.startTimeList.forEach((element:any) => {
        if(element.name==event) flag=true;
        if(flag) {
          enTimeList.push(element)
        }
      });
      this.endTimeList[index] = enTimeList;
      this.onChangeEndTime(event,index)
    }
    
  }

  onChangeEndTime(event:any,index:any) {
    if(event) {
      let startTime:any = this.VOForm.get('VORows').value[index].startDate;
      let endTime:any = this.VOForm.get('VORows').value[index].endDate;
      let startTimeObj:any = this.startTimeList.find((item:any)=> item.name==startTime);
      let endTimeObj:any = this.endTimeList.find((item:any)=> item.name==endTime);
      if(startTimeObj && endTimeObj) {
        let timeline:any = endTimeObj.code-startTimeObj.code;
        console.log("timeline==",timeline)
        this.VOForm.get('VORows').at(index).get('timeline').patchValue(timeline+1+' Months');
      }
    }
  }

  getTotalPayment() {
    let tt:any = this.VOForm.get('VORows').value.map((t:any) => t.payment).reduce((acc:any, value:any) => acc + value, 0);
    return tt;
  }
}
