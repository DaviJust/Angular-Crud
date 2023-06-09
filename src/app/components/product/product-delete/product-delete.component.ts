import { HeaderService } from './../../template/header/header.service';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product
  
  constructor(
    private ProductService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    headerService: HeaderService
    ) { 
      headerService.headerData = {
        title: 'Deletar Cliente',
        icon: 'dangerous',
        routeUrl: '/products/delete'
      }
    }



  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ProductService.readById(id).subscribe(product => {
      this.product = product
    })
  }


  deleteProduct(): void  {
    this.ProductService.delete(this.product.id).subscribe(() => {
      this.ProductService.showMessage('Produto excluído com sucesso')
      this.router.navigate(['/products'])
    })

  }

  cancelProduct(): void {
    this.router.navigate(['/products'])

  }
}
