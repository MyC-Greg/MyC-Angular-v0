import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizzard-question3',
  templateUrl: './wizzard-question3.component.html',
  styleUrls: ['./wizzard-question3.component.css']
})
export class WizzardQuestion3Component implements OnInit {
  question3 = 'Combien de fois par semaine pratiquez-vous une activité physique?';
  answerQuestion3;

  constructor() { }
  
  ngOnInit() {
  }

onGetAnswer3(event: Event) {
  console.log(event);
  this.answerQuestion3 = (<HTMLInputElement>event.target).innerText;
  console.log(this.answerQuestion3);
  }

}
