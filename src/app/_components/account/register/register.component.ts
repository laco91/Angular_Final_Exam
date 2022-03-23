import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/service_collector';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user!: User;
  users!: User[];

  firstName!: string;
  lastName!: string;
  email!: string;
  password1!: string;
  password2!: string;
  access: string = 'user';
  token: string = '';
  match: boolean = false;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  onRegister() {
    this.getUsers();
    this.users.forEach(user => {
      if (this.firstName === user.firstName && this.lastName === user.lastName && this.email === user.email){
        this.match = true;
        alert('This First Name, Last Name and Email is already taken!');
      } else if (this.firstName === user.firstName && this.lastName === user.lastName){
        this.match = true;
        alert('This First Name and Last Name is already taken!');
      } else if (this.firstName === user.firstName && this.email === user.email){
        this.match = true;
        alert('This First Name and Email is already taken!');
      } else if (this.lastName === user.lastName && this.email === user.email){
        this.match = true;
        alert('This Last Name and Email is already taken!');
      } else if (this.firstName === user.firstName){
        this.match = true;
        alert('This First Name is already taken!');
      } else if (this.lastName === user.lastName){
        this.match = true;
        alert('This Last Name is already taken!');
      } else if (this.email === user.email){
        this.match = true;
        alert('This Email is already taken!');
      }
    });
    if (!this.match){
      if (this.password1 !== this.password2){
        alert('The passwords do not match!');
      } else {
        let obj: User = {
          token: this.token,
          access: this.access,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password1
        }
        this.userService.addUser(obj).subscribe(() => {
          this.userService.getAllUsers();
        });
        alert('User successfully registered. Now you can login!')
        this.router.navigate(['/login']);
      }
    }
  }

  getUsers() {
    this.userService.getAllUsers()
    .subscribe(data => this.users = data);
  }

}