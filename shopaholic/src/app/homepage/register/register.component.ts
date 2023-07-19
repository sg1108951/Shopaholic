import { Component } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })

  export class RegisterComponent{
    firstname : string = 'Shubham';
    count : number = 3;

    onSubmit(data){
      console.log(data);
      
    }

  }