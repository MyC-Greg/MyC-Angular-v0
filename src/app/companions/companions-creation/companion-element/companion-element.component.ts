import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Companion } from './../../companion.model';
import { CompanionsService } from './../../companions.service';


@Component({
  selector: 'app-companion-element',
  templateUrl: './companion-element.component.html',
  styleUrls: ['./companion-element.component.css']
})
export class CompanionElementComponent implements OnInit {
  @Input() companion: Companion;
  @Input() companions: Companion[];
  @Output() companionDeleted = new EventEmitter<number>();

  constructor(private CompanionsService: CompanionsService) { }

  ngOnInit() {
   this.companions = this.CompanionsService.getCompanions()
  }

  onDelete(companion) {
    this.companionDeleted.emit(this.companions.indexOf(companion));
  }

}
