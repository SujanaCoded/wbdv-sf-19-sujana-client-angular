import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class CourseService {

  constructor() { }

  findAllCourses = () =>
    fetch('http://localhost:8080/api/courses')
      .then(response => response.json())


  findCourseById = id =>
    fetch(`http://localhost:8080/api/courses/${id}`)
      .then(response => response.json())
}
