import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.css']
})
export class LevelOneComponent implements OnInit {

  tienThu: number[] = Array(100).fill(0);
  tienThuMin: number = 0;

  constructor() { }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  ngOnInit(): void {
    this.tienThu = this.tienThu.map((x: number) => {
      let val = this.getRandomInt(2000);
      return val;
    });
    this.tienThuMin = Math.min(...this.tienThu);
  }

}
