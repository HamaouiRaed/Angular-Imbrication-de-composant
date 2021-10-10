import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/Products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input() product!: Product;
  @Input() priceMaxInput!: number;
  @Output() incrementEvent = new EventEmitter<Product>() ;
  constructor() { 
    
  }

  ngOnInit(): void {
    
    console.log(this.product);
  }

   like(lik:number){
     this.product.like=this.product.like++;
   }
   buy(qu:number){
     this.product.quantity=this.product.quantity--;
   }

   sendNotif(){

    this.incrementEvent.emit(this.product)
   }
}
