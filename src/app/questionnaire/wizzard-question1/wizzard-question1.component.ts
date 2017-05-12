import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizzard-question1',
  templateUrl: './wizzard-question1.component.html',
  styleUrls: ['./wizzard-question1.component.css']
})
export class WizzardQuestion1Component implements OnInit {
  question1 = 'Vivez-vous avec un conjoint?';
  answerQuestion1;

  constructor() { }
  
  ngOnInit() {
  }

onGetAnswer1(info) {
  console.log(info);
  this.answerQuestion1 = info.target.innerText;
  console.log(this.answerQuestion1);
  }
}