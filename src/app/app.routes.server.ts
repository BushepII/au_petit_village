import { RenderMode, ServerRoute } from '@angular/ssr';
import { ProductService } from './services/product.service';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'product/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const dataService = inject(ProductService);
      const ids = await firstValueFrom(dataService.getIds()); // Assuming this returns ['1', '2', '3']

      return ids.map(id => ({ id })); // Transforms IDs into an array of objects for prerendering
    }
  },
  
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
