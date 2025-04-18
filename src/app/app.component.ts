import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponnet } from './profile/profile.component';
import { Task1Component } from './task1/task1.component';
import { EventTask2Component } from './event-task2/event-task2.component';
import { GetseteventTask3Component } from './getsetevent-task3/getsetevent-task3.component';
import { ToggleComponent } from './toggle/toggle.component';
import { Toggle2Component } from './toggle-2/toggle-2.component';
import { SwitchComponent } from './switch/switch.component';
import { SignalsComponent } from './signals/signals.component';
import { ComputedSignalComponent } from './computed-signal/computed-signal.component';
import { EffectComponent } from './effect/effect.component';
import { ContextualVarComponent } from './contextual-var/contextual-var.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { TodolistComponent } from './todolist/todolist.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DirectiveComponent } from './directive/directive.component';
import { RoutingComponent } from './routing/routing.component';
import { HeaderComponent } from './header/header.component';
import { Page404Component } from './page404/page404.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ParrentTochildComponent } from './parrent-tochild/parrent-tochild.component';
import { ReusecompoComponent } from './reusecompo/reusecompo.component';
import { CompopipeComponent } from './compopipe/compopipe.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,LoginComponent,SignupComponent,ProfileComponnet,Task1Component,EventTask2Component,GetseteventTask3Component,ToggleComponent,Toggle2Component,SwitchComponent,SignalsComponent,ComputedSignalComponent,EffectComponent,ContextualVarComponent,TwowaybindingComponent,TodolistComponent
    ,DynamicComponent,DirectiveComponent,RoutingComponent,HeaderComponent,Page404Component,
    ReactiveformComponent,TemplateformComponent,ParrentTochildComponent,ReusecompoComponent,CompopipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
  // paremt to child username
  username="bruce"
  // Child to parrent
  users:undefined|string[];
  childHandle(user:string[])
  {
      console.log(user);
      this.users=user;
  }


  onchange(name:string)
  {
      this.username=name
  }

  title = 'Utkarsha';  // properties of class.....
  x=10;
  // x:number="10";
  y=20;
data:String | number =32;
  Click_Func()
  {
    console.log("Called");
    // This makes sure that function is of this class , This points to this this class..
    console.log(typeof this.data);
    
    // this.Click_Funcanother()
    
  }
  Click_Funcanother(a:number,b:number)
  {
    console.log(typeof this.data);
    // console.log("Called anotehr in");
    console.log("Addition is ", a+b);
    
  }


}
