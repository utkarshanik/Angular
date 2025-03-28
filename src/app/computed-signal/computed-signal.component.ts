import { Component, effect,computed, signal } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-computed-signal',
  imports: [],
  templateUrl: './computed-signal.component.html',
  styleUrl: './computed-signal.component.css'
})
export class ComputedSignalComponent {
data=signal(10);
data2=signal(40);

result =computed(()=>this.data()+ this.data2())

update()
{
  console.log(this.result());
  this.data.set(100);
  console.log(this.result());
  
}

//by normal way we need to update the signal using effect
// constructor()
// {
//   effect(()=>{
//     this.data.set(this.data()+ 1);
//   })
// }

}
