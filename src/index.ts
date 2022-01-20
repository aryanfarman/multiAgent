import {Seller} from "./entity/singletonSeller";
import {CustomerAgent} from "./entity/customerAgent";
import {Product} from "./entity/product";

const productA=new Product("A")
const productB=new Product("B")
const B1 = new CustomerAgent("B1")
const B2 = new CustomerAgent("B2")
const B3 = new CustomerAgent("B3")
const B4 = new CustomerAgent("B4")
B1.buy(productA)
B3.buy(productB)
B3.buy(productA)
B2.buy(productB)
B4.buy(productA)
B2.buy(productB)
Seller.getInstance().printCustomers()
