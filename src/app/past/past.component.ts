import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
