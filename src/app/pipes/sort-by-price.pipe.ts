import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../services/product.service';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(products: Product[], order: string = ''): Product[] {
    if (!products || !Array.isArray(products)) return [];

    if (order === 'croissant') {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (order === 'decroissant') {
      return [...products].sort((a, b) => b.price - a.price);
    } else {
      return [...products];
    }
  }

}
