import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class WidgetService {

  constructor() { }

  findWidgetsForTopic = topicId =>
    fetch(`https://thawing-plateau-31351.herokuapp.com/api/topics/${topicId}/widgets`)
      .then(response => response.json())

  findWidgetById = widgetId =>
    fetch(`https://thawing-plateau-31351.herokuapp.com/api/widgets/${widgetId}`)
      .then(response => response.json())
}
