import { Component, OnInit, Input } from '@angular/core';

import { Companion } from './../../companion.model';


@Component({
  selector: 'app-companion-element',
  templateUrl: './companion-element.component.html',
  styleUrls: ['./companion-element.component.css']
})
export class CompanionElementComponent implements OnInit {
  @Input() companion: Companion;

  constructor() { }

  ngOnInit() {
  }

}
