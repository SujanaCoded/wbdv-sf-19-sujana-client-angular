import { Component, OnInit } from '@angular/core';
import CourseServiceClient from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }

  courses = []
  selectedCourse = {}

  ngOnInit() {

    this.service.findAllCourses()
      .then(courses => this.courses = courses);
    console.log(this.courses);
  }

  selectCourse = course =>
    this.selectedCourse = course
}
