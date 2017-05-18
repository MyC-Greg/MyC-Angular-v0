import { Hobby } from './../shared/hobby.model';
import { Companion } from './companion.model';

export class CompanionsService {
    private companions: Companion[] = [
        new Companion('Gregoire', 'Nedelec', 'Vienne', 1180, 
        [
            new Hobby ('sport'),
            new Hobby ('cuisine'),
            new Hobby ('meditation'), 
            ],
        'https://www.fan-lexikon.de/film-tv/javier-bardem/bilder/l/javier-bardem-6022.jpg'),
        new Companion('Charlotte', 'Mahr', 'Vienne', 1180,
        [
            new Hobby ('sport'),
            new Hobby ('cuisine'),
            new Hobby ('yoga')
            ],
        'https://static4.comicvine.com/uploads/original/10/100555/3262098-936full-mia-farrow.jpg')
    ];

    getCompanions(){
        return this.companions.slice();
    }
}
