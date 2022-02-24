import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/_models/menu';
import { MenuService } from 'src/app/_services/service_collector';

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

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.getDrink();
    this.getMainDish();
    this.getSushi();
    this.getDessert();
  }

  getDrink() {
    this.menuService.getAllDrink()
      .subscribe(data => this.drinks = data);
  }

  getMainDish() {
    this.menuService.getAllMainDish()
      .subscribe(data => this.mainDishes = data);
  }

  getSushi() {
    this.menuService.getAllSushi()
      .subscribe(data => this.sushi = data);
  }

  getDessert() {
    this.menuService.getAllDesert()
      .subscribe(data => this.desserts = data);
  }

}