import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-symptomas',
  templateUrl: './symptomas.component.html',
  styleUrls: ['./symptomas.component.css']
})
export class SymptomasComponent implements OnInit {
  currentSymptomas = ['insomnies', 'Lésions de la bouche'];
  classicSymptomas = ['palpitations cardiaques', 'nausées', 'migraines', "perte d'odorat", 'bouffées de chaleur'];
  // currentSymptomasSelected: number;
  // numberToDelete;

  constructor() { }

  ngOnInit() {
  }

  onAddClassicSymptoma(newSymptomaIndex) {
    this.currentSymptomas.unshift(this.classicSymptomas[newSymptomaIndex]);
  }

  onDelete(index) {
  this.currentSymptomas.splice(index, 1);
  }

  onAddUnknownSymptoma(form: NgForm){
    console.log(form);
    console.log(form.value);
    this.currentSymptomas.unshift(form.value.unknownSecondaryEffect);
    form.reset();
    console.log(this.currentSymptomas);
  }

  

// onSubmit() {
  //   console.log('Submitted');
  // }

}
