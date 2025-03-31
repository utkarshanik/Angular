import { Component, } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
name=new FormControl("abc");
pass=new FormControl("**");

display()
{
  console.log(this.name.value,this.pass.value)
}

}
