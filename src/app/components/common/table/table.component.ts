import { Component,EventEmitter, OnInit, Input, Output, AfterViewInit, ViewChild, OnChanges,OnDestroy, SimpleChanges } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {  MatDialog } from '@angular/material/dialog';
import { MatModalComponent } from '../mat-modal/mat-modal.component';
import { SelectionModel } from "@angular/cdk/collections";
import { Observable, Subscription, tap } from 'rxjs';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  implements AfterViewInit, OnInit, OnChanges,OnDestroy {
  selection = new SelectionModel<any>(true, []);

  @Input() dataList:any=[];
  @Input() displayedColumns:any=[];
  @Output() onClickAction = new EventEmitter<any>();
  @Output() selectCheckBox = new EventEmitter<any>();
  columnNames:any=[];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator:any= MatPaginator;
  @ViewChild(MatSort) sort:any= MatSort;
  @Input() events: Observable<void>;
  private eventsSubscription: Subscription;

  @ViewChild('table', { static: true }) table:any;

  constructor(public dialog: MatDialog){}
  ngOnInit() {
    // this.dataSource = new MatTableDataSource<any>(this.dataList);
    // this.streamOfDataUpdates.subscribe(newData => this.myDataSource.data = newData);
    for (const column of this.displayedColumns) {
      this.columnNames.push(column.col);
    }

    // this.eventsSubscription = this.events.subscribe(() => this.doSomething());
  }
  doSomething() {
    // this.dataSource = new MatTableDataSource<any>(this.dataList);
    // console.log("this.dataSource==",this.dataSource,this.dataList)
  }
  ngOnDestroy() {
    // this.eventsSubscription.unsubscribe();
  }
  onEdit(element:any) {
    let obj = {element: element, action: 'Edit'}
    this.onClickAction.emit(obj);
    // element = element;
    // let componentName
    // console.log(element);
    // let originaldata=this.dataSource;
    // let dialogRef = this.dialog.open(MatModalComponent, {
    //   width: '250px',
    //   data: { element: element,originalform:this, component: this.editActionComponent?editActionComponent:null }
    // });
    // dialogRef.afterClosed().subscribe((result:any) => {
    //   console.log('The dialog was closed');
    //  //this.animal = result;
    //  this.refresh(result);
    // });
  }
  onDelete(element:any) {
    
  }
  onView(element:any) {
    let obj = {element: element, action: 'View'}
    this.onClickAction.emit(obj);
  }
  refresh(res:any) {

  }
  ngAfterViewInit() {
    
    // this.dataList.paginator = this.paginator;
    // this.dataList.sort = this.sort;
    
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  applyFilter(event:any) {

  }

  selectHandler(event:any, row: any) {
    
    if (!this.selection.isSelected(row)) {
      this.selection.clear();
    }
    this.selection.toggle(row);
    if(event.checked) {
      this.selectCheckBox.emit(row);
    } else {
      this.selectCheckBox.emit(null);
    }
    
  }

}
