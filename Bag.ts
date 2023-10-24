import { BagType } from "./BagType";
import { Present } from "./Present";
import { PresentType } from "./PresentType";

export class Bag {
    maxWeight: number;
    bagType: BagType;
    presents: Present[]

    constructor(maxWeight: number, bagType: BagType) {
        this.maxWeight = maxWeight;
        this.bagType = bagType;
        this.presents = [];
    }

    addPresent(present: Present) {
        const isUnderLimit = this.getTotalWeight() + present.getWeight() <= this.maxWeight;
        const isPaperAndSoft = present.presentType === PresentType.Soft && this.bagType === BagType.Paper;
        if(isUnderLimit && !isPaperAndSoft) {
        this.presents.push(present)
            return true;
        }
        return false;
    }

    getTotalWeight() : number {
        let totalWeight;
        this.presents.forEach(present => {
            totalWeight += present.getWeight();
        })
        return totalWeight;
    }

    print() : void {
        console.log("This bag is of the type" + this.bagType + " and has a maximum weight of " + this.maxWeight + "kg. ");
        
        this.presents.forEach(present => {
            present.print()
        })
    }
}