import { Component, OnInit } from '@angular/core';
import { VisibilityService } from 'src/app/_services/service_collector';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public visibility: VisibilityService) { }

  ngOnInit(): void {
    this.visibility.showNavbar();
    this.visibility.hideSidebar();
  }

}