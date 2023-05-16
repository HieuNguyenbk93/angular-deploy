import { Component, OnInit } from '@angular/core';

interface node{
  so: number;
  tienThu: number;
  tienGiu: number;
  tienChuyen: number;
  isMin?: boolean;
  minIndex?: number;
}

@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.css']
})
export class LevelOneComponent implements OnInit {

  tienThu: number[] = Array(100).fill(0);
  topMin: number[]= Array(100).fill(0);
  tableCal: node[] = [];

  tyLe: number = 80;
  totalHole: number = 0;

  constructor() { }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  ngOnInit(): void {
  }

  // holdMoney(source: number[]) :number[]{
  //   let result: number[] = [];
  //   let min = Math.min(...source);
  //   source.forEach(element => {
  //     result.push(element - min);
  //   });
  //   return result;
  // }

  onClickRandom(){
    this.tienThu = this.tienThu.map((x: number) => {
      let val = this.getRandomInt(2000);
      return val;
    });

    this.tableCal = [];
    this.tienThu.forEach((element, index) => {
      let ele: node = {
        so: index,
        tienThu: element,
        tienGiu: 0,
        tienChuyen: element,
        isMin: false
      }
      this.tableCal.push(ele);
    });
    this.tableCal.sort((a,b) => a.tienThu-b.tienThu);

    let _tienThu = [...this.tienThu];
    _tienThu.sort((a,b) => a-b);
    this.topMin = _tienThu.slice(0,100-this.tyLe);
    console.log(this.topMin);

    for (let i=0; i<this.topMin.length; i++) {
      let _tienGiu = i==0 ? this.topMin[i] : this.topMin[i] - this.topMin[i-1];
      for (let j=0; j<this.tableCal.length; j++){
        if (this.tableCal[j].tienChuyen > 0){
          this.tableCal[j].tienChuyen = this.tableCal[j].tienChuyen - _tienGiu;
          this.tableCal[j].tienGiu = this.tableCal[j].tienGiu + _tienGiu;
          if (this.tableCal[j].tienChuyen == 0) {
            this.tableCal[j].isMin = true;
            this.tableCal[j].minIndex = i+1;
          }
        }
      }
    }

    this.tableCal.forEach(element => {
      this.totalHole = this.totalHole + element.tienGiu;
    })
  }

}
