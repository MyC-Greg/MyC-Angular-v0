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

onGetAnswer1(event: Event) {
  console.log(event);
  this.answerQuestion1 = (<HTMLInputElement>event.target).innerText;
  console.log(this.answerQuestion1);
  }
}