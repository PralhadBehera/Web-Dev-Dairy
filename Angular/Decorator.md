# Decorator 

- *Decorator used to define the metadata for the ExampleComponent class.*
- *This metadata specifies the component's selector, template file, and style files.*
- *Angular's compiler uses this information to generate the necessary code for the component.*

## Common Decorators in Angular:

```typescript
@Component: Defines a new component.
@Directive: Defines a new directive.
@Pipe: Defines a new pipe.
@Injectable: Marks a class as injectable.
@Input: Declares an input property.
@Output: Declares an output property.
@ViewChild / @ContentChild: Accesses child components or elements.
@HostBinding / @HostListener: Binds to host properties or listens to host events.
```

- 1 @Component:

Description: Used to define a new component in Angular.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  // Component logic goes here
}
```
