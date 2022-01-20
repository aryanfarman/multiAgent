import {Product} from "./product";
import {Seller} from "./singletonSeller";
import {debug} from "debug";

interface CustomerInterface{
    name:string
    ownedItems:Product[]
}

export class CustomerAgent implements CustomerInterface {
    name:string
    ownedItems:Product[]=[]
    log
    constructor(name:string) {
        this.name=name
        this.log = debug(`app:Customer${this.name}`)
    }
    buy(item:Product){
        this.log(`Customer agent "${this.name}" want to buy item "${item.name}" from "${Seller.getInstance().name}"`)
        const result = Seller.getInstance().sell(item,this)
        if(!result) {
            this.log(`buying "${item.name}" was unsuccessful!`)
            return;
        }
        const index=this.ownedItems.findIndex(oI=>oI.name==result.name)
        if(index==-1) {
            this.ownedItems.push(result)
        }else
            this.ownedItems[index].quantity++
    }

    logOwned(){
        this.log(`Customer Agent "${this.name}" bought these items :`)
        this.ownedItems.forEach(item=>{
            this.log(`product name : "${item.name}" , quantity : "${item.quantity}"`)
        })

    }


}