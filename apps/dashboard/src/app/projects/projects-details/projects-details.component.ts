import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@dashboard/core-data';
import { Form } from '@angular/forms';

@Component({
  selector: 'dashboard-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent {
  currentProject: Project;
  originalTitle;
  @Input() set project(value) {
    if (value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value)
  }
  @Input() form;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

}
