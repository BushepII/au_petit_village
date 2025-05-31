import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'product/:id',
        component: ProductComponent,
        data: {
            renderMode: 'pre-render',
            getPrerenderParams: () => {
                return [
                { id: '1' },
                { id: '2' },
                { id: '3' },
                { id: '4' },
                { id: '5' },
                { id: '6' },
                ];
            }
        }
    },
    { path: 'about', component: AboutComponent},
    { path: '**', component: ErrorpageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
