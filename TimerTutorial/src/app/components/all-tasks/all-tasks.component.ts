import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

import { TaskService } from '../../services/task.service';

import { Task } from '../../model/task';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css'],
  providers: [TaskService]
})
export class AllTasksComponent implements OnInit {

  taskData: Task[];
  mins: number = 0;
  time = "";
  hours = 0;
  timer = TimerObservable.create(100, 100);
  clickCount = 0;
  publicID = 0;
  private subscription: Subscription;
  private started = false;

  constructor(private taskService: TaskService) {  
    console.log("konstruktor"); 
  }

  ngOnInit() {
    this.getTaskData();
  }

  getTaskData() {
    this.taskData = this.taskService.getTask();
    console.log("uslo");
  }


  startTask(id: number, taskTime: String) {
    this.clickCount += 1;
    if (this.clickCount > 1) {
      this.clickCount = 0;
      this.stopTask();
      return;
    }
    this.started = true;
    this.publicID = id;
    this.checkTime(taskTime);
    this.subscription = this.timer.subscribe(t => {
      this.calcTime(id);
    });
  }

  stopTask() {
    this.subscription.unsubscribe();
    this.started = false;
    this.clickCount = 0;
  }

  checkTime(currTime: String) {
    let currHour = currTime.substring(0, 2);
    let currMin = currTime.substring(3, 5);
    this.hours = +currHour;
    this.mins = +currMin;
  }

  changeTime(id: number, newTime: String) {
    this.taskData.forEach(element => {
      if (element.id == id) {
        element.time = newTime;
        return;
      }
    });
  }

  calcTime(id: number) {
    this.mins += 1;
    if (this.mins == 59) {
      this.hours += 1;
      if (this.hours == 24) {
        this.hours = 0;
      }
      this.mins = 0;
      if (this.hours < 9) {
        this.time = "0" + this.hours + ":" + this.mins;
      } else if (this.hours > 9 && this.hours < 24) {
        this.time = this.hours + ":0" + this.mins;
      }
    }

    if (this.mins > 9 && this.mins < 59) {
      if (this.hours < 9) {
        this.time = "0" + this.hours + ":" + this.mins;
      } else {
        this.time = this.hours + ":" + this.mins;
      }
    } else {
      if (this.hours < 9) {
        this.time = "0" + this.hours + ":0" + this.mins;
      } else {
        this.time = this.hours + ":0" + this.mins;
      }
    }

    this.changeTime(id, this.time);
  }

}
