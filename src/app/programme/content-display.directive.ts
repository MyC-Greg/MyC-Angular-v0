import { ActivityService } from './activity.service';
import { PhysicalActivity } from './models/physicalActivity.model';

import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appContentDisplay]'
})
export class ContentDisplayDirective implements OnInit{
  physicalActivity: PhysicalActivity;



  constructor(private ActivityService: ActivityService,
              private elRef: ElementRef,
              private renderer: Renderer2) {}

  ngOnInit() {
    this.physicalActivity = this.ActivityService.getPhysicalActivityElement(0);
    let li = this.elRef.nativeElement;
    let course = this.renderer.createText(this.physicalActivity.name);
    this.renderer.appendChild(li, course);
    this.renderer.setStyle(li, 'background-color', 'red');
  }
}
