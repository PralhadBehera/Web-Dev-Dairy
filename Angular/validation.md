# Template driven and Model Driven Validation


| Feature                    | Template-driven Forms                                   | Model-driven (Reactive) Forms                             |
|----------------------------|---------------------------------------------------------|-----------------------------------------------------------|
| **How You Build the Form** | You mainly build the form in HTML using Angular        | You mainly build the form in TypeScript using Angular     |
| **Validation**             | You add validation rules directly in the HTML template  | You add validation rules in the TypeScript code          |
| **Handling Changes**       | Angular automatically handles form changes              | You explicitly manage form changes in TypeScript          |
| **Testing**                | Testing can be a bit tricky due to HTML dependencies   | Testing is generally easier because logic is in TypeScript|
| **Dynamic Forms**          | More challenging to create dynamic forms                | Easier to create dynamic forms                            |
| **Performance**            | May have performance issues with large or complex forms| Generally better performance, especially for big forms    |
| **Learning Curve**         | Easier for beginners                                    | Steeper learning curve, but more control once mastered    |


## Template Driven validation

```html
<form *ngIf="myForm" #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
    <input type="text" name="username" [(ngModel)]="myForm.value['username']" required minlength="3">
    <div *ngIf="myForm.controls && myForm.controls['username'] && myForm.controls['username'].invalid && (myForm.controls['username'].dirty || myForm.controls['username'].touched)">
      <div *ngIf="myForm.controls['username'].errors && myForm.controls['username'].errors['required']">Username is required.</div>
      <div *ngIf="myForm.controls['username'].errors && myForm.controls['username'].errors['minlength']">Username must be at least 3 characters.</div>
    </div>
  
    <input type="password" name="password" [(ngModel)]="myForm.value['password']" required minlength="6">
    <div *ngIf="myForm.controls && myForm.controls['password'] && myForm.controls['password'].invalid && (myForm.controls['password'].dirty || myForm.controls['password'].touched)">
      <div *ngIf="myForm.controls['password'].errors && myForm.controls['password'].errors['required']">Password is required.</div>
      <div *ngIf="myForm.controls['password'].errors && myForm.controls['password'].errors['minlength']">Password must be at least 6 characters.</div>
    </div>
  
    <button type="submit" [disabled]="myForm.invalid">Submit</button>
</form>
```

```typescript
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  myForm: NgForm | undefined;

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Access form data using form.value
      console.log(form.value);
    }
  }
}
```

Model Driven template 

```


