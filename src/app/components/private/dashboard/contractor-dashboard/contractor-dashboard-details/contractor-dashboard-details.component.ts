import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
type BarLabelOption = NonNullable<echarts.BarSeriesOption['label']>;

@Component({
  selector: 'app-contractor-dashboard-details',
  templateUrl: './contractor-dashboard-details.component.html',
  styleUrls: ['./contractor-dashboard-details.component.css']
})
export class ContractorDashboardDetailsComponent implements OnInit {

  labelOption = {
    show: true,
    // position: 'right' as BarLabelOption['position'],
    // distance: app.config.distance as BarLabelOption['distance'],
    // align: app.config.align as BarLabelOption['align'],
    // verticalAlign: app.config.verticalAlign as BarLabelOption['verticalAlign'],
    rotate: 0 as BarLabelOption['rotate'],
    // formatter: '{c}Cr',
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
    // title: {
    //   text: 'Project Progress Till Date',
    //   textStyle: {
    //     color: '#01458e',
    //     fontSize: '1rem',
    //     fontWeight: 600,
    //     fontFamily: 'Open Sans, sans-serif'
    //   }
    // },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter:  (params:any)=> {
        // console.log("params==",params)
        var tar = params[0].data.value;
        return tar + ' Cr' ;
      }
    },
    xAxis: {
      type: 'category',
      data: ['Batch 1', 'Batch 2', 'Batch 3'],
      axisLabel: {
        color: '#000'
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#000'
      }
    },
    series: [
      {
        data: [
          {
            value: 60.53,
            itemStyle: {
              color: '#00D1FF'
            }
          },
          {
            value: 52,
            itemStyle: {
              color: '#00D1FF'
            }
          },
          {
            value: 67.47,
            itemStyle: {
              color: '#00D1FF'
            }
          },
          
          100, 10  ],
          barWidth: '20%',
        type: 'bar'
      }
    ]
  };
  chartOption3: EChartsOption  = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: [{
        name: 'Total Milestone',
        textStyle:{
          color: '#000'
        }
    },
      {
        name: 'Till Date Milestone',
        textStyle:{
          color: '#000'
        }
    },
    {
        name: 'Achived',
        textStyle:{
          color: '#000'
        }
    },
    {
        name: 'Failed',
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
        data: ['2012'],
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
        }
      }
    ],
    series: [
      {
        name: 'Total Milestone',
        type: 'bar',
        barGap: 0,
        label: this.labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [16]
      },
      {
        name: 'Till Date Milestone',
        type: 'bar',
        label: this.labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [4]
      },
      {
        name: 'Achived',
        type: 'bar',
        label: this.labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [3]
      },
      {
        name: 'Failed',
        type: 'bar',
        label: this.labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [1]
      }
    ]
  };
  gaugeOption1: EChartsOption  = {
    title: {
      text: 'Physical Progress',
      bottom: '0',
      left: 'center',
      textStyle: {
        color: '#000',
        fontSize: '1rem',
        fontWeight: 600,
        fontFamily: 'Open Sans, sans-serif'
      }
    },
    series: [
      {
        type: 'gauge',
        progress: {
          show: true,
          width: 18,
          itemStyle: {
            color: '#0FD354',
          }
        },
        axisLine: {
          lineStyle: {
            width: 18
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          length: 15,
          lineStyle: {
            width: 2,
            color: '#0FD354'
          }
        },
        axisLabel: {
          distance: 25,
          color: '#0FD354',
          fontSize: 10
        },
        anchor: {
          show: true,
          showAbove: true,
          size: 25,
          itemStyle: {
            borderWidth: 0,
            color: '#0FD354'
          }
        },
        title: {
          show: true,
          
        },
        detail: {
          valueAnimation: true,
          fontSize: 20,
          color: '#0FD354',
          offsetCenter: [0, '70%']
        },
        data: [
          {
            value: 25,
            itemStyle: {
              color: "#0FD354"
            }
          }
        ]
      }
    ]
  };

  gaugeOption2: EChartsOption  = {
    title: {
      text: 'Time Utilized',
      left: 'center',
      bottom: '0',
      textStyle: {
        color: '#000',
        fontSize: '1rem',
        fontWeight: 600,
        fontFamily: 'Open Sans, sans-serif'
      }
    },
    series: [
      {
        type: 'gauge',
        progress: {
          show: true,
          width: 18
        },
        axisLine: {
          lineStyle: {
            width: 18
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          length: 15,
          lineStyle: {
            width: 2,
            color: '#e87210'
          }
        },
        axisLabel: {
          distance: 25,
          color: '#e87210',
          fontSize: 10
        },
        anchor: {
          show: true,
          showAbove: true,
          size: 25,
          itemStyle: {
            borderWidth: 0,
            color: "#e87210"
          }
        },
        title: {
          show: false
        },
        detail: {
          valueAnimation: true,
          fontSize: 20,
          color: "#e87210",
          offsetCenter: [0, '70%']
        },
        data: [
          {
            value: 52.28,
            itemStyle: {
              color: "#e87210"
            }
          }
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}


