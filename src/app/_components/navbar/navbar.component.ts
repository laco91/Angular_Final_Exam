import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/model_collector';
import { AuthService, VisibilityService } from 'src/app/_services/service_collector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user!: User;

  constructor(public visibility: VisibilityService,
              public authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.authService.getUserFirstName();
  }

  logout() {
      this.user.token = '';
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/home']);
      console.log('Logged out: ' + this.user.firstName + ' ' + JSON.stringify(this.user));
  }

}