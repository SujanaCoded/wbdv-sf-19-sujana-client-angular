import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class WidgetService {

  constructor() { }

  findWidgetsForTopic = topicId =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
      .then(response => response.json())

  findWidgetById = widgetId =>
    fetch(`http://localhost:8080/api/widgets/${widgetId}`)
      .then(response => response.json())
}
