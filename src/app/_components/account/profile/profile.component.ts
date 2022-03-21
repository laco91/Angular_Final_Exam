import { Component, OnInit } from '@angular/core';
import { AuthService, VisibilityService } from 'src/app/_services/service_collector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public visibility: VisibilityService,
              public authService: AuthService) { }

  ngOnInit(): void {
    this.visibility.showNavbar();
  }

}