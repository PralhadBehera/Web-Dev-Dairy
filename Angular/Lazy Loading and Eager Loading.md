# Lazy loading:- 
Lazy loading involves loading elements or resources on-demand, typically when they are needed, rather than loading them upfront when the application starts. This approach reduces the initial load on the server and improves performance, as only necessary resources are fetches

Eg. in a video game is like how you explore a new place. You don't need to see everything at once; you discover new areas as you go. Similarly, in a game, lazy loading means only loading the part of the game world you're in. As you move around, the game loads new areas just before you reach them, keeping your experience smooth and fast. It's like getting what you need when you need it, without waiting for everything to load upfront.


| Aspect          | Eager Loading                                       | Lazy Loading                                                  |
|-----------------|-----------------------------------------------------|---------------------------------------------------------------|
| **Timing**      | Resources are loaded upfront during initialization. | Resources are loaded on-demand, typically asynchronously.    |
| **Initialization** | All necessary resources are fetched and initialized.  | Only essential resources are loaded upfront.                  |
| **Loading Time** | Longer initial loading times.                         | Shorter initial loading times.                                |
| **Performance**  | Immediate access to resources.                        | Deferred loading improves performance and user experience.    |
| **Usage**       | Suitable for smaller applications or when immediate access is required. | Beneficial for large applications with many resources.       |
| **Optimization** | May lead to unnecessary loading of unused resources.  | Optimizes resource usage by loading only what is needed.     |


## Automaticate Lazy loading - 

```cmd
ng generate module products --route products --module app.module
```

Let's break down each command:

 `ng generate module products --route products --module app.module`:
   - `ng generate module`: This command tells Angular CLI to generate a new Angular module.
   - `products`: This is the name of the module being generated. In this case, it's called "products".
   - `--route products`: This flag tells Angular CLI to generate a routing configuration for the module with the specified route path. Here, the route path is "products".
   - `--module app.module`: This flag specifies the module where the generated module will be imported. In this case, it's importing the generated "products" module into the "app.module.ts" file.

## Manually lazy Loading -

1. Create the products.module.ts in a component.

```html
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
```

2. Create the products-routing.ts in a component.

```html 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [{ path: '', component: ProductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
```

3. Add routing in app-routing.module.ts

```html
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';


const routes: Routes = [
  {
  path:"helloWorld" , component: HelloWorldComponent 
  },
  {
    path:'DataBinding' , loadChildren: () => import('./databinding/databinding.module').then(m => m.DataBindingModule) 
  },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

4. Removing the imports from the app.module.ts

