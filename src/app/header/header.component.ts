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

  changeStatus(_e: any)
  {
    console.log(_e.target.checked);
    //console.log(this.onFlag);
    console.log("Change Status");

    if(_e.target.checked == true)
    {
      this.status = "Online";
      this.onFlag = true;
      this.clinicFlag = false;
    }
    else
    {
      this.status = "Offline";
    }

  }

  handleClinic(_e1: any)
  {

    if(_e1.target.checked==true)
    {
      console.log(_e1.target.checked);
      console.log("Handle Clinic");
      console.log(this.onFlag);
      if(this.onFlag==true)
      {
        this.onFlag = false;
        console.log("Trying to change.......");
        console.log(this.onFlag);
        this.clinicFlag = true;
        this.status = "Offline";
      }
      
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}

export class NgbdDropdownBasic {
}