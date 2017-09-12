import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
		.click {
			color: white;
		}`]
})
export class AppComponent {

	btnClick = false;
	clicks = [];
	count_click = 1;

	onClickButton(){
		this.btnClick = !this.btnClick;
		this.clicks.push(this.count_click);
		this.count_click = this.count_click + 1;
	}

}
