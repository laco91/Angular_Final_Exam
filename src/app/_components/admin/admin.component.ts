import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/_services/navbar.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.hide();
  }

}
