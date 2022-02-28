import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisibilityService } from 'src/app/_services/service_collector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isClicked!: boolean;

  constructor(public visibility: VisibilityService,
              private router: Router,
              private location: Location) { }

  ngOnInit(): void {
  }

  // Navigation between admin site and previous page
  navigateTo() {
    this.isClicked = !this.isClicked;
    if (this.isClicked){
      this.router.navigate(['/admin/dashboard']);
    } else {
      this.router.navigate(['/']);
    }
  }
}