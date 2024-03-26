# RouterLink

- **Description:** 
  In Angular, the RouterLink directive provides a declarative way to navigate to different routes within your application. Instead of using traditional anchor tags `<a>`, which can cause full page reloads, RouterLink allows you to navigate between views without reloading the entire page.

- **Example:**
  ```typescript
  <button cButton class="px-4" color="primary" [routerLink]="['/view/dashboard']">
