import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Task } from '../model/task';
import { Data } from '../model/data';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

@Injectable()
export class TaskService implements OnInit {
  private _url: string = 'assets/taskData.json';
  private n_data;

  constructor(private http: Http) {
    console.log("ponovo kreiran");
    this.n_data = new Data();
  }

  ngOnInit() {
  }


  /*getTask(): Observable<any> {
    return this.http.get(this._url)
      .map((res: Response) => {
        this.allTask = res.json();
        console.log(this.allTask);
        return res.json();
      })
      .catch(err => {
        return Observable.throw(err);
      })
  }*/

  saveTask(nTask: Task) {
    this.n_data.allTask.push(nTask);
    console.log(this.n_data.allTask);
  }

  getTask() {
    console.log(this.n_data.allTask);
    return this.n_data.allTask;
  }

  getCompany(): Observable<any> {
    return this.http.get('assets/company_data.json')
      .map((res: Response) => res.json())
      .catch(err => {
        return Observable.throw(err);
      })
  }

  getUser(): Observable<any> {
    return this.http.get('assets/user_data.json')
      .map((res: Response) => res.json())
      .catch(err => {
        return Observable.throw(err);
      })
  }

  getAssignment(): Observable<any> {
    return this.http.get('assets/assignment_data.json')
      .map((res: Response) => res.json())
      .catch(err => {
        return Observable.throw(err);
      })
  }
}
