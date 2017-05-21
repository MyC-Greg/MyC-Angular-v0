import { Hobby } from './../shared/hobby.model';
import { Companion } from './companion.model';

export class CompanionsService {
    private companions: Companion[] = [
        new Companion('Gregoire', 'Nedelec', 'Vienne', 1180,
        [
            new Hobby ('sport'),
            new Hobby ('cuisine'),
            new Hobby ('meditation')
            ],
        'https://pmcdeadline2.files.wordpress.com/2011/01/bardem.jpg'),
        new Companion('Charlotte', 'Mahr', 'Vienne', 1180,
        [
            new Hobby ('sport'),
            new Hobby ('cuisine'),
            new Hobby ('yoga')
            ],
        'https://static4.comicvine.com/uploads/original/10/100555/3262098-936full-mia-farrow.jpg'),
        new Companion('Jules', 'Cesar', 'Rome', 8011,
        [
            new Hobby ('sport'),
            new Hobby ('guerre'),
            new Hobby ('jeux')
            ],
        'https://i.ytimg.com/vi/-1PMZDm9fDk/maxresdefault.jpg'),
    ];

    getCompanions() {
        return this.companions.slice();
    }
}
