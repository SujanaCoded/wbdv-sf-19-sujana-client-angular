import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class TopicService {

  constructor() { }


  findTopicsForLesson = lessonId =>
    fetch(`https://thawing-plateau-31351.herokuapp.com/api/lessons/${lessonId}/topics`)
      .then(response => response.json())

  findTopicById = topicId =>
    fetch(`https://thawing-plateau-31351.herokuapp.com/api/topics/${topicId}`)
      .then(response => response.json())
}
