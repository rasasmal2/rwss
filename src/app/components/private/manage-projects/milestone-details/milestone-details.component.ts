import {AfterViewInit, Component, OnInit, ViewChild, Input, Output, EventEmitter,Inject} from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatModalComponent } from 'src/app/components/common/mat-modal/mat-modal.component';
import { AbstractControl, FormArray, FormBuilder, FormControl,UntypedFormBuilder, FormGroup,UntypedFormGroup,Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { startWith, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-milestone-details',
  templateUrl: './milestone-details.component.html',
  styleUrls: ['./milestone-details.component.css']
})
export class MilestoneDetailsComponent implements OnInit, AfterViewInit{
  
  dataList:any = [
    // { milestone: '0', startDate: '2.15'}
    
  ];
  displayedColumns:any = ['position','milestone','startDate','endDate','timeline','payment','progress','paymentMode'];
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


  ngOnInit(): void {
    
    
    
    // this.isLoading = false;

      let dataList:any = [
        {
          milestone: 'Survey, Design & Drawing',
          startDate:'M1', 
          endDate: 'M6', 
          timeline:'6 months', 
          payment:'1%',
          progress: '',
          paymentMode:''
        },
        {
          milestone: 'Construction of Intake Well',
          startDate:'M7', 
          endDate: 'M14', 
          timeline:'6 months', 
          payment:'3%',
          progress: '',
          paymentMode:''
        },
        {
          milestone: 'Supply of pipes, laying ,fitting & fixing from Raw water rising main to WTP',
          startDate:'M7', 
          endDate: 'M15', 
          timeline:'12 months', 
          payment:'10%',
          progress: '',
          paymentMode:''
        },
        {
          milestone: 'Supply of pipes, laying ,fitting & fixing from Clear water rising main to Elevated storage Reservoirs',
          startDate:'M12', 
          endDate: 'M18', 
          timeline:'12 months', 
          payment:'40%',
          progress: '',
          paymentMode:''
        },
        {
          milestone: 'Design, Construction, Testing & Commissioning of ESR',
          startDate:'M6', 
          endDate: 'M18', 
          timeline:'24 months', 
          payment:'43%',
          progress: '',
          paymentMode:''
        }
      ]

      this.dataSource = new MatTableDataSource<any>(dataList);
  }
  submit(event:any) {
    this.tosasService.success('Milestone Submitted Successfully');
  }
  save(event:any) {
    this.tosasService.success('Milestone Saved Successfully');
  }

  onClickEditTableAction(event:any) {
    console.log("edit event==",event)
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
    console.log("this.VOForm ==",this.VOForm.value)
  }
}