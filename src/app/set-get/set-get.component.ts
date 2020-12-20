import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-get',
  templateUrl: './set-get.component.html',
  styleUrls: ['./set-get.component.css']
})
export class SetGetComponent implements OnInit {

  constructor() { 
    // let upload = document.getElementById("upload");
    // this.uploadData();
    // upload.addEventListener("click", (e:Event) => this.uploadData());
  }
 lunch : "cholle";

  uploadData() {
    const lunchVal = document.querySelector("#lunch");
    console.log("clicker"+lunchVal["value"]);
    this.lunch = document.querySelector("#lunch")["value"];
  }

  ngOnInit(): void {
  }

}
