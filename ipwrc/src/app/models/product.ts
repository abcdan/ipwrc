import { ThisReceiver } from "@angular/compiler"

class Product {
    name: string
    description: string
    price: number
    image: string

    constructor(name: string, description: string, image: string, price: number) {
        this.name = name
        this.description = description
        this.image = image
        this.price = price
    }

    public getName() {
        return this.name
    }

    public getDescription() {
        return this.description
    }

    public getImage() {
        return this.image
    }
    
    public getPrice() {
        return this.price
    }
}

export { Product }
