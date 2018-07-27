import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './main/login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatCardModule } from '@angular/material';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { ListProjectsComponent } from './main/list-projects/list-projects.component';
import { ProjectComponent } from './main/project/project.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListProjectsComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
