import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { EChartsOption } from 'echarts';
type BarLabelOption = NonNullable<echarts.BarSeriesOption['label']>;

@Component({
  selector: 'app-division-dashboard',
  templateUrl: './division-dashboard.component.html',
  styleUrls: ['./division-dashboard.component.css']
})
export class DivisionDashboardComponent implements OnInit {
  divisionPerson: any = '';
  divisionList = ['Abhayapuri Mechanical Division','Abhayapuri Mechanical Division','Baithalangso Road Division','Barpeta, Baghbar & Chenga Territorial Road Division','Charaideo District Territorial Road Division','Dholai & Sonai Territorial Road Division','South Kamrup Territorial Road Division'];
  finYear = ['2018-19','2019-20','2020-21', '2021-22', '2022-23'];
  schemeList = ['SOPD-FDR','SOPD-G','SOPD-GSP', 'SOPD-ODS', 'SOPD-SCSP', 'SOPD-SS','SOPD-TSP','Sansad Adarsh Gram Yojana'];
  labelOption2:any = {
    show: true,
    position: 'right' as BarLabelOption['position'],
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
  
  barchartOption1: EChartsOption =  {
    title: {
      text: 'Material Consumption',
      textStyle: {
        color: '#01458e',
        fontSize: '1rem',
        fontWeight: 600,
        fontFamily: 'Open Sans, sans-serif'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      // formatter:  (params:any)=> {
      //   // console.log("params==",params)
      //   var tar = params[0].data.value;
      //   return tar + ' Cr' ;
      // }
    },
    xAxis: {
      type: 'category',
      data: ['Earth', 'Sand', 'Stone'],
      nameTextStyle: {
        color: '#000'
      },
      axisLabel: {
        color: '#000'
      }
    },
    yAxis: {
      type: 'value',
      name: 'Cubic/Meter',
      
      nameTextStyle: {
        color: '#000'
      },
      axisLabel: {
        color: '#000'
      }
    },
    series: [
      {
        data: [
          {
            value: 812.35,
            itemStyle: {
              color: '#15807e'
            }
          },
          {
            value: 774.09,
            itemStyle: {
              color: '#15807e'
            }
          },
          {
            value: 474.65,
            itemStyle: {
              color: '#15807e'
            }
          },
          
          100, 10  ],
          barWidth: '20%',
        type: 'bar'
      }
    ]
  };
  barchartOption2: EChartsOption =  {
    title: {
      text: 'Forest Royalty',
      textStyle: {
        color: '#01458e',
        fontSize: '1rem',
        fontWeight: 600,
        fontFamily: 'Open Sans, sans-serif'
      }
    },
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
      data: ['Earth', 'Sand', 'Stone'],
      nameTextStyle: {
        color: '#000'
      },
      axisLabel: {
        color: '#000'
      }
    },
    yAxis: {
      type: 'value',
      name: 'Cr',
      nameTextStyle: {
        color: '#000'
      },
      axisLabel: {
        color: '#000'
      }
    },
    series: [
      {
        data: [
          {
            value: 0.77,
            itemStyle: {
              color: '#7dcbab'
            }
          },
          {
            value: 0.451,
            itemStyle: {
              color: '#7dcbab'
            }
          },
          {
            value: 0.462,
            itemStyle: {
              color: '#7dcbab'
            }
          },
           1  ],
          barWidth: '20%',
        type: 'bar'
      }
    ]
  };
  chartOption2: EChartsOption  = {
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      },
      formatter:  (params:any)=> {
        console.log("params==",params)
        var tar = params.data.value;
        var name = params.data.name;
        let val;
        if(params.data.name == "SOPD-SS"){
          val = '5.20 Cr'
        } else if(params.data.name == "SOPD-G") {
          val = '12.00 Cr'
        } else if(params.data.name == "SOPD-TSP") {
          val = '2.07 Cr'
        }
        return name +':: No. Of Projects: '+tar + '| Value: '+ val;
      }
    },
    legend: {
      top: '5%',
      left: 'center',
      textStyle: {
        color: '#000'
      }
    },
    series: [
      {
        // name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        // avoidLabelOverlap: false,
        // label: {
        //   show: false,
        //   position: 'center'
        // },
        // emphasis: {
        //   label: {
        //     show: true,
        //     fontSize: '40',
        //     fontWeight: 'bold'
        //   }
        // },
        labelLine: {
          show: false
        },
        data: [
          { value: 7, name: 'SOPD-G', itemStyle:{color: '#7dcbab'} },
          { value: 5, name: 'SOPD-SS', itemStyle:{color: '#15807e'} },
          { value: 3, name: 'SOPD-TSP', itemStyle:{color: '#0cc478'} }
        ]
      }
    ]
  };

  chartOption3: EChartsOption  =  {
    
    grid: { containLabel: false },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: { 
      name: 'Amount',
      axisLabel : {
        formatter: '{value}Cr',
        color: '#000',
        align: 'center'
      }
    },
    yAxis: {
      type: 'category',
      data: ['Vehicle fitness centre', 'Driver training 11','Vehicle fitness 22', 'Driver 55','Vehicle 44', 'Driver 3'],
      name: 'Parameters',
      axisLabel: {
        show: false,
        color: '#000'
      }
      
    },
    series: [
      {
        name: 'Funds Allocated',
        type: 'bar',
        barGap: 0,
        data: [
          {
            value: 1,
            itemStyle: {
              color: '#a90000'
            }
          },
          {
            value: 1.2,
            itemStyle: {
              color: 'green'
            }
          },
          {
            value: 3,
            itemStyle: {
              color: 'yellow'
            }
          },
          {
            value: 2,
            itemStyle: {
              color: 'blue'
            }
          },
          {
            value: 2.5,
            itemStyle: {
              color: '#a90000'
            }
          },
          {
            value: 1.8,
            itemStyle: {
              color: '#a90000'
            }
          }],
        // label: this.labelOption2,
        // color: this.fundAllocatedColor
      },
      // {
      //   name: 'Funds Claimed',
      //   type: 'bar',
      //   data: [.8, 1.6],
      //   // label: this.labelOption2,
      //   // color: this.fundClaimedColor
      // },
      // {
      //   name: 'Funds Received',
      //   type: 'bar',
      //   data: [.6, 1.5],
      //   // label: this.labelOption2,
      //   // color: this.fundReceivedColor
      // }
      // {
      //   type: 'bar',
      //   encode: {
      //     // Map the "Amount" column to X axis.
      //     x: 'Amount',
      //     // Map the "product" column to Y axis
      //     y: 'product'
      //   }
      // }
    ]
  
  };

  chartOption4: EChartsOption  =  {
    // title: {
    //   text: 'Waterfall Chart'
    // },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      // formatter:  (params:any)=> {
      //   var tar = params[1];
      //   return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
      // }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      // splitLine: { show: false },
      data: ['Total', 'Rent', 'Utilities', 'Transportation', 'Meals', 'Other'],
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
        name: 'Placeholder',
        type: 'bar',
        stack: 'Total',
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent'
        },
        emphasis: {
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent'
          }
        },
        data: [
          0,1700, 1400, 1200, 300, 0]
      },
      {
        name: 'Life Cost',
        type: 'bar',
        stack: 'Total',
        itemStyle: {
          color: '#1b6671'
        },
        
        label: {
          show: true,
          position: 'inside'
        },
        data: [2900, 1200, 300, 200, 900, 300]
      }
    ]
  };

  gaugeOption2: EChartsOption  = {
    title: {
      text: 'Time Consume',
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
    let uName = localStorage.getItem('name')
    if(uName == 'Bimal Kalita') {
      this.divisionPerson = "South Kamrup Territorial Road Division";
    }
    
  }

}
