"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sled = void 0;
var Bag_1 = require("./Bag");
var BagType_1 = require("./BagType");
var Sled = /** @class */ (function () {
    function Sled(santa) {
        this.santa = santa;
        this.bags = [];
    }
    Sled.prototype.addPresent = function (present) {
        if (this.bags.length > 0) {
            var result = this.bags[this.bags.length - 1].addPresent(present);
            if (!result) {
                var bag = new Bag_1.Bag(10, BagType_1.BagType.Canvas);
                bag.addPresent(present);
                this.addBag(bag);
            }
        }
        else {
            this.addDefaultBagAndPresent(present);
            /*       const bag = new Bag(10, BagType.Canvas);
                  bag.addPresent(present)
                  this.addBag(bag) */
        }
    };
    Sled.prototype.addDefaultBagAndPresent = function (present) {
        var bag = new Bag_1.Bag(10, BagType_1.BagType.Canvas);
        bag.addPresent(present);
        this.addBag(bag);
    };
    // : void means that the function does not return anything
    Sled.prototype.addBag = function (bag) {
        this.bags.push(bag);
    };
    Sled.prototype.setSanta = function (santa) {
        this.santa = santa;
    };
    Sled.prototype.print = function () {
        this.bags.forEach(function (bag) {
            bag.print();
        });
    };
    return Sled;
}());
exports.Sled = Sled;
