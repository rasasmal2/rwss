import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
type BarLabelOption = NonNullable<echarts.BarSeriesOption['label']>;
@Component({
  selector: 'app-pwrd-dashboard',
  templateUrl: './pwrd-dashboard.component.html',
  styleUrls: ['./pwrd-dashboard.component.css']
})
export class PwrdDashboardComponent implements OnInit {
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
    // title: {
    //   text: 'Material Consumption',
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
        return '<span title="' + tar + '">'+'Project completion: '+tar +'%'+'</span><br><span title="' + params[0].axisValue + '">'+'No of projects: '+params[0].axisValue+'</span>';
      }
    },
    xAxis: {
      type: 'category',
      data: [2, 3, 5],
      name: 'No. of projects',
      nameTextStyle: {
        color: '#000'
      },
      axisLabel: {
        color: '#000'
      }
    },
    yAxis: {
      type: 'value',
      name: 'Completion %',
      
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
            value: 30,
            itemStyle: {
              color: '#15807e'
            }
          },
          {
            value: 60,
            itemStyle: {
              color: '#009A44'
            }
          },
          {
            value: 100,
            itemStyle: {
              color: '#26890D'
            }
          },
           ],
          barWidth: '20%',
        type: 'bar'
      }
    ]
  };
  chartOption2: EChartsOption  = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}Cr'
    },
    legend: {
      data: [
        'Total Project Value',
        'Total Payment Released',
        'Total Payment Under Process'
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
          { value: 100, name: 'Total Payment Released', itemStyle:{color: '#0cc478'} },
          { value: 50, name: 'Total Payment Under Process',itemStyle:{color: '#7dcbab'} },
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
          { value: 500, name: 'Total Project Value',itemStyle:{color: '#15807e'} }
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