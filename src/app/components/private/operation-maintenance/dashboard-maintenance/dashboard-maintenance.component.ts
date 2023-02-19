import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { CommonServiceService } from 'src/app/_services/common-service.service';
type BarLabelOption = NonNullable<echarts.BarSeriesOption['label']>;

import config from '../../../../../assets/config';


@Component({
  selector: 'app-dashboard-maintenance',
  templateUrl: './dashboard-maintenance.component.html',
  styleUrls: ['./dashboard-maintenance.component.css']
})
export class DashboardMaintenanceComponent implements OnInit {
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


  // $.getJSON('https://echarts.apache.org/examples/data/asset/data/les-miserables.json', function (graph) {
  //   myChart.hideLoading();
  //   graph.nodes.forEach(function (node) {
  //     node.label = {
  //       show: node.symbolSize > 30
  //     };
  //   });

  chartOption: EChartsOption;

  graphData:any = config.graphData;

  constructor(public cmnService: CommonServiceService){}

  ngOnInit() {
    let graph:any = this.graphData
      if(this.graphData) {
        this.chartOption = {
          title: {
            text: 'Operation & Maintenance',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
          },
          tooltip: {},
          legend: [
            {
              // selectedMode: 'single',
              data: graph.categories.map((a:any)=> {
                return a.name;
              })
            }
          ],
          animationDuration: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              name: 'Operation & Maintenance',
              type: 'graph',
              layout: 'none',
              data: graph.nodes,
              links: graph.links,
              categories: graph.categories,
              roam: true,
              label: {
                position: 'right',
                formatter: '{b}'
              },
              lineStyle: {
                color: 'source',
                curveness: 0.3
              },
              emphasis: {
                focus: 'adjacency',
                lineStyle: {
                  width: 10
                }
              }
            }
          ]
        };
      }
  }
}
