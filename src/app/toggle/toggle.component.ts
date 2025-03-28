import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
display=true
display2=true

show()
{
  this.display=true;

}

hide()
{
  this.display=false;

}

toggle()
{
  this.display=!this.display;
}
togglediv()
{
  this.display2=!this.display2;
}
}
