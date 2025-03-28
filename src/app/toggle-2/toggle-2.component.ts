import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-2',
  imports: [],
  templateUrl: './toggle-2.component.html',
  styleUrl: './toggle-2.component.css'
})
export class Toggle2Component {
color=1;

handlecol(val:number)
{
    this.color=val
}

inputcall(event:Event)
{
  this.color=parseInt((event.target as HTMLInputElement).value)
}
}
