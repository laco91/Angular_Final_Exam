import { Component, OnInit } from '@angular/core';
import { VisibilityService } from 'src/app/_services/service_collector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public visibility: VisibilityService) { }

  ngOnInit(): void {
    this.visibility.hideNavbar();
    this.visibility.showSidebar();
  }

}
