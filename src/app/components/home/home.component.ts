import { Component, OnInit } from '@angular/core';

interface boSo {
  number: number;
  money: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  monIn: number[] = Array(100).fill(0);
  totalIn: number = 0;

  arrRisk: boSo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  onRandom() {
    this.totalIn = 0;
    this.monIn = this.monIn.map((x: number) => {
      let val = this.getRandomInt(1000);
      this.totalIn = this.totalIn + val;
      return val;
    });
    this.monIn.forEach((x, index) => {
      if(x*80 > this.totalIn){
        let val: boSo = { number: index, money: x}
        this.arrRisk.push(val);
      }
    });
    console.log(this.arrRisk);
  }

}
