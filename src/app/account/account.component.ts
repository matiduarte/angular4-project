import { Component, Input} from '@angular/core';
import {LogginService} from '../loggin.service';
import {AccountService} from   '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private logginService: LogginService,
              private accountService: AccountService){ }

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    this.accountService.statusUpdated.emit(status);
    //this.logginService.logStatusChange(status);
  }
}
