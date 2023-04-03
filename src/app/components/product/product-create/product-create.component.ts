import { Product } from './../product.model';
import { Router } from '@angular/router';
import {ProductService} from '../../product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: "Produto de Teste",
    price: 125
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void{
    this.productService.create(this.product)
    this.productService.showMessage('Operacao executada com sucesso')
  }
  cancelProduct(): void{
    this.router.navigate(['/products'])
  }
}

