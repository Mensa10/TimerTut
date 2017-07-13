import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TaskService } from '../../services/task.service';

import { Task } from '../../model/task';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
  providers: [TaskService]
})
export class InputFormComponent implements OnInit, OnChanges {

  companies: any[];
  users: any[];
  assignments: any[];
  company_id: string;
  user_id: string;
  assignment_id: string;
  description: String;
  time: String;
  taskDate: Date;
  userForm: FormGroup;

  @Input() newTask: Task = new Task(1, this.company_id, this.user_id,this.assignment_id,this.description,this.time,this.taskDate);

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.configureForm();
    this.getCompanies();
    this.getAssignments();
    this.getUsers();
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  getCompanies() {
    this.taskService.getCompany().subscribe(data => {
      this.companies = data;
    })
  }

  getUsers() {
    this.taskService.getUser().subscribe(data => {
      this.users = data;
    })
  }

  getAssignments() {
    this.taskService.getAssignment().subscribe(data => {
      this.assignments = data;
    })
  }

  addTask() {
    this.newTask.task_name = this.userForm.value["assignment"];
    this.newTask.company_name = this.userForm.value["company"];
    this.newTask.description = this.userForm.value["description"];
    this.newTask.time = this.userForm.value["selTime"];
    this.newTask.user = this.userForm.value["user"];
    this.taskService.saveTask(this.newTask);
    setTimeout(() => {
      this.userForm.reset();
    }, 500);
  }

  configureForm() {
    this.userForm = new FormGroup({
      company: new FormControl(this.newTask.company_name, [Validators.required]),
      user: new FormControl(this.newTask.user, Validators.required),
      assignment: new FormControl(this.newTask.task_name, Validators.required),
      description: new FormControl(this.newTask.description, Validators.required),
      selTime: new FormControl(this.newTask.time, Validators.required)
    })
  }

  resetForm(){
    this.userForm.reset();
  }

}
