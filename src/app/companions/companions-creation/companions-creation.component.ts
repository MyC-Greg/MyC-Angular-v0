import { Companion } from './../companion.model';
import { Component, OnInit } from '@angular/core';

import { CompanionsService } from './../companions.service';

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

}
