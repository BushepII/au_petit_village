import { Component, inject } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  product: Product | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.productService.getProducts().subscribe({
        next: (products) => {
          this.product = products.find(p => p.id === +id);
        },
        error: (err) => console.error('Error loading product:', err)
      });
    }
  }

}
