import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  imports: [],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
color='';

users=['ABC','XYZ','PQR','MNS']
student=[
  {name:'anil',age:30,email:'anil@gm'},
  {name:'sunil',age:20,email:'raerl@gm'},
  {name:'dilpi',age:33,email:'eranil@gm'},
  {name:'dkvv',age:22,email:'gbanil@gm'}

]

handelcolor(val:string)
{
  this.color=val;
}

changecolor(event:Event)
{
  this.color= (event.target as HTMLInputElement).value
}

getname(val:string)
{
   console.log(val);
   
}
}
