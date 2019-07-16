import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class CourseService {

  constructor() { }

  findAllCourses = () =>
    fetch('https://thawing-plateau-31351.herokuapp.com/api/courses')
      .then(response => response.json())


  findCourseById = id =>
    fetch(`https://thawing-plateau-31351.herokuapp.com/api/courses/${id}`)
      .then(response => response.json())
}
