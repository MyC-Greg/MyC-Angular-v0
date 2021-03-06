import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CompanionsService } from './../companions.service';
import { Companion } from './../companion.model';


@Component({
  selector: 'app-companions-creation',
  templateUrl: './companions-creation.component.html',
  styleUrls: ['./companions-creation.component.css']
})
export class CompanionsCreationComponent implements OnInit {
  companions: Companion[];

  constructor(private CompanionsService: CompanionsService) { }

  ngOnInit() {
    this.companions = this.CompanionsService.getCompanions();
  }

 onCompanionSelected(filteredCompanionData: Companion) {
   if (!this.companions.some(function (el)  {
      return el.name === filteredCompanionData.name;
    })) {
    this.companions.unshift(filteredCompanionData);
    }
  }

 onCompanionDeleted(i: number) {
   this.companions.splice(i, 1);
 }
}
