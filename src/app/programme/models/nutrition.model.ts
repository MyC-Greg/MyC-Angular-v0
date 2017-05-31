import { ContraIndication } from './contraIndication.model';
import { Benefit } from './benefit.model';
import { Ingredient } from './ingredient.model';


export class Nutrition {
  public name: string;
  public punchline: string;
  public description: string;
  public ingredients: Ingredient [];
  public status: boolean;
  public nutritionPic: string;
  public timeOfTheDay: string;
  public benefits: Benefit [];
  public contraIndication: ContraIndication [];
 

  constructor(name: string, 
              punchline: string, 
              description: string, 
              ingredients: Ingredient[], 
              status: boolean, 
              nutritionPic: string,
              timeOfTheDay: string,
              benefits: Benefit [],
              contraIndication: ContraIndication []) {
    this.name = name;
    this.punchline = punchline;
    this.description = description;
    this.ingredients = ingredients;
    this.status = status;
    this.nutritionPic = nutritionPic;
    this.timeOfTheDay = timeOfTheDay;
    this.benefits = benefits;
    this.contraIndication = contraIndication;
  }
}
