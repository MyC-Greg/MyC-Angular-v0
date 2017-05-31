import { ContraIndication } from './contraIndication.model';
import { Benefit } from './benefit.model';

export class PhysicalActivity {
    public subCategory: string;
    public name: string;
    public punchline: string;
    public status: boolean;
    public description: string;
    public activityPic: string;
    public timeOfTheDay: string;
    public benefits: Benefit [];
    public contraIndication: ContraIndication [];

    constructor(subCategory: string,
                name: string, punchline: string,
                status: boolean,
                description: string,
                activityPic: string,
                timeOfTheDay: string,
                benefits: Benefit [],
                contraIndication: ContraIndication []) {
        this.subCategory = subCategory;
        this.name = name;
        this.punchline = punchline;
        this.status = status;
        this.description = description;
        this.activityPic = activityPic;
        this.timeOfTheDay = timeOfTheDay;
        this.benefits = benefits;
        this.contraIndication = contraIndication;
    }
}
