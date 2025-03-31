import { NgIf } from '@angular/common';
import { Component, } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule,NgIf],
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

formFrp=new FormGroup({
  name2:new FormControl('',[Validators.required]),
  pass2:new FormControl('',[Validators.required ,Validators.minLength(5)]),
  email2:new FormControl('',[Validators.minLength(5),Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
})

onSubmit()
{
  console.log(this.formFrp.value);
}

get name2()
{
  return this.formFrp.get('name2');
}
get pass2()
{
  return this.formFrp.get('pass2');
}
get email2()
{
  return this.formFrp.get('email2');
}

}
