import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonServiceService } from 'src/app/_services/common-service.service';
import {  AbstractControl, FormControl, FormGroup,UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators,UntypedFormControl,FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { EChartsOption } from 'echarts';
type BarLabelOption = NonNullable<echarts.BarSeriesOption['label']>;

@Component({
  selector: 'app-kpi-home',
  templateUrl: './kpi-home.component.html',
  styleUrls: ['./kpi-home.component.css']
})
export class KpiHomeComponent implements OnInit{
  searchFormGrp: any= UntypedFormGroup;
  pastWithScheduledList:any = [{code: 'all', name: 'All'},{code: 'div-1', name: 'Division 1'},{code: 'div-2', name: 'Division 2'},{code: 'div-3', name: 'Division 3'}];
  projectTenureList:any = [{code: 'all', name: 'All'},{code: 'div-1', name: 'Division 1'},{code: 'div-2', name: 'Division 2'},{code: 'div-3', name: 'Division 3'}];
  valueList:any = [{code: 'all', name: 'All'},{code: '1', name: '>1Cr to <100Cr'},{code: '2', name: '>100Cr to <200Cr'},{code: '3', name: '>200Cr to <500Cr'},{code: '4', name: '>500Cr to <1000Cr'},{code: '5', name: '>1000Cr'}];
  distList:any = [{code:'All', name:'All'},
  {code:'Angul', name:'Angul'},
  {code:'Balasore', name:'Balasore'},
  
  {code:'Bargarh', name:'Bargarh'},
  {code:'Bhadrak', name:'Bhadrak'},
  {code:'Bolangir', name:'Bolangir'},
  {code:'Boudh', name:'Boudh'},
  {code:'Cuttack', name:'Cuttack'},
  {code:'Deogarh', name:'Deogarh'},
  {code:'Dhenkanal', name:'Dhenkanal'},
  {code:'Gajapati', name:'Gajapati'},
  {code:'Ganjam', name:'Ganjam'},
  {code:'Jagatsignpur', name:'Jagatsignpur'},
  {code:'Jajpur', name:'Jajpur'},
  {code:'Jharsuguda', name:'Jharsuguda'},
  {code:'Kalahandi', name:'Kalahandi'},
  {code:'Kandhamal', name:'Kandhamal'},
  {code:'Kendrapada', name:'Kendrapada'},
  {code:'Keonjhar', name:'Keonjhar'},
  {code:'Khurdha', name:'Khurdha'},
  {code:'Koraput', name:'Koraput'},
  {code:'Malkangiri', name:'Malkangiri'},
  {code:'Mayurbhanj', name:'Mayurbhanj'},
  {code:'Nabrangpur', name:'Nabrangpur'},
  {code:'Nayagarh', name:'Nayagarh'},
  {code:'Nuapada', name:'Nuapada'},
  {code:'Puri', name:'Puri'},
  {code:'Rayagada', name:'Rayagada'},
  {code:'Sambalpur', name:'Sambalpur'},
  {code:'Sonepur', name:'Sonepur'},
  {code:'Sundargarh', name:'Sundargarh'}];
  workList:any = [{code: 'all', name: 'All'},{code: 'Project 1', name: 'Project 1'},{code: 'Project 2', name: 'Project 2'},{code: 'Project 3', name: 'Project 3'},{code: 'Project 4', name: 'Project 4'},{code: 'Project 5', name: 'Project 5'}];
  divisionList:any = [{code: 'all', name: 'All'},{code: 'div-1', name: 'Division 1'},{code: 'div-2', name: 'Division 2'},{code: 'div-3', name: 'Division 3'}];

  constructor(public toastService: ToastrService, public cmnService:CommonServiceService, private _formBuilder: UntypedFormBuilder,private router: Router) {}
  labelOption: any = {
    show: false,
    position: 'right' as BarLabelOption['position'],
    // distance: 30 as BarLabelOption['distance'],
    // align: app.config.align as BarLabelOption['align'],
    // verticalAlign: app.config.verticalAlign as BarLabelOption['verticalAlign'],
    rotate: 0 as BarLabelOption['rotate'],
    formatter: '{c}M',
    fontSize: 12,
    rich: {
      name: {}
    }
  }
  
  fundAllocatedColor= '#005587';
  fundClaimedColor= '#86BC25';
  fundReceivedColor= '#97999B';

  stateChartOption:any = {
    // title: {
    //   text: 'District wise Target vs Achieved PWS Commissioned Till Date',
    //   left: 'center',
    //   textStyle: {
    //     color: '#01458e',
    //     fontSize: '1rem',
    //     fontWeight: 600,
        
    //     fontFamily: 'Open Sans, sans-serif'
    //   }
    // },
    responsive: true,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    yAxis: { name: 'Amount',
    axisLabel : {
      formatter: '{value}Cr'
    }, 
    },
    xAxis: {
      type: 'category',
      data: [
        'Div 1',
        'Div 2',
        'Div 3',
        'Div 4',
        'Div 5'
      ],
      name: 'Division',
      position: 'bottom',
      axisLabel: {
        interval: 0,
        rotate: 30 //If the label names are too long you can manage this by rotating the label.
      },
    },
    series: [
      {
        name: 'Total Contract Value of Ongoing Projects',
        type: 'bar',
        label: this.labelOption,
        color: this.fundClaimedColor,
        emphasis: {
          focus: 'series'
        },
        data: [
          '50',
          '40',
          '45',
          '55',
          '27'
        ]
      },
      {
        name: 'Total Expenditure',
        type: 'bar',
        barGap: 0,
        label: this.labelOption,
        color: this.fundAllocatedColor,
        emphasis: {
          focus: 'series'
        },
        data: [
          '20',
          '18',
          '19',
          '15',
          '14'
        ],
        
      }
    ],
    legend: {
      display: true,
      position: 'bottom',
      y: 10
    },
  };

  stateChartOption2:any = {
    // title: {
    //   text: 'Referer of a Website',
    //   subtext: 'Fake Data',
    //   left: 'center'
    // },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
      // formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      top: '0'
      // top: '-20'
    },
    toolbox: {
      show: false,
     
    },
    series: [
      {
        name: 'Project classification by Criticality',
        type: 'pie',
        radius: '50%',
        
        label:false,
        data: [
          { value: 280, name: 'Delay > 100% wrt contract period' },
          { value: 296, name: '100% Physicall Progress' },
          
          { value: 45, name: 'On-track' },
          { value: 20, name: 'Delay < 50% wrt contract period' },
          { value: 11, name: 'Expected Delay' },
          { value: 10, name: 'Delay between 50-100% wrt contract period' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };


  ngOnInit() {
    this.searchFormGrp = this._formBuilder.group({
      division: ['All'],
      work: ['All'],
      site: ['All'],
      value: ['All'],
      projectTenure: ['All'],
      schedule: ['All'],
    });
  }
  onSearchProperty() {

  }
}
