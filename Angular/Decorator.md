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

-  @Component:

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
- @Directive:

Description: Used to create a new directive in Angular.

```typescript

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appExampleDirective]'
})
export class ExampleDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
```
- @Pipe:

Description: Used to define a new pipe in Angular.

```typescript

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'examplePipe'
})
export class ExamplePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
```
- @Injectable:

Description: Used to provide a service instance in Angular.

```typescript

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  // Service logic goes here
}
```
- @Input:

Description: Used to define an input property in Angular.

```typescript

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {
  @Input() message: string;
}
```

-@Output:

Description: Used to define an output property in Angular.

```typescript

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
}

```

-@ViewChild / @ContentChild:

Description: Used to query and access child components or elements in Angular.

```typescript

import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent {
  @ViewChild('child') childComponent: ElementRef;
}

```

` @HostBinding / @HostListener:

Description: Used to bind to host element properties or listen to host element events in Angular.

```typescript

import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appExampleDirective]'
})
export class ExampleDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'yellow';
  }
}
```




