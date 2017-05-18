import { Hobby } from './../shared/hobby.model';

export class Companion {
    public firstName: string;
    public name: string;
    public city: string;
    public postalCode: number;
    public hobbys: Hobby[];
    public profilePicturePath: string;

    constructor (firstName: string,name: string, city: string, postalCode: number, hobbys: Hobby[], profilePicturePath: string){
        this.firstName = firstName;
        this.name = name;
        this.city = city;
        this.postalCode = postalCode;
        this.hobbys = hobbys;
        this.profilePicturePath = profilePicturePath;
    }
}