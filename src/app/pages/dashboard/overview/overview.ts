import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-overview',
  imports: [RouterLink],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class DashboardOverview implements OnInit {
  stats = {
    totalProjects: 0,
    totalArticles: 0,
    unreadMessages: 0,
  }
  constructor(private projectService: ProjectService){}

  ngOnInit(): void {
    
    this.projectService.getAllProjects().subscribe({
      next:(projects:any)=>{
        this.stats.totalProjects = projects.length;
      }
    })
  }

}
