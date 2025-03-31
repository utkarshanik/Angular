import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  imports: [FormsModule,NgIf],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.css'
})
export class TemplateformComponent {

  userdata:any={};
  adduser(val:NgForm)
  {
      console.log(val);
      this.userdata=val
  }

}
