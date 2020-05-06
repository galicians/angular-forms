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

  constructor(fb: FormBuilder) { 
     //Takes an object of key-value pairs that specify the FormControls in this group.
    this.myForm = fb.group({
      'sku': ['ABC123']
    })

    this.validatorsForm = fb.group({
      'val': ['Validators',Validators.required]
    })
    this.val = this.myForm.controls['sku'];

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
}