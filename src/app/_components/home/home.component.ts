import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/_services/navbar.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}