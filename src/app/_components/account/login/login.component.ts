import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/model_collector';
import { AuthService, UserService } from 'src/app/_services/service_collector';
import { VisibilityService } from 'src/app/_services/visibility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: User;
  email: string = '';
  password: string = '';
  match: boolean = false;

  constructor(public visibility: VisibilityService,
              public authService: AuthService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.visibility.hideNavbar();
  }

  onLogin() {
    this.userService.getAllUsers().subscribe(users => {
      if (users.length) {
        users.forEach(user => {
          if (user.email === this.email && user.password === this.password) {
            this.match = true;
            this.user = user;
            return;
          }
        });
        if (this.match) {
          this.user.token = "logged";
          localStorage.setItem('user', JSON.stringify(this.user));
          this.router.navigate(['/home']);
          this.authService.getUserFirstName();
          console.log('Logged in: ' + JSON.stringify(this.user));
        } else {
          alert('Wrong username or password!');
        }
      }
    });
  }
}