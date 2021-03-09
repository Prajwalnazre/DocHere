import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  docName = "Dr. Stephan Cillian Murphy Strange";
  status = "Offline";
  flag = 0;
  clinic = document.getElementById("clinicButton"); ;
  onButton = document.getElementById("onButton");
  clinicFlag = false;
  onFlag = false;
  hClinic = "";

  changeStatus(_e1: any )
  {
    if(_e1.target.checked == true)
    {
      console.log("Online Now");
      this.status = "Online";
      if(this.clinicFlag==true)
      {
        console.log("Clinic Flag Going Off");
        this.clinicFlag = false;
      }
      /*else
      {
        this.clinicFlag = true;
      }*/
    }
    else {
      this.status = "Offline";
      this.onFlag = false;
      console.log("I am offline now")
    }

  }  

  handleClinic(_e: any) 
  {
    console.log("I am on");
    console.log(this.clinicFlag);
    if(this.onFlag == true)
    {
      console.log("Seems like Online")
      if(_e.target.checked==true)
      {
        console.log("Become Offline")
        //this.hClinic="clinic"; 
        this.onFlag=false;
        this.status = "Offline"
        //console.log(this.onFlag);
      }
      else
      {
        console.log("Become Online Man")
        //this.hClinic=" ";
        this.status = "Online";
        this.onFlag=true;
        console.log(this.onFlag);
      }
    }
    else
    {
      this.onFlag = false;
      //this.clinicFlag = false;
    }
    
  }






  constructor() { }

  ngOnInit(): void {
  }

}

export class NgbdDropdownBasic {
}