import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  inStock: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private jsonUrl = '../assets/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonUrl);
  }

  getIds(): Observable<string[]> {
    return this.getProducts().pipe(
      map(products => products.map(product => product.id.toString()))
    );
  }
}
