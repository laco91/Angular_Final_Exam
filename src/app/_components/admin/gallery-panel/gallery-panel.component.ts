import { Component, OnInit } from '@angular/core';
import { VisibilityService } from 'src/app/_services/service_collector';

@Component({
  selector: 'app-gallery-panel',
  templateUrl: './gallery-panel.component.html',
  styleUrls: ['./gallery-panel.component.css']
})
export class GalleryPanelComponent implements OnInit {

  constructor(public visibility: VisibilityService) { }

  ngOnInit(): void {
    this.visibility.hideNavbar();
    this.visibility.showSidebar();
  }

}