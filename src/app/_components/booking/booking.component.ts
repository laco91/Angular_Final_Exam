import { Component, OnInit } from '@angular/core';
import { VisibilityService } from 'src/app/_services/service_collector';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {

  constructor(public visibility: VisibilityService) { }

  ngOnInit(): void {
    this.visibility.showNavbar();
    this.visibility.hideSidebar();
  }

}