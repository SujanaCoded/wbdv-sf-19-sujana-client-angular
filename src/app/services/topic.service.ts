import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class TopicService {

  constructor() { }


  findTopicsForLesson = lessonId =>
    fetch(`http://localhost:8080/api/lessons/${lessonId}/topics`)
      .then(response => response.json())

  findTopicById = topicId =>
    fetch(`http://localhost:8080/api/topics/${topicId}`)
      .then(response => response.json())
}
