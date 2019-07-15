import {Injectable} from '@angular/core';

@Injectable()
export default class CourseServiceClient {
  findAllCourses = () =>
    fetch('http://localhost:8080/api/courses')
      .then(response => response.json())


  findCourseById = id =>
    fetch(`http://localhost:8080/api/courses/${id}`)
      .then(response => response.json())
}
