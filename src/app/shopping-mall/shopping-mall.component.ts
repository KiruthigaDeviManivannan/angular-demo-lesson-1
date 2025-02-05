import { Component } from "@angular/core";

const shopList = ['Nike', 'Adidas', 'Puma', 'Reebok', 'Trends', 'Max', 'WestSide', 'Pantaloons'];

@Component({
    selector: 'app-shopping-mall',
    templateUrl: './shopping-mall.component.html',
    styleUrls: ['./shopping-mall.component.css']
})

export class ShoppingMallComponent {
    mallName: string = 'SLBK Giants Complex';
    isActive: boolean = true;
    createNewShop: string = '';
    shopName: string = '';
    isShopCreated: boolean = false;
    shopList: Array<string> = shopList;

    constructor() {
        setTimeout(() => {
            this.isActive = false;
        }, 2000);
    }

    onCreateNewShop(): void {
        this.createNewShop = 'New Shop is added!...It is ' + this.shopName;
        shopList.push(this.shopName);
        this.isShopCreated = true;
    }

    onUpdateNewShop(event: Event) {
        this.shopName = (<HTMLInputElement>event.target).value;
    }
}