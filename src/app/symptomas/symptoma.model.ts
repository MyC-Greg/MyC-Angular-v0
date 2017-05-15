export class Symptoma {
    public name: string;
    public status: number;
    public index: number

    constructor(name: string, status: number, index: number) {
        this.name = name;
        this.status = status;
        this.index = index;
    }
}