import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  todoform : FormGroup;
  today : number = (new Date).getDate();
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoform = new FormGroup({
      "taskName" : new FormControl(null,Validators.required),
      "taskType" : new FormControl(null,Validators.required),
      "endDate" : new FormControl(null,[Validators.required, Validators.min(this.today)])
    });
  }
  submit()
  {
    let todo = {
      'taskName' : this.todoform.value.taskName,
      'taskType' : this.todoform.value.taskType,
      'endDate'  : this.todoform.value.endDate,
      'status'   : "Pending"
    }    
    this.todoService.addTodo(todo);

  }

}
