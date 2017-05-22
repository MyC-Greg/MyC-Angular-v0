import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';

import { Companion } from './../../companion.model';
import { CompanionsService } from './../../companions.service';

@Component({
  selector: 'app-companion-selection',
  host: {
        '(document:click)': 'handleClick($event)',
    },
  templateUrl: './companion-selection.component.html',
  styleUrls: ['./companion-selection.component.css']
})
export class CompanionSelectionComponent implements OnInit {
  @Input() companions: Companion[];
  @Input() companion: Companion;
  filteredCompanions = [];
  searchedCompanion;
  @Output() companionSelected = new EventEmitter<Companion[]>();

  constructor(private CompanionsService: CompanionsService,
              private elementRef: ElementRef) { }

  ngOnInit() {
    this.companions = this.CompanionsService.getCompanions();
  }

filter () {
    console.log(this.companions);
    if (this.searchedCompanion !== '') {
          this.filteredCompanions = this.companions.filter(function(el){
             return el.firstName.toLowerCase().indexOf(this.searchedCompanion.toLowerCase()) > -1 
              ||
              el.name.toLowerCase().indexOf(this.searchedCompanion.toLowerCase()) > -1;
          }.bind(this));
      } else {
          this.filteredCompanions = [];
      }
  }

  select() {
    this.companionSelected.emit(this.filteredCompanions[0])
    this.filteredCompanions = [];
  }

  handleClick(event) {
   let clickedComponent = event.target;
   let inside = false;
   do {
       if (clickedComponent === this.elementRef.nativeElement) {
           inside = true;
       }
      clickedComponent = clickedComponent.parentNode;
   } while (clickedComponent);
    if (!inside) {
       this.filteredCompanions = [];
       this.searchedCompanion = null;
    }
}

}
