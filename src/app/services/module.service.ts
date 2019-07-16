import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class ModuleService {

  constructor() { }

  findModulesForCourse = courseId =>
    fetch(`https://thawing-plateau-31351.herokuapp.com/api/courses/${courseId}/modules`)
      .then(response => response.json())

  findModuleById = moduleId =>
    fetch(`https://thawing-plateau-31351.herokuapp.com/api/modules/${moduleId}`)
      .then(response => response.json())
}
