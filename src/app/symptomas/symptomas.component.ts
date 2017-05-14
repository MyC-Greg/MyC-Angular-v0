import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-symptomas',
  templateUrl: './symptomas.component.html',
  styleUrls: ['./symptomas.component.css']
})
export class SymptomasComponent implements OnInit {
  currentSymptomas= [];
  classicSymptomas = ['palpitations cardiaques', 'nausées', 'migraines', "perte d'odorat", 'bouffées de chaleur'];
  otherSymptomas = ['douleurs musculaires', 'trouble des règles', 'fragilisation des ongles'];
  otherSymptoma;
  // currentSymptomasSelected: number;
  // numberToDelete;
  // array of status
  // click
  // check status
  // if >5 then 0
  // if not ++;

//  symptomaStatusColor = {
//     0: 'lightgreen',
//     1: 'lightpink',
//     2: 'rosybrown',
//     3: 'lightcoral',
//     4: 'red',
//     5: 'darkred'
//   };

  constructor() { }

  ngOnInit() {
    this.otherSymptoma = 'Autre effet secondaire';
  }

  onAddClassicSymptoma(newSymptomaIndex) {
    if (this.currentSymptomas.indexOf(this.classicSymptomas[newSymptomaIndex]) === -1 ) {
      this.currentSymptomas.unshift(this.classicSymptomas[newSymptomaIndex]);
      }
    }

  onDelete(index) {
  this.currentSymptomas.splice(index, 1);
  }

  onAddUnknownSymptoma(form: NgForm) {
    if (this.currentSymptomas.indexOf(form.value.unknownSymptoma) === -1 ) {
      this.currentSymptomas.unshift(form.value.unknownSymptoma);
    }
    form.reset();
  }

  onSelectOtherSymptoma(ind){
    this.otherSymptoma = this.otherSymptomas[ind];
  }

  onAddOtherSymptoma() {
    if (this.otherSymptoma !== 'Autre effet secondaire' && this.currentSymptomas.indexOf(this.otherSymptoma) === -1) {
      this.currentSymptomas.unshift(this.otherSymptoma);
    }
  }




// onSubmit() {
  //   console.log('Submitted');
  // }

}
