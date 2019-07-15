import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import {FormsModule} from '@angular/forms';
import CourseServiceClient from './services/CourseServiceClient';
import ModuleServiceClient from './services/ModuleServiceClient';
import LessonServiceClient from './services/LessonServiceClient';
import TopicServiceClient from './services/TopicServiceClient';
import WidgetServiceClient from './services/WidgetServiceClient';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    TopicPillsComponent,
    WidgetListComponent,
    ModuleListComponent,
    LessonTabsComponent,
    CourseDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseServiceClient, ModuleServiceClient, LessonServiceClient, TopicServiceClient, WidgetServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
