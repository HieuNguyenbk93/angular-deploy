import { Component, OnInit } from '@angular/core';

interface boSo {
  tienThu: number;
  tienDen: number;
  tienLaiNeuVe: number;
  diemChuyen?: number;
  isLai: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  monIn: number[] = Array(100).fill(0);
  totalIn: number = 0;
  percentTarget: number = 10;

  // arrRisk: boSo[] = [];
  result: boSo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  getLevelBenefit(input: number, total: number, target: number ): number {
    let _tienLai = total - input * 80;
    let _soVoiTarget = 0;
    if (_tienLai < 0){
      _soVoiTarget = -1;
    }
    else {
      if(_tienLai > total * target / 100){
        _soVoiTarget = 1;
      }
      else _soVoiTarget = 0;
    }
    return _soVoiTarget;
  }

  onRandom() {
    this.totalIn = 0;
    // this.arrRisk = [];
    this.result = [];
    this.monIn = this.monIn.map((x: number) => {
      let val = this.getRandomInt(2000);
      this.totalIn = this.totalIn + val;
      return val;
    });
    this.monIn.forEach((x, index) => {
      let _tienLai = this.totalIn - x*80;
      let _soVoiTarget = this.getLevelBenefit(x, this.totalIn, this.percentTarget);
      let _diemChuyen = 0;
      const _tienDenDeLai = this.totalIn - this.totalIn * this.percentTarget / 100;
      const _diemOmDeLai = _tienDenDeLai/80;
      if (_soVoiTarget < 1) {
        _diemChuyen = x - _diemOmDeLai;
      }
      let val: boSo = {
        tienThu: x,
        tienDen: x * 80,
        tienLaiNeuVe: _tienLai,
        isLai: _soVoiTarget,
        diemChuyen : _diemChuyen,
      }
      this.result.push(val);
    });
    // console.log(this.arrRisk);
  }

  onCalculate() {
    console.log(this.percentTarget)
  }

}
