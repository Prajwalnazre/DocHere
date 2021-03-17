import { Component, OnInit, Inject } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormGroup, FormControl} from '@angular/forms';



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
  public pieChartType: ChartType = 'doughnut';
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
  modalService: any;

  //timeFrame = ['Today','Yesterday']
 
  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  avgAge = 25;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  handleDateClick(arg: { dateStr: string; }) {
    //alert('date click! ' + arg.dateStr)
    console.log(arg.dateStr);
  }

  isVisible = false;
  calenderopen(){
    this.isVisible = true;
    //var c = document.getElementById("fullCalender");
    //console.log(c?.style.backgroundColor)
  }

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
    
  });
  
    ngOnInit(): void {
  }

}
