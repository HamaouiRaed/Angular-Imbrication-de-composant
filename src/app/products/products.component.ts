import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  listProdcut!:Product[];
  maxPrice!:number;

  constructor() {

  }

  ngOnInit(): void {
    this.listProdcut=[ { id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0 },
      { id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0 },
      { id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0 },
    ];
    console.log(this.listProdcut);
    
  }

  buy(i: number) {
    this.listProdcut[i].quantity = this.listProdcut[i].quantity- 1;
    console.log(this.listProdcut[i].quantity);
  }
  like (i:number){
    this.listProdcut[i].like=this.listProdcut[i].like++;
    console.log(this.listProdcut[i].like);
  }
}
