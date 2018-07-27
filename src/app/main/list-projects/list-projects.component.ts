import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {

  allProjects: any;

  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice.getDatas$().subscribe(data => this.allProjects = data);
  }

  isLogged(): boolean {
    return this.apiservice.logged;
  }

  reGetDatas(id: string) {
    const matched = this.allProjects.find(project => project.id === id);
    this.allProjects.splice(this.allProjects.indexOf(matched), 1);
    // -- Update datas with a new request --
    // this.apiservice.getDatas$().subscribe(data => this.allProjects = data);
  }

}
