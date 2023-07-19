import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-titlebar',
    templateUrl: './title-bar.component.html',
    styleUrls: ['./title-bar.component.css']
  })

export class TitlebarComponent implements OnInit{

  constructor(){

  }

  ngOnInit(){

  }

  search(a){
    console.log(a);
  }

  sign_up(){

  }
  log_out(){
    alert("You have been logout");
  }

}