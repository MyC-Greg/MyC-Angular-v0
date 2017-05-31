import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderIntroComponent } from './questionnaire/header-intro/header-intro.component';
import { IntroFooterComponent } from './questionnaire/intro-footer/intro-footer.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { WizzardQuestion0Component } from './questionnaire/wizzard-question0/wizzard-question0.component';
import { WizzardQuestion1Component } from './questionnaire/wizzard-question1/wizzard-question1.component';
import { WizzardQuestion2Component } from './questionnaire/wizzard-question2/wizzard-question2.component';
import { WizzardQuestion3Component } from './questionnaire/wizzard-question3/wizzard-question3.component';
import { SymptomasComponent } from './symptomas/symptomas.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CompanionsCreationComponent } from './companions/companions-creation/companions-creation.component';
import { CompanionsComponent } from './companions/companions.component';
import { CompanionsService } from './companions/companions.service';
import { FilterPipe } from './filter.pipe';
import { CompanionSelectionComponent } from './companions/companions-creation/companion-selection/companion-selection.component';
import { CompanionElementComponent } from './companions/companions-creation/companion-element/companion-element.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { ProgrammeComponent } from './programme/programme.component';
import { ProgrammeWeekComponent } from './programme/programme-week/programme-week.component';
import { ProgrammeDayComponent } from './programme/programme-day/programme-day.component';
import { ActivityService } from './programme/activity.service';
import { ContentDisplayDirective } from './programme/content-display.directive';
import { GetSymptomasService } from './getSymptomas.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bienvenue', component: HomeComponent },
  { path: 'faisons-connaissance', component: QuestionnaireComponent, children: [
    { path: '', component: WizzardQuestion0Component },
    { path: '0', component: WizzardQuestion0Component },
    { path: '1', component: WizzardQuestion1Component  },
    { path: '2', component: WizzardQuestion2Component  },
    { path: '3', component: WizzardQuestion3Component  }
  ] },
    { path: 'symptomes', component: SymptomasComponent },
    { path: 'mes-proches', component: CompanionsComponent, children: [
      { path: '', component: CompanionsCreationComponent },
      { path: 'choisissez', component: CompanionsCreationComponent }
    ] },
    { path: 'programme', component: ProgrammeComponent, children: [
      { path: '', component: ProgrammeWeekComponent },
      { path: 'semaine', component: ProgrammeWeekComponent },
      { path: 'jour', component: ProgrammeDayComponent }
    ] }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderIntroComponent,
    QuestionnaireComponent,
    WizzardQuestion0Component,
    WizzardQuestion1Component,
    IntroFooterComponent,
    HomeComponent,
    WizzardQuestion2Component,
    WizzardQuestion3Component,
    SymptomasComponent,
    DropdownDirective,
    CompanionsCreationComponent,
    CompanionsComponent,
    FilterPipe,
    CompanionSelectionComponent,
    CompanionElementComponent,
    HeaderComponent,
    FooterComponent,
    ProgrammeComponent,
    ProgrammeWeekComponent,
    ProgrammeDayComponent,
    ContentDisplayDirective, 

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CompanionsService, ActivityService, GetSymptomasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
