import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [NgFor,NgIf,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
stud=["Anil","Ginil","Mrunal","Fahan"]

studdata=[{name:"Anu",age:'23',email:"Ail@hm"},
  {name:"bhinh",age:'23',email:"ghAil@hm"},
  {name:"gfu",age:'73',email:"cvAil@hm"},
  {name:"sunu",age:'33',email:"sdAil@hm"}
]

h=true;
hide()
{
  this.h=! this.h;
}

color=''

change(color:string)
{
  this.color=color;
}

}
