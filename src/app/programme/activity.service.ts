import { ContraIndication } from './models/contraIndication.model';
import { Benefit } from './models/benefit.model';
import { PhysicalActivity } from './models/physicalActivity.model';
import { StressManagementActivity } from './models/stressManagementActivity.model';
import { Nutrition } from './models/nutrition.model';
import { Ingredient } from './models/ingredient.model';

export class ActivityService {
    private physicalActivityList: PhysicalActivity[] = [
        new PhysicalActivity('Endurance',
                     'course lente',
                     'parce que la course delasse un corps crispé',
                     false,
                     '30 minutes de courses à 60% de son rythme cardiaque maximum. Si vous ne connaissez pas votre maximum, un bon repaire est l\'essouflement. Vous devez avoir une respiration rapide mais être capable de tenir une conversation pendant la course, donc il n\' y a pas d\'essouflement.',
                     '../assets/pictures/endurance/slow-running.jpg',
                     'Matinée',
                     [new Benefit ('fatigue chimiotherapique'),
                     new Benefit ('tonus musculaire')],
                     [new ContraIndication ('douleurs articulaires')]),

        new PhysicalActivity('Pilates',
                     'renforcement du plancher pelvien',
                     'Pour renforcer les fonctions intimes',
                     false,
                     'serrer le plancher pelvien, relever les jambes et faites l\'étoile!',
                     '../assets/pictures/pilates/sls.jpg',
                     'any',
                     [new Benefit ('fatigue chimiotherapique'),
                     new Benefit ('tonus musculaire')],
                     [new ContraIndication ('none')])
    ];


    private stressManagementList: StressManagementActivity[] = [
        new StressManagementActivity ('meditation',
                     'meditation du lâcher-prise',
                     'Pour donner de l\'espace à l\'esprit',
                     false,
                     '10 minutes sont suffisantes pour se sentir bien',
                     '../assets/pictures/meditation/brahmane.jpg',
                     'any',
                     [new Benefit ('fatigue chimiotherapique'),
                     new Benefit ('angoisses')],
                     [new ContraIndication ('none')])
    ];

   private nutritionList: Nutrition[] = [
        new Nutrition ('Salade de courgette à la marjolaine',
                      'Pour une digestion facile ',
                      'Couper les courgettes en rondelles,effeuillez la marjolaine, sel, poivre, huile d\'olive et jus de citron, c\'est prêt!',
                      [new Ingredient ('courgette', 1),
                      new Ingredient ('marjolaine (pincées)', 2)
                      ],
                      false,
                      '../assets/pictures/nourriture/courgettes.jpeg',
                      'Déjeuner',
                      [new Benefit ('digestion'),
                       new Benefit ('tonus')],
                      [new ContraIndication ('diarhée')]
                     ),

        new Nutrition ('Melon et safran',
                      'Pour des vitamines et une circulation sanguine efficace',
                      'Couper le melon en tranche, ajoutez un pistil de safran sur chaque tranche. Degustez',
                      [new Ingredient ('melon', 0.5),
                      new Ingredient ('safran (pistils)', 2)
                      ],
                      false,
                      '../assets/pictures/nourriture/melon.jpg',
                      'Déjeuner',
                      [new Benefit ('circulation sanguine'),
                       new Benefit ('tonus')],
                      [new ContraIndication ('constipation')]
                     ),

        new Nutrition ('Muesli aux fraises',
                      'Parce que les fraises, c\'est bon!',
                      'Couper les fraises, les mettre dans le muesli, rajouter le lait d\'amandes.',
                      [new Ingredient ('muesli', 1),
                      new Ingredient ('fraises', 10)
                      ],
                      false,
                      '../assets/pictures/petit-dejeuner/breakfast_muesliFraise.jpg',
                      'Petit-dèj',
                      [new Benefit ('tonus')],
                      [new ContraIndication ('allergies')]
                     )
    ];

    getPhysicalActivityList() {
        return this.physicalActivityList.slice();
    }

    getStressManagementList() {
        return this.stressManagementList.slice();
    }

    getNutritionList() {
        return this.nutritionList.slice();
    }

    getPhysicalActivityElement(index: number) {
        return this.physicalActivityList[index];
    }

    getStressManagementElement(index: number) {
        return this.stressManagementList[index];
    }

    getNutritionElement(index: number) {
        return this.nutritionList[index];
    }
}