import { GetSymptomasService } from './getSymptomas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  currentSymptomas = [];

  constructor(private getSymptomasService: GetSymptomasService) { }


  ngOnInit() {
  this.getSymptomasService.symptomasOfTheDay.subscribe(
      (currentSymptomas:any[]) => {
        this.currentSymptomas = currentSymptomas;
        console.log('log de l\'app component');
        console.log( this.currentSymptomas);
        
      }
    );
  }

}
