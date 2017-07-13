import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NglModule } from 'ng-lightning/ng-lightning';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { MainFormComponent } from './components/main-form/main-form.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';

const appRoutes: Routes = [
  {path:'', component: LoginComponent},
  {path:'tasks', component: TasksComponent},
  {path:'input', component: InputFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    MainFormComponent,
    InputFormComponent,
    TabsComponent,
    AllTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NglModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
