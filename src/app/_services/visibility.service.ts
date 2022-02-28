import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {

  navbarVisible!: boolean;
  sidenavVisible!: boolean;

  constructor() { }

  hideNavbar() {
    this.navbarVisible = false;
  }
  
  showNavbar() {
    this.navbarVisible = true;
  }

  hideSidebar() {
    this.sidenavVisible = false;
  }

  showSidebar() {
    this.sidenavVisible = true;
  }
}
