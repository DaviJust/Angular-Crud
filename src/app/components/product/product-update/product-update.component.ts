import { HeaderService } from './../../template/header/header.service';
import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product

  constructor(
    private ProductService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    headerService: HeaderService
    ) { 
      headerService.headerData = {
        title: 'Editar Cliente',
        icon: 'dangerous',
        routeUrl: '/products/update'
      }


    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ProductService.readById(id).subscribe(product => {
      this.product = product
    })
  }
  updateProduct(): void {
    this.ProductService.update(this.product).subscribe(() => {
      this.ProductService.showMessage('Produto atualizado com sucesso')
      this.router.navigate(['/products'])
    })

  }
  cancelProduct(): void {
    this.router.navigate(['/products'])

  }
}
