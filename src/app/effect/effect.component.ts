import { Component,signal,computed,effect } from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [],
  templateUrl: './effect.component.html',
  styleUrl: './effect.component.css'
})
export class EffectComponent {
username=signal('Alfiya!!!!!!!!');
count=signal(0)
display=false;
constructor()
{
  effect(()=>{
    console.log(this.username());
    if(this.count()==2)
    {
        this.display=true;
    }
    else{
      this.display=false;
    
    }
    
  })
}


}
