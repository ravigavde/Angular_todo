import { Injectable } from '@angular/core';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
  
})
export class TodoService {

  constructor(private userService : UserService) { }
  addTodo(value)
  {
    let email =  this.userService.loggedIn();
    let data = JSON.parse(window.localStorage.getItem('user'));
    console.log(data);
    
    
    data.forEach(element => {
      if(element.email == email)
      {
        element.todo.push(value);
      }
    });
    window.localStorage.setItem('user',JSON.stringify(data));
  }
  getTodo()
  {
    let email =  this.userService.loggedIn();
    let data = JSON.parse(window.localStorage.getItem('user'));
    let todo = [];
    data.forEach(element => {
      if(element.email == email)
      {
          todo = element.todo;
      } 
    });
    return todo;
  }
  deleteTodo(updatedTodo)
  {
    let email =  this.userService.loggedIn();
    let data = JSON.parse(window.localStorage.getItem('user'));

    data.forEach(element => {
      if(element.email == email)
      {
        element.todo = updatedTodo;
      } 
    });
    window.localStorage.setItem('user',JSON.stringify(data));
    window.location.reload();
  }
  editTodo()
  {

  }
}
