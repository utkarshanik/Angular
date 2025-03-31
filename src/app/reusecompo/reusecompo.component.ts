import { Component, EventEmitter, Output } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-reusecompo',
  imports: [],
  templateUrl: './reusecompo.component.html',
  styleUrl: './reusecompo.component.css'
})
export class ReusecompoComponent {
  today = new Date();
  // child to parrent
  user=['anil','sunil','ginil','kinil']
  
  @Output() getuser =new EventEmitter();
 //Automatically gives data
//  ngOnInit()
//  {
//   this.getuser.emit(this.user)
//  }

 get()
 {
  this.getuser.emit(this.user)
 }

}
