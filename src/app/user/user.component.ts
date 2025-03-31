import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  data='';
constructor(private route:ActivatedRoute){}

ngOnInit(){
  this.route.params.subscribe((pa)=>{
    console.log(pa);
    this.data=pa['name'];
  })
}


}
