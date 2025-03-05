import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../services/product.service';
import { normalizeText } from 'normalize-text';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(products: Product[], searchQuery: string = ''): Product[] {
    if (!products || !Array.isArray(products)) return [];
    if (!searchQuery) return products;
    
    searchQuery = this.normalizeText(searchQuery);

    return products.filter(product =>
      this.normalizeText(product.name).includes(searchQuery)
    );
  }

  private normalizeText(text: string): string {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

}
