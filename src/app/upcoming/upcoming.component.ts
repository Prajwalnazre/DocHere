import { Component, OnInit } from '@angular/core';
import { UPatientService } from 'src/app/u-patient.service'; 

const USER_INFO = [
  {"token":1,"name": "John Smith", "age": 36, "Gender": "M"},
  {"token":2,"name": "Muhi Masri", "age": 26, "Gender": "F"},
  {"token":3,"name": "Willian M Bassilker", "age": 16, "Gender": "M"},
  {"token":4,"name": "Lora Bay", "age": 35, "Gender": "F"}, 
  {"token":5,"name": "Sakkath", "age": 21, "Gender": "M", "xyz":"yhh"}
  
];

const USER_SCHEMA = {
  "token": "number",
  "name" : "text",
  "age" : "number",
  "Gender" : "text", 
}

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  
  displayedColumns: string[] = ['token', 'name', 'age', 'Gender'];
  dataSource = USER_INFO;
  dataSchema = USER_SCHEMA;
  flag = false;


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

  constructor(private patient:UPatientService) {
    this.patient.getData().subscribe(data=>{
      console.warn(data)
    })
   }

  ngOnInit(): void {
  }

}
