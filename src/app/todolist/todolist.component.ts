import { Component } from '@angular/core';
// import { tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})

export class TodolistComponent {

task=''
tasklist:{id:number ,task:string}[]=[]

addtask()
{
    this.tasklist.push({id:this.tasklist.length+1,task:this.task})
    console.log(this.tasklist);
    this.task=''
}

deletelist(taskId:number)
{
    this.tasklist=this.tasklist.filter((item)=>item.id != taskId)
}

}
