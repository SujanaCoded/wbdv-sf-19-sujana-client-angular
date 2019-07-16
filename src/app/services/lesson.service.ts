import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class LessonService {

  constructor() { }

  findLessonsForModule = moduleId =>
    fetch(`http://localhost:8080/api/modules/${moduleId}/lessons`)
      .then(response => response.json())

  findLessonById = lessonId =>
    fetch(`http://localhost:8080/api/lessons/${lessonId}`)
      .then(response => response.json())
}
