import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/_models/model_collector';
import { MenuService, VisibilityService } from 'src/app/_services/service_collector';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.css']
})
export class MenuPanelComponent implements OnInit {

  clicked! : boolean;

  drinks: Menu[] = [];
  mainDishes: Menu[] = [];
  sushi: Menu[] = [];
  desserts: Menu[] = [];

  constructor(public visibility: VisibilityService,
              private menuService: MenuService
              ) { }

  ngOnInit(): void {
    this.visibility.hideNavbar();
    this.visibility.showSidebar();
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

  isClicked() {
    this.clicked = !this.clicked;
    console.log(this.clicked);
  }

}