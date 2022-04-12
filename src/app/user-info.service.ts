import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  users: any = [];

  constructor() {}

  findUser(mailId: string, password: string) {
    let returnFlag = false;
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      if (mailId == user.mailId && password == user.password) {
        returnFlag = true;
        break;
      }
    }
    if (returnFlag == true) {
      return true;
    } else {
      return false;
    }
  }

  addUser(user: any) {
    this.users.push(user);
  }

  displayUsers() {
    console.log(this.users);
  }
}
