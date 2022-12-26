import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],
  providers: [DataService]
})
export class EInfoComponent implements OnInit {

  infoRecvd1 : string[] = []
  infoRecvd2 : string[] = []
  infoRecvd3 : string[] = []

  constructor(private dService: DataService) { }

  ngOnInit(): void {
  }

  getInfoFromService1() {
    this.infoRecvd1 = this.dService.getInfo1()
    this.infoRecvd2 = this.dService.getInfo2()
    this.infoRecvd3 = this.dService.getInfo3()
  }
  getInfoFromService2() {}
  getInfoFromService3() {}
}
