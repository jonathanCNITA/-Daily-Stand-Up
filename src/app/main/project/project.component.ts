import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../shared/api.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input()
  project: any;

  @Output()
  projectDeleted = new EventEmitter<string>();
  // imgCreator = this.project.creator.picture;
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
  }

  deleteProject() {
    this.apiservice.deleteProject(this.project.id).subscribe(res => {
      console.log(res);
      this.projectDeleted.emit(this.project.id);
    });
  }
}
