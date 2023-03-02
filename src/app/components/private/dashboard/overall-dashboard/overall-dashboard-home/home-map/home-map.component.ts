import { Component, Input, OnInit } from '@angular/core';
import config from '../../../../../../../assets/config';

import { EChartsOption } from 'echarts';
type BarLabelOption = NonNullable<echarts.BarSeriesOption['label']>;

@Component({
  selector: 'app-home-map',
  templateUrl: './home-map.component.html',
  styleUrls: ['./home-map.component.css']
})
export class HomeMapComponent implements OnInit {
  @Input() stateSelected: any;

  yearByYearOption: any;
  disbursedAmtOption: any;

  stateOptions:any = config.state;
  data1: (string | number)[][] =[
    ['andhra pradesh', 2],
    ['bihar', 2],
    ['haryana', 3], 
    ['telangana', 4], 
    ['rajasthan', 5],
    ['assam', 5.7],
    ['karnataka', 6],
    ['madhya pradesh', 6.4],
    ['tamil nadu', 6.5],
    ['uttar pradesh', 7],
    ['gujarat', 7.5],
    ['odisha', 8],
    ['maharashtra', 8.5],
    ['west bengal', 9]
];
labelOption2: any = {
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
};
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
  fundClaimedColor= '#86BC25'
  // '#ed8b00c7';
  fundReceivedColor= '#97999B';

stateChartOption:any = {
  title: {
    text: 'District wise Target vs Achieved PWS Commissioned Till Date',
    left: 'center',
    textStyle: {
      color: '#01458e',
      fontSize: '1rem',
      fontWeight: 600,
      
      fontFamily: 'Open Sans, sans-serif'
    }
  },
  responsive: true,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  yAxis: { name: 'Number',
  axisLabel : {
    formatter: '{value}'
  }, 
  },
  xAxis: {
    type: 'category',
    data: [
      'Angul',
      'Balasore',
      'Bargarh',
      'Bhadrak',
      'Bolangir',
      'Boudh',
      'Cuttack',
      'Deogarh',
      'Dhenkanal',
      'Gajapati',
      'Ganjam',
      'Jagatsignpur',
      'Jajpur', 
      'Jharsuguda',
      'Kalahandi',
      'Kandhamal',
      'Kendrapada',
      'Keonjhar',
      'Khurdha',
      'Koraput',
      'Malkangiri',
      'Mayurbhanj',
      'Nabrangpur',
      'Nayagarh',
      'Nuapada',
      'Puri',
      'Rayagada',
      'Sambalpur',
      'Sonepur',
      'Sundargarh',
    ],
    name: 'Districts',
    position: 'bottom',
    axisLabel: {
      interval: 0,
      rotate: 30 //If the label names are too long you can manage this by rotating the label.
    },
  },
  series: [
    {
      name: 'Target',
      type: 'bar',
      label: this.labelOption,
      color: this.fundClaimedColor,
      emphasis: {
        focus: 'series'
      },
      data: [
        '244',
        '530',
        '404',
        '186',
        '491',
        '136',
        '503',
        '160',
        '234',
        '563',
        '1172',
        '250',
        '304',
        '202',
        '260',
        '187',
        '248',
        '382',
        '401',
        '395',
        '323',
        '606',
        '274',
        '379',
        '128',
        '295',
        '419',
        '234',
        '242',
        '516',
      ]
    },
    {
      name: 'Achived',
      type: 'bar',
      barGap: 0,
      label: this.labelOption,
      color: this.fundAllocatedColor,
      emphasis: {
        focus: 'series'
      },
      data: [
        '220',
        '480',
        '380',
        '170',
        '430',
        '128',
        '380',
        '140',
        '190',
        '530',
        '1120',
        '210',
        '280',
        '180',
        '210',
        '150',
        '230',
        '350',
        '350',
        '370',
        '307',
        '580',
        '230',
        '310',
        '115',
        '280',
        '405',
        '212',
        '220',
        '511',
      ],
      
    }
  ],
  legend: {
    display: true,
    position: 'bottom',
    y: 25
  },
};

  constructor() { }

  ngOnInit(): void { 
    console.log(this.stateSelected);
    
    this.loadYearByYearChart();
    this.loadDisbursedAmtChart();
   
  }
  getDataloadYearByYearChart() {
    if(this.stateSelected) {
      return [106,97,86,105,105];
    }else {
      return [106,97,86,105,105];
    }
  }
  getDataAmtChart() {
    if(this.stateSelected) {
      return ['105', '119', '134', '141'];
    }else {
      return ['8', '9', '10', '12'];
    }
  }

  loadYearByYearChart() {
    this.yearByYearOption = {
      title:{
        text:  'Applications by Year',
        left: 'center'
      },
      barCategoryGap: 3,
      grid: { containLabel: true },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        //  name: 'Disbursed Amount',
      axisLabel : {
        // formatter: '{value}M'
      }
      },
      yAxis: {
        type: 'category',
        data: ['2018-19','2019-20','2020-21', '2021-22', '2022-23'],
        // name: 'State',
        
      },
      color: '#86BC25',
      series: [{
        type: 'bar',
        data: this.getDataloadYearByYearChart(),
        label: this.labelOption2,
      }],
      legend: {
        display: true,
        position: 'bottom',
        y: 350
      },
    
    }
  }
  loadDisbursedAmtChart() {
    this.disbursedAmtOption = {
      title:{
        text: 'Disbursed Amount by KPIs',
        left: 'center'
      },
      barCategoryGap: 3,
      grid: { containLabel: true },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: { 
      name: 'Disbursed Amount',
      align: 'center',
      axisLabel : {
        formatter: '{value}M',
        align: 'center'
      }
      },
      yAxis: {
        type: 'category',
        data: ['Enforcement','Vehicle Safety & Driver Training','Post-Crash Care', 'Road Engineering'],
        // name: 'State',
        
      },
      color: '#86BC25',
      series: [{
        type: 'bar',
        data: this.getDataAmtChart(),
        label: this.labelOption2,
      }],
      legend: {
        display: true,
        position: 'bottom',
        y: 350
      },
    
    }
  }
  getBarData() {
    let arr:any = [];
    this.data1.forEach((element:any) => {
      this.stateOptions.forEach((state:any) => {
        let stateLower = state.toLowerCase();
        if(stateLower == element[0]) {
          arr.push(element[1])
        }
      });
    });
    return arr;
  }

}

