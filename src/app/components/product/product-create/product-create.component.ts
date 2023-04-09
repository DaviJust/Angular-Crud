import { HeaderService } from './../../template/header/header.service';
import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from '../../product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {



  product: Product = {
    name: "",
    price: null!
  }


  constructor(private productService: ProductService,
    private router: Router, headerService: HeaderService) {
      headerService.headerData = {
        title: 'Cadastro de cliente',
        icon: 'try',
        routeUrl: '/products/create'
      }


     }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado')
      this.router.navigate(['/products'])
    })
  }
  cancelProduct(): void {
    this.router.navigate(['/products'])
  }
}

