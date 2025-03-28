import { Component } from '@angular/core';

@Component({
  selector: 'app-getsetevent-task3',
  imports: [],
  templateUrl: './getsetevent-task3.component.html',
  styleUrl: './getsetevent-task3.component.css'
})
export class GetseteventTask3Component {
name=""
disname=''
email=""
getname(event:Event)
{
  const name= (event.target as HTMLInputElement).value
    // console.log(event);
     this.name=name;
    console.log(name);
}
showname()
{
      this.disname=this.name;
}
setname()
{
  this.name="Utkarsha"
}
getemail(value:string)
{
  this.email=value
}

setemail()
{
  this.email="utkarsha"
}

}
