import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parrent-tochild',
  imports: [],
  templateUrl: './parrent-tochild.component.html',
  styleUrl: './parrent-tochild.component.css'
})
export class ParrentTochildComponent {
@Input()user:string='';
@Input()city:string='';
}
