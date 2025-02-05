import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  shopListObj: Array<{id: number, name: string, status: string}> = [];
  
  @Input() shopList: Array<string>;
   ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes['shopList']) {
      this.updateShopListObj();
    }
  }
  ngOnInit() {
    this.updateShopListObj();
  }

  private updateShopListObj() {
    this.shopListObj = []; // Clear the existing list
    if (this.shopList) {
      this.shopList.forEach(shop => {
        const id = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        const status = id > 5 ? "Opened" : "Closed";
        this.shopListObj.push({id, name: shop, status});
      });
    }
  }
}
