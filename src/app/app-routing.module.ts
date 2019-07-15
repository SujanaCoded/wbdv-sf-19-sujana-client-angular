import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';


const routes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:cid', component: CourseDetailComponent },
  { path: 'courses/:cid/modules', component: CourseDetailComponent },
  { path: 'courses/:cid/modules/:mid', component: CourseDetailComponent },
  { path: 'courses/:cid/modules/:mid/lessons', component: CourseDetailComponent},
  { path: 'courses/:cid/modules/:mid/lessons/:lid', component: CourseDetailComponent},
  { path: 'courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseDetailComponent },
  { path: 'courses/:cid/modules/:mid/lessons/:lid/topics/:tid', component: CourseDetailComponent },
  { path: 'courses/:cid/modules/:mid/lessons/:lid/topics/:tid/widgets', component: CourseDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
