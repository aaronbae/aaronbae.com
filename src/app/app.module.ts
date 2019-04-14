import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ViewerComponent } from './viewer/viewer.component';
import { PostService } from './post.service';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProjectsComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlimLoadingBarModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
