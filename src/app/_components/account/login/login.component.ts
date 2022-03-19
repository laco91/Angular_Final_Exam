import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/model_collector';
import { VisibilityService } from 'src/app/_services/visibility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: User;

  constructor(public visibility: VisibilityService) { }

  ngOnInit(): void {
    this.visibility.hideNavbar();
  }

}
