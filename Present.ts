import { PresentType } from './PresentType';

export class Present {
    name: string;
    weight: number;
    presentType: PresentType;

    constructor(
         name: string, 
         weight: number, 
         presentType: PresentType) {
            this.name = name;
            this.weight = weight;
            this.presentType = presentType;
    }
// after the colon you specify the type of the return value
    getPresentType() : PresentType {
        return this.presentType;
    }

    getWeight() : number {
        return this.weight;
    }

    print() : void {
        console.log(this.name + " " + this.weight + " " + this.presentType);
        
    }
}