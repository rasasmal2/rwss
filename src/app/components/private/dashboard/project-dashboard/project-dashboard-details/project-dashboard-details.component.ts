import { Component, OnInit,Input } from '@angular/core';
import { EChartsOption } from 'echarts';
type BarLabelOption = NonNullable<echarts.BarSeriesOption['label']>;
@Component({
  selector: 'app-project-dashboard-details',
  templateUrl: './project-dashboard-details.component.html',
  styleUrls: ['./project-dashboard-details.component.css']
})
export class ProjectDashboardDetailsComponent implements OnInit {

  @Input() projectData:any

  labelOption = {
    show: true,
    // position: 'right' as BarLabelOption['position'],
    // distance: app.config.distance as BarLabelOption['distance'],
    // align: app.config.align as BarLabelOption['align'],
    // verticalAlign: app.config.verticalAlign as BarLabelOption['verticalAlign'],
    rotate: 0 as BarLabelOption['rotate'],
    formatter: '{c}%',
    fontSize: 12,
    rich: {
      name: {}
    }
  }

  chartOption: EChartsOption  = {
    title: {
      text: 'Project Progress Till Date',
      textStyle: {
        color: '#01458e',
        fontSize: '1rem',
        fontWeight: 600,
        fontFamily: 'Open Sans, sans-serif'
      }
    },
    xAxis: {
      type: 'category',
      data: ['Target', 'Achived']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [
          {
            value: 80,
            itemStyle: {
              color: '#28a745'
            }
          },
          {
            value: 60,
            itemStyle: {
              color: '#b52937'
            }
          },
          100, 10  ],
        type: 'bar'
      }
    ]
  };

  chartOption2: EChartsOption  = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}Cr ({d}%)'
    },
    legend: {
      data: [
        'Project Value',
        'Payment Release',
        'Invoice Raised',
        // 'Email',
        // 'Union Ads',
        // 'Video Ads',
        // 'Baidu',
        // 'Google',
        // 'Bing',
        // 'Others'
      ]
    },
    series: [
      {
        name: 'Financial Progress',
        type: 'pie',
        // selectedMode: 'single',
        radius: [0, '30%'],
        // label: {
        //   position: 'inner',
        //   fontSize: 14
        // },
        labelLine: {
          length: 30
        },
        data: [
          { value: 6, name: 'Payment Release', itemStyle:{color: '#0cc478'} },
          { value: 2, name: 'Invoice Raised',itemStyle:{color: '#7dcbab'} },
          // { value: 679, name: 'Marketing', selected: true }
        ]
      },
      {
        name: 'Financial Progress',
        type: 'pie',
        radius: ['45%', '60%'],
        labelLine: {
          length: 30
        },
        label: {
          // formatter: '{a} <br/>{b}: {c}Cr ({d}%)',
          // backgroundColor: '#F6F8FC',
          // borderColor: '#8C8D8E',
          // borderWidth: 1,
          // borderRadius: 4,
          // rich: {
          //   a: {
          //     color: '#6E7079',
          //     lineHeight: 22,
          //     align: 'center'
          //   },
          //   hr: {
          //     borderColor: '#8C8D8E',
          //     width: '100%',
          //     borderWidth: 1,
          //     height: 0
          //   },
          //   b: {
          //     color: '#4C5058',
          //     fontSize: 14,
          //     fontWeight: 'bold',
          //     lineHeight: 33
          //   },
          //   per: {
          //     color: '#fff',
          //     backgroundColor: '#4C5058',
          //     padding: [3, 4],
          //     borderRadius: 4
          //   }
          // }
        },
        data: [
          { value: 10, name: 'Project Value',itemStyle:{color: '#15807e'} }
        ]
      }
    ]
  };
  chartOption3: EChartsOption  = {
    
    tooltip: {
      trigger: 'item',
      formatter: '{a}: {c}%'
    },
    legend: {
      data: [{
        name: 'Intake well',
        textStyle:{
          color: '#000'
        }
    },
      {
        name: 'RWPL',
        textStyle:{
          color: '#000'
        }
    },
    {
        name: 'WTP',
        textStyle:{
          color: '#000'
        }
    },
    {
        name: 'CWPL',
        textStyle:{
          color: '#000'
        }
    },
    {
      name: 'ESR',
      textStyle:{
        color: '#000'
      }
    }
  ],
      
    },
    // toolbox: {
    //   show: true,
    //   orient: 'vertical',
    //   left: 'right',
    //   top: 'center',
    //   feature: {
    //     mark: { show: true },
    //     dataView: { show: true, readOnly: false },
    //     magicType: { show: true, type: ['line', 'bar', 'stack'] },
    //     restore: { show: true },
    //     saveAsImage: { show: true }
    //   }
    // },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['Physical progress'],
        axisLabel: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: '#000'
        },
        // max: 100
      }
    ],
    series: [
      {
        name: 'Intake well',
        type: 'bar',
        barGap: 0,
        label: this.labelOption,
        emphasis: {
          focus: 'series'
        },
        color: '#86BC25',
        data: [20]
      },
      {
        name: 'RWPL',
        type: 'bar',
        label: this.labelOption,
        emphasis: {
          focus: 'series'
        },
        color: '#43B02A',
        data: [15]
      },
      {
        name: 'WTP',
        type: 'bar',
        label: this.labelOption,
        emphasis: {
          focus: 'series'
        },
        color: '#0D8390',
        data: [10]
      },
      {
        name: 'CWPL',
        type: 'bar',
        label: this.labelOption,
        emphasis: {
          focus: 'series'
        },
        color: '#007CB0',
        data: [5]
      },
      {
        name: 'ESR',
        type: 'bar',
        label: this.labelOption,
        emphasis: {
          focus: 'series'
        },
        color: '#046A38',
        data: [2]
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
