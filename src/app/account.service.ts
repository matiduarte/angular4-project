import {EventEmitter, Injectable} from '@angular/core';
import {LogginService} from './loggin.service';

@Injectable()

export class AccountService{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private logginService: LogginService) {}

  addAccount(name: string, status: string){
    this.accounts.push({name: name, status: status});
    this.logginService.logStatusChange(status);
  }

  updateAccount(id: number, status: string){
    this.accounts[id].status = status;
  }

}
