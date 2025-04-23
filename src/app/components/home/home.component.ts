import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService, Product } from '../../services/product.service';
import { SortByPricePipe } from '../../pipes/sort-by-price.pipe';
import { FilterByNamePipe } from '../../pipes/filter-by-name.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, SortByPricePipe, FilterByNamePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private productService = inject(ProductService);
  private router = inject(Router);

  products: Product[] = [];
  sortOrder: string = '';
  searchQuery: string = '';

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => console.error('Error fetching products:', err)
    });
  }

  goToProduct(id: number){
    this.router.navigate(['/product', id]);
  }
}
