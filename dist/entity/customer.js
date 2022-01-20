"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const singletonSeller_1 = require("./singletonSeller");
const debug_1 = require("debug");
class Customer {
    constructor(name) {
        this.ownedItems = [];
        this.name = name;
        this.log = (0, debug_1.debug)(`app:Customer${this.name}`);
    }
    buy(item) {
        this.log(`Customer agent "${this.name}" want to buy item "${item.name}" from "${singletonSeller_1.Seller.getInstance().name}"`);
        const result = singletonSeller_1.Seller.getInstance().sell(item, this);
        if (!result) {
            this.log(`buying "${item.name}" was unsuccessful!`);
            return;
        }
        const index = this.ownedItems.findIndex(oI => oI.name == result.name);
        if (index == -1) {
            this.ownedItems.push(result);
        }
        else
            this.ownedItems[index].quantity++;
        //this.logOwned()
    }
    logOwned() {
        this.log(`Customer Agent "${this.name}" bought these items :`);
        this.ownedItems.forEach(item => {
            this.log(`product name : "${item.name}" , quantity : "${item.quantity}"`);
        });
    }
}
exports.Customer = Customer;
