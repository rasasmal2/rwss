import {AfterViewInit, Component, OnInit, ViewChild, Input, Output, EventEmitter,Inject} from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatModalComponent } from 'src/app/components/common/mat-modal/mat-modal.component';
import { AbstractControl, FormArray, FormBuilder, FormControl,UntypedFormBuilder, FormGroup,UntypedFormGroup,Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { startWith } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { SelectionModel } from "@angular/cdk/collections";
import { Observable, Subscription, tap } from 'rxjs';
import config from '../../../../../assets/config';

@Component({
  selector: 'app-milestone-details',
  templateUrl: './milestone-details.component.html',
  styleUrls: ['./milestone-details.component.css']
})
export class MilestoneDetailsComponent implements OnInit, AfterViewInit{
  selection = new SelectionModel<any>(true, []);
  dataList:any = [
    // { milestone: '0', startDate: '2.15'}
    
  ];
  displayedColumns:any = ['position','milestone','startDate','endDate','payment','progress'];
  columnNames:any=[];
  dataSource:any = new MatTableDataSource<any>();

  isLoading = true;

  VOForm: any= UntypedFormGroup;
  isEditableNew: boolean = true;
  @ViewChild(MatPaginator) paginator:any= MatPaginator;
  paginatorList:any;
  idx: any;

  @Output() public changeMilestone = new EventEmitter<any>();

  constructor( private fb: UntypedFormBuilder,public _formBuilder: UntypedFormBuilder,
    public tosasService: ToastrService) { }

    selectHandler(event:any, row: any) {
    
      // if (!this.selection.isSelected(row)) {
      //   this.selection.clear();
      // }
      this.selection.toggle(row);
      if(event.checked) {
        // this.selectCheckBox.emit(row);
      } else {
        // this.selectCheckBox.emit(null);
      }
      
    }

  ngOnInit(): void {
    
    
    
    // this.isLoading = false;

      let dataList:any = config.milestoneList;

      this.dataSource = new MatTableDataSource<any>(dataList);
  }
  submit(event:any) {
    this.changeMilestone.emit({msg:'Milestone Saved Successfully'});
    
  }
  save(event:any) {
    this.tosasService.success('Milestone Saved Successfully');
  }

  onClickEditTableAction(event:any) {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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

  saveandnext() {
  }
}