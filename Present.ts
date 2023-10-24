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
}