interface ProductInterface{
    name:string
    price:number
    quantity:number
}

export class Product implements ProductInterface{
    name: string;
    price: number;
    quantity:number=2
    constructor(name:string) {
        this.name=name
        if(this.name==="A") {
            this.price = 100
        }else
        this.price=70
    }

}