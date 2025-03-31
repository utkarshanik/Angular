import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  // This is eslecotr helps in .app to access this login component
  selector: 'login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
