import { Component, OnInit } from '@angular/core';

import data from '../../../assets/charts/data.json';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  constructor() {}
  dataval = data.jsonarray.map(function (e) {
    return e.age;
  });

  lineChartData: Array<any> = [
    {
      label: ['My First dataset'],
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: this.dataval,
    },
  ];
  lineChartLabels: Array<any> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  lineChartOptions: any = {
    responsive: true,
  };
  lineChartLegend = true;
  lineChartType = 'line';
  barChartType = 'bar';
  inlinePlugin: any;
  textPlugin: any;

  ngOnInit(): void {
    // inline plugin
    this.textPlugin = [
      {
        id: 'textPlugin',
        beforeDraw(chart: any): any {
          const width = chart.chart.width;
          const height = chart.chart.height;
          const ctx = chart.chart.ctx;
          ctx.restore();
          const fontSize = (height / 114).toFixed(2);
          ctx.font = `${fontSize}em sans-serif`;
          ctx.textBaseline = 'middle';
          const text = '';
          const textX = Math.round((width - ctx.measureText(text).width) / 2);
          const textY = height / 2;
          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      },
    ];

    this.inlinePlugin = this.textPlugin;
  }
}
