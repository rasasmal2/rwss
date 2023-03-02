import { Component, Input, OnInit } from '@angular/core';

import { EChartsOption } from 'echarts';
type BarLabelOption = NonNullable<echarts.BarSeriesOption['label']>;

@Component({
  selector: 'app-kpi-two',
  templateUrl: './kpi-two.component.html',
  styleUrls: ['./kpi-two.component.css']
})
export class KpiTwoComponent implements OnInit {
  @Input() stateSelected: any;

  yearByYearOption: any;
  disbursedAmtOption: any;
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
  isChartDrill21=false;

stateChartOption:any = {
  title: {
    text: 'State Level Fund Utilization for Water Supply & Distribution Network Project',
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
  yAxis: { name: 'Amount',
  axisLabel : {
    formatter: '{value} Cr'
  }, 
  },
  xAxis: {
    type: 'category',
    data: [
      '2018-19',
      '2019-20',
      '2020-21',
      '2021-22',
      '2022-23'
    ],
    name: 'Year',
    position: 'bottom',
    axisLabel: {
      interval: 0,
      rotate: 30 //If the label names are too long you can manage this by rotating the label.
    },
  },
  series: [
    {
      name: 'Funds Allocated',
      type: 'bar',
      barGap: 0,
      label: this.labelOption,
      color: this.fundAllocatedColor,
      emphasis: {
        focus: 'series'
      },
      data: [1500, 1600, 1650, 1800, 2000]
    },
    {
      name: 'Funds Released',
      type: 'bar',
      label: this.labelOption,
      color: this.fundClaimedColor,
      emphasis: {
        focus: 'series'
      },
      data: [1200, 1400, 1100, 1750, 1800]
    },
    {
      name: 'Funds Utilized',
      type: 'bar',
      color: this.fundReceivedColor,
      label: this.labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [1170, 1400, 1100, 1700, 1550]
    }
  ],
  legend: {
    display: true,
    position: 'bottom',
    y: 25
  },
};

stateChartOption12:any = {
  title: {
    text: 'District wise Fund Utilization for FY 2022-23',
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
  yAxis: { name: 'Amount',
  axisLabel : {
    formatter: '{value} Cr'
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
      name: 'Funds Utilized',
      type: 'bar',
      barGap: 0,
      label: this.labelOption,
      color: this.fundAllocatedColor,
      emphasis: {
        focus: 'series'
      },
      data: [
        38,
        67,
        52,
        32,
        27,
        29,
        65,
        20,
        36,
        75,
        150,
        32,
        38,
        33,
        42,
        43,
        38,
        56,
        64,
        59,
        59,
        95,
        37,
        57,
        27,
        46,
        83,
        47,
        38,
        65
      ]
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
  }
  onChartEvent21(event: any, val: any) {
    this.isChartDrill21 = !this.isChartDrill21;
  }
}

