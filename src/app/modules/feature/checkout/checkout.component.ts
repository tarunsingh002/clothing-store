import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  handleCreateOrder(_t9: any) {}
  constructor(private forBuilder: FormBuilder) {}

  myForm: FormGroup = this.forBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    streetAddress: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', Validators.required],
    mobile: ['', Validators.required],
  });
  addresses = [1, 1, 1, 1, 1];
  handleSubmit() {
    const formValue = this.myForm.value;
    console.log('form data', formValue);
  }
}
