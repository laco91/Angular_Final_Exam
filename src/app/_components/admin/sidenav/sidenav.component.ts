import { Component, OnInit } from '@angular/core';
import { VisibilityService } from 'src/app/_services/service_collector';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  collapsed!: boolean;

  constructor(public visibility: VisibilityService) { }

  ngOnInit(): void {
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

}