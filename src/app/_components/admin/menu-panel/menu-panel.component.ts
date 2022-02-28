import { Component, OnInit } from '@angular/core';
import { VisibilityService } from 'src/app/_services/service_collector';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.css']
})
export class MenuPanelComponent implements OnInit {

  constructor(public visibility: VisibilityService) { }

  ngOnInit(): void {
    this.visibility.hideNavbar();
    this.visibility.showSidebar();
  }

}