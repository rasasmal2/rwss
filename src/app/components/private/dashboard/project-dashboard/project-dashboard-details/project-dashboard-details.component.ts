import { Component, OnInit,Input } from '@angular/core';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { EChartsOption } from 'echarts';
import {
  ColDef,
  GetDataPath,
  GridApi,
  GridReadyEvent,
} from 'ag-grid-community';

import config from '../../../../../../assets/config'


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
    formatter: '{c}',
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
      data: ['Target', 'Achieved']
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
      formatter: '{b}: {c}Cr'
      // formatter: '{a} <br/>{b}: {c}Cr ({d}%)'
    },
    legend: {
      data: [
        'Project Value',
        'Payment Released',
        'Invoice Raised'
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
        label: {
          formatter: '{b}: {c}Cr',
        },
        data: [
          { value: 6, name: 'Payment Released', itemStyle:{color: '#0cc478'} },
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
          formatter: '{b}: {c}Cr',
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
  chartOption3_N: EChartsOption  = {
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
        name: 'Target Milestone',
        textStyle:{
          color: '#000'
        }
    },
    {
        name: 'Achieved',
        textStyle:{
          color: '#000'
        }
    },
    {
      name: 'In-Progress',
      textStyle:{
        color: '#000'
      }
    },
    {
        name: 'Yet to Start',
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
        data: [9]
      },
      {
        name: 'Target Milestone',
        type: 'bar',
        label: this.labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [2]
      },
      {
        name: 'Achieved',
        type: 'bar',
        label: this.labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [1]
      },
      {
        name: 'In-Progress',
        type: 'bar',
        label: this.labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [5]
      },
      {
        name: 'Yet to Start',
        type: 'bar',
        label: this.labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [3]
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
            color: '#bb0808',
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
            color: '#bb0808'
          }
        },
        axisLabel: {
          distance: 25,
          color: '#bb0808',
          fontSize: 10
        },
        anchor: {
          show: true,
          showAbove: true,
          size: 25,
          itemStyle: {
            borderWidth: 0,
            color: '#bb0808'
          }
        },
        title: {
          show: true,
          
        },
        detail: {
          valueAnimation: true,
          fontSize: 20,
          color: '#bb0808',
          formatter: '17%',
          offsetCenter: [0, '70%']
        },
        data: [
          {
            value: 17,
            itemStyle: {
              color: "#bb0808"
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
            color: "#0FD354"
          }
        },
        title: {
          show: false
        },
        detail: {
          valueAnimation: true,
          fontSize: 20,
          color: "#0FD354",
          formatter: '46%',
          offsetCenter: [0, '70%']
        },
        data: [
          {
            value: 46,
            itemStyle: {
              color: "#0FD354"
            }
          }
        ]
      }
    ]
  };

  completeMilestone: EChartsOption  = {
    tooltip: {
      show:false,
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center',
      show: false
    },
    series: [
      {
        name: 'Completed Milestone',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          color: '#1ca515',
          fontSize: '20',
          position: 'center',
          formatter: () => {
            return '20%'; // Use sum variable here
          },
        },
        // emphasis: {
        //   label: {
        //     show: true,
        //     fontSize: 40,
        //     fontWeight: 'bold'
        //   }
        // },
        labelLine: {
          show: false
        },
        color: ["#1ca515","#ebf1f6"],
        data: [
         20,80
        ]
      }
    ]
  };
  inProgressMilestone: EChartsOption  = {
    tooltip: {
      trigger: 'item',
      show:false
    },
    legend: {
      top: '5%',
      left: 'center',
      show:false
    },
    series: [
      {
        name: 'Milestone In Progress',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          color: '#c7c20e',
          fontSize: '20',
          position: 'center',
          formatter: () => {
            return '26%'; // Use sum variable here
          },
        },
        // emphasis: {
        //   label: {
        //     show: true,
        //     fontSize: 40,
        //     fontWeight: 'bold'
        //   }
        // },
        labelLine: {
          show: false
        },
        color: ["#c7c20e","#ebf1f6"],
        data: [
         26,74
        ]
      }
    ]
  };
  pendingMilestone: EChartsOption  = {
    tooltip: {
      show:false,
      trigger: 'item'
    },
    legend: {
      show:false,
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Pending Milestone',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          color: '#e87210',
          fontSize: '20',
          position: 'center',
          formatter: () => {
            return '54%'; // Use sum variable here
          },
        },
        // emphasis: {
        //   label: {
        //     show: true,
        //     fontSize: 40,
        //     fontWeight: 'bold'
        //   }
        // },
        labelLine: {
          show: false
        },
        color: ["#e87210","#ebf1f6"],
        data: [
         54,46
        ]
      }
    ]
  };

  riskAndIssueOption: EChartsOption = {
    title: {
      text: 'Total Identified Risk: 4',
      bottom: '0',
      left: 'center',
      textStyle: {
        color: '#000',
        fontSize: '1rem',
        fontWeight: 600,
        fontFamily: 'Open Sans, sans-serif'
      }
    },
    
    legend: {
      top: '5%',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}%'
      // formatter: '{a} <br/>{b}: {c}Cr ({d}%)'
    },
    
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: false, readOnly: false },
        restore: { show: false },
        saveAsImage: { show: false }
      }
    },
    series: [
      {
        // name: 'Access From',
        type: 'pie',
        radius: ['40%', '60%'],
        avoidLabelOverlap: false,
        
        labelLine: {
          length: 10
        },
        label: {
          formatter: '{b}: {c}%',
        },
        // label: {
        //   color: '#c50404',
        //   fontSize: '20',
        //   position: 'center',
        //   formatter: () => {
        //     return '71%'; // Use sum variable here
        //   },
        // },
        color: ["#c50404","#d24141", "#d88989"],
        data: [
          { value: 25, name: 'High' },
          { value: 50, name: 'Medium' },
          { value: 25, name: 'Low' },
        ]
      }
    ]
  };



  selectedAuthority:any;
  showModal=false;
  totalMilestoneModal=false;
  completeMilestoneModal=false;
  inProgressMilestoneModal=false;
  pendingMilestoneModal=false;
  progressVsTimeModal=false

  modalTitle='';

  public riskColumnDefs: any = [
    {
      headerName: 'Top 5 Risk',
      children: [
        {
          headerName: "S.No",
          valueGetter: "node.rowIndex + 1"
        },
        { field: 'descriptionOfRisk',
          
        },
      ],
    },
    {
      headerName: 'High',
      children: [
        
        { field: 'riskLevel',
          
        },
      ],
    }
  ];
  public riskColDef: ColDef = {
    flex: 1,
    // minWidth: 150,
    filter: true,
  };
  public riskRowData!: any[];

  onRiskGridReady(params:any) {
    this.riskRowData = config.riskDataList;
  }

  constructor() { }

  ngOnInit(): void {
    let projectData:any = localStorage.getItem('projectData');
    if(projectData) {
      projectData = JSON.parse(projectData)
    }
    if(projectData?.authorityDetails?.rowAuthorityName?.length>0) {
      let tt:any = projectData?.authorityDetails?.rowAuthorityName;
      this.selectedAuthority = tt;
    }
  }

  hide() {
    this.showModal=false;
  }

  openModal(val:any) {
    if(val=='totalMilestone') {
      this.modalTitle = 'Total Milestone';
      this.showModal=true;
      this.totalMilestoneModal=true;
      this.progressVsTimeModal=false;
      this.completeMilestoneModal=false;
      this.inProgressMilestoneModal=false;
      this.pendingMilestoneModal=false;
    } else if(val=='completeMilestone') {
      this.modalTitle = 'Completed Milestone';
      this.showModal=true;
      this.completeMilestoneModal=true;
      this.progressVsTimeModal=false;
      this.totalMilestoneModal=false;
      this.inProgressMilestoneModal=false;
      this.pendingMilestoneModal=false;
    } else if(val=='inProgressMilestone') {
      this.modalTitle = 'Im Progress Milestone';
      this.showModal=true;
      this.inProgressMilestoneModal=true;
      this.progressVsTimeModal=false;
      this.completeMilestoneModal=false;
      this.totalMilestoneModal=false;
      this.pendingMilestoneModal=false;
    } else if(val=='pendingMilestone') {
      this.modalTitle = 'Pending Milestone';
      this.showModal=true;
      this.pendingMilestoneModal=true;
      this.progressVsTimeModal=false;

      this.inProgressMilestoneModal=false;
      this.completeMilestoneModal=false;
      this.totalMilestoneModal=false;
    } else if(val=='progressVsTimeModal') {
      this.modalTitle = 'Progress as on Date';
      this.showModal=true;
      this.progressVsTimeModal=true
      this.pendingMilestoneModal=false;
      this.inProgressMilestoneModal=false;
      this.completeMilestoneModal=false;
      this.totalMilestoneModal=false;
    }
  }

}
