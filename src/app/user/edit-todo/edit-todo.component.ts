import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PassIdService } from '../pass-id.service';
import { TodoService } from '../service/todo.service';


@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  todoform : FormGroup;
  todo : any;
  id : number;
  sub:boolean = false;

  constructor(private todoService : TodoService, private passIdservice : PassIdService) { }

  ngOnInit(): void {
    this.setForm();
    this.todoform = new FormGroup({
      "taskName" : new FormControl(this.todo.taskName,Validators.required),
      "taskType" : new FormControl(this.todo.taskType,Validators.required),
      "endDate" : new FormControl(this.todo.endDate,[Validators.required])
    });
  }
  setForm()
  {
    this.id = this.passIdservice.getId();
    this.todo = this.todoService.getTodo();
    this.todo.forEach((element,index) => {      
      if( index == this.id )
      {      
          this.todo = element;
      }
    });
  }
  submit()
  {
    this.todo.taskName = this.todoform.value.taskName;
    this.todo.taskType = this.todoform.value.taskType;
    this.todo.endDate = this.todoform.value.endDate;
    this.sub = true;
    this.todoService.editTodo(this.id, this.todo);
  }

}
