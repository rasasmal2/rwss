import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Input, OnInit, Output,EventEmitter, OnChanges, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import config from '../../../../../../assets/config'


interface FoodNode {
  milestone: string;
  startDate?: string;
  endDate?:any;
  children?: FoodNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  milestone: string;
  startDate:any;
  endDate:any;
  level: number,
}

@Component({
  selector: 'app-project-dashboart-table',
  templateUrl: './project-dashboart-table.component.html',
  styleUrls: ['./project-dashboart-table.component.css']
})
export class ProjectDashboartTableComponent implements OnInit, OnChanges{
  displayedColumns: string[] = ['milestone', 'startDate', 'endDate'];
  TREE_DATA:any = config.milestoneList;
  @Output() onEditItem = new EventEmitter<any>();
  private transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      milestone: node.milestone,
      startDate: node.startDate,
      endDate: node.endDate,
      level: level,
    };
  }

  treeControl:any = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level, 
      node => node.expandable, node => node.children);

  public dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  @Input() set tableData(data: any[]) {
    console.log("tableData==",data)
    this.setTableDataSource(data);
  }
  @Input() isClisked:any;

  @ViewChild(MatPaginator, {static: false}) matPaginator:any= MatPaginator;
  @ViewChild(MatSort, {static: true}) matSort:any= MatSort;

  constructor() {
    
  }
  onEdit(data:any) {
    this.onEditItem.emit(data)
  }

  setTableDataSource(data: any) {
    console.log("data==",this.dataSource,this.TREE_DATA)
    this.dataSource.data = data;
    // this.dataSource.paginator = this.matPaginator;
    // this.dataSource.sort = this.matSort;
  }

  ngOnInit(): void {
    console.log(" this.TREE_DATA==", this.dataSource,this.TREE_DATA);
    this.dataSource.data = this.TREE_DATA;
  }

  ngOnChanges(changes: any): void {
    console.log("changes=",changes,this.dataSource,this.tableData)
    this.setTableDataSource(this.TREE_DATA)
  }



  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
