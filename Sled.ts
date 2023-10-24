import { Santa } from './Santa';
import { Bag } from './Bag';
import { Present } from './Present';
import { BagType } from './BagType';

export class Sled {
    santa: Santa;
    bags: Bag[];

    constructor(santa: Santa, ) {
        this.santa = santa;
        this.bags = [];

    }
    addPresent(present: Present) : void {
        if(this.bags.length > 0) {
            const result = this.bags[this.bags.length -1].addPresent(present);
            if (!result) {
                const bag = new Bag(10, BagType.Canvas);
                bag.addPresent(present)
                this.addBag(bag)
            }
        } else {
            this.addDefaultBagAndPresent(present)
      /*       const bag = new Bag(10, BagType.Canvas);
            bag.addPresent(present)
            this.addBag(bag) */
        }
    }

    private addDefaultBagAndPresent(present: Present) : void {
        const bag = new Bag(10, BagType.Canvas);
        bag.addPresent(present)
        this.addBag(bag)
    }
    
// : void means that the function does not return anything
    addBag(bag: Bag) : void {
        this.bags.push(bag)
    }
    setSanta(santa: Santa) : void {
        this.santa = santa;
    }

    print() : void {
        this.bags.forEach( bag => {
            bag.print()
        })

    }
}