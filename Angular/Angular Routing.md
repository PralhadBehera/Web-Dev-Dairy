# Angular Routing

```Angular Routing``` or ```Angular Router Configuration``` is a fundamental aspect of Angular development that enables navigation within a single-page application (SPA). It allows users to navigate between different views or components of the application without having to reload the entire page

```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // Other routes...
];

export default routes;
```

## RouterLink 

```RouterLink``` serves as an alternative to the <a> anchor tag in Angular applications for navigating between different views or routes. Instead of using traditional anchor tags with href attributes, you can use RouterLink to create navigation links that are handled by Angular's router. This approach provides several benefits, including improved performance, better control over navigation behavior, and seamless integration with Angular's routing features.

```javascript 
<!-- Template -->
<a routerLink="/home">Home</a>
<a routerLink="/products">Products</a>
<a [routerLink]="['/product', productId]">Product Details</a>
```

## Routeroutlet

In Angular, a ```router-outlet``` is a directive that acts as a placeholder in a component’s template. It’s used to dynamically load different components based on the current URL route. Router-outlet is a crucial part of Angular’s routing system, enabling you to build single-page applications where different parts of the app can change without reloading the entire page.

```typescript
<router-outlet></router-outlet>
<router-outlet name='left'></router-outlet>
<router-outlet name='right'></router-outlet>
```