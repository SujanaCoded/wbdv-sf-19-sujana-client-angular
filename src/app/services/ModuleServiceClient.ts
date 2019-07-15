import {Injectable} from '@angular/core';

@Injectable()
export default class ModuleServiceClient {

  findModulesForCourse = courseId =>
    fetch(`http://localhost:8080/api/courses/${courseId}/modules`)
      .then(response => response.json())

  findModuleById = moduleId =>
    fetch(`http://localhost:8080/api/modules/${moduleId}`)
      .then(response => response.json())
}
