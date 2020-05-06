import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form-sku-component',
  templateUrl: './demo-form-sku-component.component.html',
  styleUrls: ['./demo-form-sku-component.component.css']})
  
export class DemoFormSkuComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  display = true;

  displayAnswer() {
    this.display = !this.display
  }

  onSubmit(form) {
    console.log('form',form)
  }
}