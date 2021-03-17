import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
​
declare  var cal:  any;
//declare var name: any;

const USER_INFO = [
  {"token":1,"name": "John Smith", "age": 36, "Gender": "M", "visit":"March 4, 2021, 1:21 p.m", "Fee" : 7000, "Report":"Report" },
  {"token":2,"name": "Muhi Masri", "age": 26, "Gender": "F", "visit":"March 4, 2021, 1:21 p.m", "Fee" : 900, "Report":"Report" },
  {"token":3,"name": "Willian M Bassilker", "age": 16, "Gender": "M", "visit":"March 4, 2021, 1:21 p.m", "Fee" : 7000, "Report":"Report" },
  {"token":4,"name": "Lora Bay", "age": 35, "Gender": "F", "visit":"March 4, 2021, 1:21 p.m", "Fee" : 7000, "Report":"Report" }, 
  {"token":5,"name": "Sakkath", "age": 21, "Gender": "M", "xyz":"yhh", "visit":"March 4, 2021, 1:21 p.m", "Fee" : 7000, "Report":"Report" }
  
];

const USER_SCHEMA = {
  "token": "number",
  "name" : "text",
  "age" : "number",
  "Gender" : "text", 
  "visit" : "text",
  "Fee" : "number",
  "Report" : "text",
}

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.scss']
})
export class PastComponent implements OnInit {

  displayedColumns: string[] = ['visit','token', 'name', 'age','Gender','Fee', 'Report'];
  dataSource = USER_INFO;
  dataSchema = USER_SCHEMA;
  flag = false;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
/*
  disableScrolling() { 
    setTimeout(function() { 
      //var x = document.getElementById('tableHolder');
      document.getElementById('tableH').style.overflow = 'hidden';
      //x.overflow = 'hidden'; 
    }, 1000); 
    console.log("Disabling")
}

enableScrolling() { 
  //var x = document.getElementById('tableHolder')
  //x.overflow = '';
  console.log("Enabling")
  document.getElementById('tableH').style.overflow = ''; 
} */

  disableScrolling(){
    console.log('Disable Works');
    setTimeout(
      () =>{
        this.flag = false;
      },5000
    )
    
  }

  enableScrolling(){
    console.log('Enable Works');
    this.flag = true  
  }


  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {

  }
    //new name();
    
    //new cal();
    // $(function() {
    //   $('input[name="daterange"]').daterangepicker({
    //     opens: 'left'
    //   }, function(start, end, label) {
    //     console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    //   });
    // });
  

}
