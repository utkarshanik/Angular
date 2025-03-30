import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  imports: [],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {
zoom=true;
a="10px";
b="100px";
bg="green";
tog()
{
  this.zoom= !this.zoom;
}
}
