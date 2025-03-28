import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  imports: [],
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.css'
})
export class Task1Component {
count:number=0;
handleIncre()
{
 this.count= this.count+1
}

handleDcre()
{
  if(this.count<=0)
  {
    alert("you cant")
  }
  else
  {
    this.count=this.count-1
  }
}

handleCount(val:string)
{
  if(val=='minus')
  {
      this.handleDcre()
  }
  else if(val=='add')
  {
    this.handleIncre()
  }
  else
  {
      this.count=0;
  }
}

}
