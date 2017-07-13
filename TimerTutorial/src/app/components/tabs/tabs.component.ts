import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { AllTasksComponent } from '../all-tasks/all-tasks.component';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
  }

  inputForm() {
    this.router.navigate(['input']);
    console.log("aa");
  }

  logout() {
    setTimeout(() => {
       this.router.navigate(['/']);
     }, 2000);
  }
  



}
