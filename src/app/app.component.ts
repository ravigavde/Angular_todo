import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-todo';

  
  ngOnInit(): void {
  }

  constructor( private router : Router){
  }
  // this.router.navigate(['login']);
 
}
