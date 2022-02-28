import { Component, OnInit } from '@angular/core';
import { VisibilityService } from 'src/app/_services/visibility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(public visibility: VisibilityService) { }

  ngOnInit(): void {
    this.visibility.showNavbar();
    this.visibility.hideSidebar();
  }

}