import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user='';
constructor(private route:ActivatedRoute){ }
ngOnInit(){

  this.route.queryParams.subscribe(p=>{
    this.user=p['name'];
    console.log(p['name']);
  })
}
stud=[
  {
    id:1,
    name:"Utkarsha",
    age:23,
    email:"utkasrha"
  },
  {
    id:2,
    name:"tkarsha",
    age:23,
    email:"utkasrha"
  },
  {
    id:3,
    name:"karsha",
    age:23,
    email:"utkasrha"
  },
  {
    id:4,
    name:"erkasha",
    age:23,
    email:"utkasrha"
  }
]


}
