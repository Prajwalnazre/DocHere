import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
 

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  //Pie Chart Start
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Women', 'Men'];
  public pieChartData: SingleDataSet = [65, 80];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  // Pie Chart End

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40,12,13,26,22,35,48,65,55,53,17,64,73,12,26,33,35,41,15], label: 'Age', backgroundColor: 'rgba(0, 194, 211, 1)', borderColor: 'fillPattern',
    pointBackgroundColor: 'rgba(0, 100, 240, 1)'},
  ];
  public lineChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13',
'14','15','16','17','18','19','20','21','22','23','24','25'];
  public lineChartOptions: ChartOptions = {
    responsive: true,

  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(110,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType : ChartType = 'line';
  public lineChartPlugins = [];
 
  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  avgAge = 25;

  ngOnInit(): void {
  }

}
