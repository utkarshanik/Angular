import { Component,effect,signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {

  count=signal(10)

  constructor()
  {
    effect(()=>{
      console.log(this.count());
    })
    // The count keeps changeing and given the changed value each time
  }

}
