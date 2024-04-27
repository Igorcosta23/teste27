import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  type: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  showPassword(){
    this.type =!this.type;
  }

}
