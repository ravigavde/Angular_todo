import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { PassIdService } from '../pass-id.service';
import { TodoService } from '../service/todo.service';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  @Output() 

  userTodo : any;
  nameToDelete : Array<any> = [];

  constructor(private userService: UserService,private router: Router , private todoService : TodoService, private passId : PassIdService) { }
  logout()
  {
    this.userService.logout();
  }

  ngOnInit(): void {
   this.userTodo = this.userTodo = this.todoService.getTodo(); 
  }
  find(event:any)
  {
    this.nameToDelete.push( parseInt( event) );
    // console.log(this.nameToDelete);
    
  }
  done(id)
  {
    let todo = this.todoService.getTodo();
    this.todoService.doneTodo(id[0],todo);
  }
  edit(id)
  {
    this.passId.setId(parseInt(id[0]));
    this.router.navigate(['/editTodo']);
  }
  delete()
  {
    // nametodelete  indexes
    if(confirm("Are you sure to delete"))
    {
      let originalTodo = this.todoService.getTodo();
      let newTodo = [];
      let flag = 0;

      for(let i = 0 ; i < originalTodo.length ; i++)
      {
        if( this.nameToDelete[flag] == i )
        {
          flag++;
          continue;
        }
        else
        {
          newTodo.push(originalTodo[i]);
        }
      }
      this.todoService.deleteTodo(newTodo);
      this.nameToDelete = [];
    }
  }

}
