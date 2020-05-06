import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-demo-form-sku-component',
  templateUrl: './demo-form-sku-component.component.html',
  styleUrls: ['./demo-form-sku-component.component.css']})
  
export class DemoFormSkuComponentComponent implements OnInit {
  myForm: FormGroup;
  constructor(fb: FormBuilder) { 
     //Takes an object of key-value pairs that specify the FormControls in this group.
    this.myForm = fb.group({
      'sky': ['ABC123']
    })

  }

  ngOnInit() {
  }
  display = true;

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