import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  type: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  showPassword(){
    this.type =!this.type;
  }

}
