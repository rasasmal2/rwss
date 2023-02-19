import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Input, OnInit, Output,EventEmitter, OnChanges, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface FoodNode {
  name: string;
  count?: number;
  amount?: string;
  qnty?:any;
  action?:any;
  children?: FoodNode[];
}

// const TREE_DATA: any = [
//   {
//     name: 'Fruit',
//     children: [
//       {name: 'Apple', count: 10},
//       {name: 'Banana', count: 20},
//       {name: 'Fruit loops', count: 30},
//     ]
//   }, {
//     name: 'Vegetables',
//     amount: '756',
//     children: [
//       {
//         name: 'Green',
//         amount: '756',
//         children: [
//           {name: 'Broccoli', count: 10,amount: '756',
//             children: [
//               {name: 'Sub-Broccoli',count: 10, qnty: 10,unit: 'cum',rate: '156', amount: '756',action:'true'}
//             ]
//           }
//         ]
//       }
//     ]
//   },
// ];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  count: number;
  qnty:any;
  action:any;
  level: number;
}
/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})
export class ItemTableComponent implements OnInit, OnChanges{
  displayedColumns: string[] = ['name', 'count', 'qnty', 'unit', 'rate', 'amount','action'];
  @Input() TREE_DATA:any;
  @Output() onEditItem = new EventEmitter<any>();
  private transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      count: node.count,
      amount: node.amount,
      qnty: node?.qnty,
      action: node?.action,
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
    console.log("data==",this.dataSource)
    this.dataSource.data = data;
    // this.dataSource.paginator = this.matPaginator;
    // this.dataSource.sort = this.matSort;
  }

  ngOnInit(): void {
    console.log(" this.TREE_DATA==", this.dataSource);
    // this.dataSource.data = this.TREE_DATA;
  }

  ngOnChanges(changes: any): void {
    console.log("changes=",changes,this.dataSource,this.tableData)
    this.setTableDataSource(this.TREE_DATA)
  }



  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
