import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userTodo : any;

  constructor(private userService: UserService, private todoService : TodoService) { }
  logout()
  {
    this.userService.logout();
  }

  ngOnInit(): void {
   this.userTodo = this.userTodo = this.todoService.getTodo();
   console.log( this.userTodo  );
   
  }
  find(event:any){
    // console.log(event);
    
  }

}
