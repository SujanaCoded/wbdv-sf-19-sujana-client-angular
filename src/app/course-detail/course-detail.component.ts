import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  lessonId = '';
  moduleId = '';
  topicId = '';

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.lessonId = params.lid;
      this.moduleId = params.mid;
      this.topicId = params.tid;
      console.log(this.moduleId);
      console.log(this.topicId);
      console.log(this.lessonId);
    });
  }

}
