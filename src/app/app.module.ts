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
    { path: 'symptomes', component: SymptomasComponent }
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
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
