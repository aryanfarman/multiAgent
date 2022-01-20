"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name) {
        this.quantity = 2;
        this.name = name;
        if (this.name === "A") {
            this.price = 100;
        }
        else
            this.price = 70;
    }
}
exports.Product = Product;
