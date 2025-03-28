import { Component } from '@angular/core';

@Component({
  selector: 'app-event-task2',
  imports: [],
  templateUrl: './event-task2.component.html',
  styleUrl: './event-task2.component.css'
})
export class EventTask2Component {
  handleEvent(event:Event)
  {
    // console.log(event);
    console.log(event.target);
    console.log(event.type);
    // console.log((event.target as Element).className);
  }
  
  handleInput(event:Event)
  {
    console.log(event.type);
    console.log((event.target as HTMLInputElement).value);

  }

}
