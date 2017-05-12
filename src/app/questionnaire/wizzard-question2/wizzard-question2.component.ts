import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizzard-question2',
  templateUrl: './wizzard-question2.component.html',
  styleUrls: ['./wizzard-question2.component.css']
})
export class WizzardQuestion2Component implements OnInit {
  question2 = 'En moyenne pour un repas courant, combien de temps passez-vous à cuisiner?';
  answerQuestion2;

  constructor() { }
  
  ngOnInit() {
  }

onGetAnswer2(event: Event) {
  console.log(event);
  this.answerQuestion2 = (<HTMLInputElement>event.target).innerText;
  console.log(this.answerQuestion2);
  }
}
