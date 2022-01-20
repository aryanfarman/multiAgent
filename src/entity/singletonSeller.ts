import {Product} from "./product";
import {CustomerAgent} from "./customerAgent";
import {debug} from "debug";

export class Seller {
    private _name : string = "S1"
    private products : Product[]=[new Product('A'),new Product('B')]
    private balance : number=0
    private customersList : CustomerAgent[]=[]
    static instance : Seller
    log=debug("app:SellerS1")
    private constructor() {

    }
    static getInstance(){
        if(!this.instance)
            this.instance=new Seller();
        return this.instance
    }
    get name(){
        return this._name
    }
    sell(item:Product,buyer:CustomerAgent){
        if(buyer.name=="B3"&&item.name=="B"){
            this.log(`Customer agent "${buyer.name}" is not authorized for buying item "${item.name}"`)
            return
        }
        if(item.name!="A" && item.name!="B"){
            this.log(`item "${item.name}" is not available in this store!`)
        }
        let index= this.products.findIndex(pItem =>  pItem.name == item.name)
        if(this.products[index].quantity===0){
            this.log(`item "${item.name}" is sold out!`)
            return;
        }
        this.products[index].quantity--
        this.balance+=this.products[index].price
        this.log(`item "${item.name}" sold to customer agent "${buyer.name}"`)

        index=this.customersList.findIndex(item=>item.name==buyer.name)
        if(index==-1){
            this.customersList.push(buyer)
        }
        return {name:item.name,price:item.price,quantity:1}
    }
    printCustomers(){
        this.log(`list of Seller Agent "${this.name}" Customers :`)
        this.customersList.forEach(customer=>{
            this.log(`Agent Name : ${customer.name}`)
            customer.logOwned()
            /*Customer.ownedItems.forEach(item=>{
                this.log(`Product Name : "${item.name}" , Quantity : "${item.quantity}" `)
            })*/
        })
        this.log(`store income : ${this.balance}$`)
    }


}

