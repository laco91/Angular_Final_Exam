import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/_models/menu';
import { MenuService } from 'src/app/_services/service_collector';
import { VisibilityService } from 'src/app/_services/service_collector';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  drinks: Menu[] = [];
  mainDishes: Menu[] = [];
  sushi: Menu[] = [];
  desserts: Menu[] = [];

  constructor(public visibility: VisibilityService,
              private menuService: MenuService
              ) { }

  ngOnInit(): void {
    this.visibility.showNavbar();
    this.visibility.hideSidebar();
    this.getDrinks();
    this.getMainDishes();
    this.getSushi();
    this.getDesserts();
  }

  getDrinks() {
    this.menuService.getAllDrinks()
      .subscribe(data => this.drinks = data);
  }

  getMainDishes() {
    this.menuService.getAllMainDishes()
      .subscribe(data => this.mainDishes = data);
  }

  getSushi() {
    this.menuService.getAllSushi()
      .subscribe(data => this.sushi = data);
  }

  getDesserts() {
    this.menuService.getAllDeserts()
      .subscribe(data => this.desserts = data);
  }

}