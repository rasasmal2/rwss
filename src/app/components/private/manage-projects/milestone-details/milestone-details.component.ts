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
          startDate:'Apr-2022', 
          endDate: 'Sep-2022', 
          timeline:'6 months', 
          payment:'1%',
          progress: '',
          paymentMode:''
        },
        {
          milestone: 'Construction of Intake Well',
          startDate:'Oct-2022', 
          endDate: 'Apr-2023', 
          timeline:'7 months', 
          payment:'3%',
          progress: '',
          paymentMode:''
        },
        {
          milestone: 'Supply of pipes, laying ,fitting & fixing from Raw water source to WTP',
          startDate:'Oct-2022', 
          endDate: 'May-2023', 
          timeline:'8 months', 
          payment:'3%',
          progress: '',
          paymentMode:''
        },
        {
          milestone: 'Completion of WTP work',
          startDate:'Oct-2022', 
          endDate: 'Aug-2023', 
          timeline:'11 months', 
          payment:'3%',
          progress: '',
          paymentMode:''
        },
        {
          milestone: 'Supply of pipes, laying ,fitting & fixing from Clear water rising main to Elevated storage Reservoirs',
          startDate:'Mar-2023', 
          endDate: 'Aug-2023', 
          timeline:'6 months', 
          payment:'20%',
          progress: '',
          paymentMode:''
        },
        {
          milestone: 'Design, Construction, Testing & Commissioning of ESR',
          startDate:'Oct-2022', 
          endDate: 'Aug-2023', 
          timeline:'11 months', 
          payment:'30%',
          progress: '',
          paymentMode:''
        },
        {
          milestone: 'Supply of HDPE Pipes, laying and jointing to complete distribution system',
          startDate:'Oct-2022', 
          endDate: 'Aug-2023', 
          timeline:'11 months', 
          payment:'30%',
          progress: '',
          paymentMode:''
        },
        {
          milestone: 'Supplying, fitting & fixing of flow meter, PLC Scada and all other Instruments',
          startDate:'Oct-2022', 
          endDate: 'Nov-2023', 
          timeline:'2 months', 
          payment:'3%',
          progress: '',
          paymentMode:''
        },
        {
          milestone: 'Completion of inspection, Testing, Trial Run & final Acceptance',
          startDate:'Dec-2023', 
          endDate: 'Feb-2024', 
          timeline:'3 months', 
          payment:'10%',
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