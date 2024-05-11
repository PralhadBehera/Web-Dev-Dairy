 There are four types of data binding supported in Angular:

1. **Interpolation:** This is the one-way binding from the component to the view. It allows you to embed expressions in double curly braces `{{}}` within the HTML template.

   Example:
   ```html
   <h1>{{pageTitle}}</h1>
   ```

2. **Property Binding:** This is another form of one-way binding where you bind the property of a DOM element to a property or expression in your component's TypeScript code.

   Example:
   ```html
   <img [src]="imageUrl">
   ```

3. **Event Binding:** This is a one-way binding from the view to the component. It allows you to listen to DOM events (like click, change, etc.) and react to them in your component's TypeScript code.

   Example:
   ```html
   <button (click)="onClick()">Click me!</button>
   ```

4. **Two-Way Binding:** This is a combination of property binding and event binding. It allows data flow in both directions, from the component to the view and vice versa. Angular provides the `ngModel` directive for two-way binding, which is typically used with form elements.

   Example:
   ```html
   <input [(ngModel)]="username">
   ```
