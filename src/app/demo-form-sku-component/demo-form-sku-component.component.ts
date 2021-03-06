import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-demo-form-sku-component',
  templateUrl: './demo-form-sku-component.component.html',
  styleUrls: ['./demo-form-sku-component.component.css']})
  
export class DemoFormSkuComponentComponent implements OnInit {
  myForm: FormGroup;
  validatorsForm: FormGroup;
  display = true;
  productName: string;

  constructor(fb: FormBuilder) { 
     //Takes an object of key-value pairs that specify the FormControls in this group.
    this.myForm = fb.group({
      'sku': ['ABC123']
    })

    this.validatorsForm = fb.group({
      'val': ['',Validators.required]
    })
    this.productName = 'Angular Guide'

  }

  ngOnInit() {}
 
  displayAnswer() {
    this.display = !this.display
  }

  onSubmit(form) {
    console.log('form',form)
  }

  onReactiveSubmit(form) {
    console.log('Reactive Form', form)
  }

  onValSubmit(form) {
    console.log('form with validators', form)
  }
}