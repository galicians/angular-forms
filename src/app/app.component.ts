import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  nameControl = new FormControl('Pablo');
  name = this.nameControl.value;

  personInfo = new FormGroup({ 
    firstName: new FormControl('Pablos'), 
    lastName: new FormControl("Porta"),
    zip: new FormControl("SE1")
  })


}
