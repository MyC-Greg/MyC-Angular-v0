import { Component, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

import { PhysicalActivity } from './../models/physicalActivity.model';
import { ActivityService } from './../activity.service';
import { GetSymptomasService } from './../../getSymptomas.service';


@Component({
  selector: 'app-programme-week',
  templateUrl: './programme-week.component.html',
  styleUrls: ['./programme-week.component.css']
})
export class ProgrammeWeekComponent implements OnInit {
  physicalActivities: PhysicalActivity[];
  physicalActivity: PhysicalActivity;
  essai;
 


  constructor(private ActivityService: ActivityService,
              private elRef: ElementRef,
              private renderer: Renderer2,
              private getSymptomasService: GetSymptomasService
              ) {}

  ngOnInit() {
    
    // this.physicalActivities = this.ActivityService.getPhysicalActivityList();
    // this.physicalActivity = this.ActivityService.getPhysicalActivityElement(0);
    // console.log(this.physicalActivity);
    // this.getSymptomasService.symptomasOfTheDay.subscribe(
    //   (currentSymptomas) => {
    //     this.currentSymptomas = currentSymptomas;
    //     console.log('log du programme week component');
    //   }
    // );

    // this.getSymptomasService.symptomasOfTheDay.subscribe(
    //   (currentSymptomas) => {
    //     this.currentSymptomas = currentSymptomas;
    //     console.log('log du programme-week compo');
    //   }
    // );
  //  this.currentSymptomas = this.getSymptomasService.symptomasOfTheDay;
  }
}

