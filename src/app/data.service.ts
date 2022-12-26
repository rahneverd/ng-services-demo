import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[] = ["Waqas", "AngularJs", "waqas@hiveworx.com"]
  info2: string[] = ["Faraz", "NestJs", "faraz@hiveworx.com"]
  info3: string[] = ["Sikandar", "MEAN Stack", "sikandar@hiveworx.com"]

  getInfo1():string[] {
    return this.info1
  }
  getInfo2():string[] {
    return this.info2
  }
  getInfo3():string[] {
    return this.info3
  }

  constructor() { }
}
