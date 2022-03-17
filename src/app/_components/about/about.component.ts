import { Component, OnInit } from '@angular/core';
import { VisibilityService } from 'src/app/_services/visibility.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public visibility: VisibilityService) { }

  ngOnInit(): void {
    this.visibility.showNavbar();
  }

}
