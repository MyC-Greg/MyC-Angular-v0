import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Symptoma } from './symptoma.model';

@Component({
  selector: 'app-symptomas',
  templateUrl: './symptomas.component.html',
  styleUrls: ['./symptomas.component.css'],
})
export class SymptomasComponent implements OnInit {
  currentSymptomas = [];
  classicSymptomas = ['palpitations cardiaques', 'nausées', 'migraines', "perte d'odorat", 'bouffées de chaleur'];
  otherSymptomas = ['douleurs musculaires', 'trouble des règles', 'fragilisation des ongles'];
  otherSymptoma;
  currentSymptoma; 
  status;

 symptomaStatusColor = {
    0: 'rgba(219, 250, 241, 0.55)',
    1: 'rgba(247, 236, 243, 0.55)',
    2: 'rgba(251, 141, 152, 0.52)',
    3: 'rgba(133, 4, 17, 0.44)'
  };

  constructor() {
   }

  ngOnInit() {
    this.otherSymptoma = 'Autre effet secondaire';
  }

  onUpdateStatus(symptomaIndex){
    this.currentSymptomas[symptomaIndex].status ++;
    if (this.currentSymptomas[symptomaIndex].status >3) {
      this.currentSymptomas[symptomaIndex].status = 0;
    }
    console.log(this.currentSymptomas[symptomaIndex]);
  }

  GetColor (symptomaIndex) {
    return this.symptomaStatusColor[this.currentSymptomas[symptomaIndex].status];
  }

  onAddClassicSymptoma(newSymptomaIndex) {
    const classicSymptomas = this.classicSymptomas[newSymptomaIndex];

    if (this.currentSymptomas.length === 0 || !this.currentSymptomas.some(function (el)  {
      return el.name === classicSymptomas;
    })) {
      this.currentSymptoma = new Symptoma (this.classicSymptomas[newSymptomaIndex], 0, 0);
      this.currentSymptomas.unshift(this.currentSymptoma);
    };
}

  onDelete(index) {
  this.currentSymptomas.splice(index, 1);
  }

  onAddUnknownSymptoma(form: NgForm) {
    const unknownSymptoma = form.value.unknownSymptoma;
    
    if (this.currentSymptomas.length === 0 || !this.currentSymptomas.some(function (el)  {
      return el.name === unknownSymptoma;
    })) {
      this.currentSymptoma = new Symptoma (form.value.unknownSymptoma, 0, 0);
      this.currentSymptomas.unshift(this.currentSymptoma);
    };
    form.reset();
  }

  onSelectOtherSymptoma(ind){
    this.otherSymptoma = this.otherSymptomas[ind];
  }

  onAddOtherSymptoma() {
     const otherSymptoma = this.otherSymptoma;

    if (this.currentSymptomas.length === 0 || !this.currentSymptomas.some(function (el)  {
      return el.name === otherSymptoma;
    })) {
     this.currentSymptoma = new Symptoma (this.otherSymptoma, 0, 0);
      this.currentSymptomas.unshift(this.currentSymptoma);
    }
  }


// onSubmit() {
  //   console.log('Submitted');
  // }

}
