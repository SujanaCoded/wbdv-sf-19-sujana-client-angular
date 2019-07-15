import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import WidgetService from '../services/WidgetServiceClient';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private router: ActivatedRoute,
              private service: WidgetService) { }

  courseId = '';
  moduleId = '';
  lessonId = '';
  topicId = '';
  widgets = [];

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.courseId = params.cid;
      this.moduleId = params.mid;
      this.lessonId = params.lid;
      this.topicId = params.tid;
      this.service.findWidgetsForTopic(this.topicId)
        .then(widgets => this.widgets = widgets);
    });
  }

}
