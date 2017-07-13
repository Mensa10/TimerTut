import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TaskService } from '../../services/task.service';

import { User } from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [TaskService]
})
export class LoginComponent implements OnInit {

  currUser: User;
  private users;
  private auth: boolean = false;

  constructor(private router: Router, private taskService: TaskService) {
    this.currUser = new User("", "");
  }

  ngOnInit() {
  }

  onLogin() {
    this.taskService.getUser().subscribe(data => {
      data.forEach(el => {
        if (el.user_name == this.currUser.username && el.password == this.currUser.password) {
            this.router.navigate(['tasks']);
            return;
        }
      })
    });


  }

}
