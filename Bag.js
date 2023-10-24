"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bag = void 0;
var BagType_1 = require("./BagType");
var PresentType_1 = require("./PresentType");
var Bag = /** @class */ (function () {
    function Bag(maxWeight, bagType) {
        this.maxWeight = maxWeight;
        this.bagType = bagType;
        this.presents = [];
    }
    Bag.prototype.addPresent = function (present) {
        var isUnderLimit = this.getTotalWeight() + present.getWeight() <= this.maxWeight;
        var isPaperAndSoft = present.presentType === PresentType_1.PresentType.Soft && this.bagType === BagType_1.BagType.Paper;
        if (isUnderLimit && !isPaperAndSoft) {
            this.presents.push(present);
            return true;
        }
        return false;
    };
    Bag.prototype.getTotalWeight = function () {
        var totalWeight;
        this.presents.forEach(function (present) {
            totalWeight += present.getWeight();
        });
        return totalWeight;
    };
    Bag.prototype.print = function () {
        console.log("This bag is of the type" + this.bagType + " and has a maximum weight of " + this.maxWeight + "kg. ");
        this.presents.forEach(function (present) {
            present.print();
        });
    };
    return Bag;
}());
exports.Bag = Bag;
