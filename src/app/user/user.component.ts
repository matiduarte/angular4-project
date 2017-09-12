import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {
  
  userName = '';
  existUserName = false;

  constructor() { 
  }

  ngOnInit() {
  }

  resetUserName() {
    this.userName = '';
    this.existUserName = false;
  }

  changeButtonState(){
  	this.existUserName = (this.userName.length != 0) ? true : false;
  }

}
