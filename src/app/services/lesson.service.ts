import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class LessonService {

  constructor() { }

  findLessonsForModule = moduleId =>
    fetch(`https://thawing-plateau-31351.herokuapp.com/api/modules/${moduleId}/lessons`)
      .then(response => response.json())

  findLessonById = lessonId =>
    fetch(`https://thawing-plateau-31351.herokuapp.com/api/lessons/${lessonId}`)
      .then(response => response.json())
}
