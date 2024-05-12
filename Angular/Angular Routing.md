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