import { Santa } from "./Santa";
import { Sled } from "./Sled";
import { Bag } from "./Bag";
import { BagType } from "./BagType";
import { Present } from "./Present";
import { PresentType } from "./PresentType";

//months in Date() are 0-indexed
const santa1 : Santa = new Santa("Klaus", new Date(600, 0, 1))
const sled : Sled = new Sled(santa1)
const bag1 : Bag = new Bag(10, BagType.Canvas)
const present1 : Present = new Present("Lego", 8, PresentType.Hard)
const present2 : Present = new Present("Socks", 3, PresentType.Soft)

bag1.addPresent(present1);
bag1.addPresent(present2);
sled.addBag(bag1);

sled.addPresent(present2);

sled.print();

bag1.print();