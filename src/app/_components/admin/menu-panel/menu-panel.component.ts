import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menu } from 'src/app/_models/model_collector';
import { MenuService, VisibilityService } from 'src/app/_services/service_collector';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.css']
})
export class MenuPanelComponent implements OnInit {

  clicked!: boolean;
  supplyForm!: FormGroup;

  drinks: Menu[] = [];
  mainDishes: Menu[] = [];
  sushi: Menu[] = [];
  desserts: Menu[] = [];

  constructor(public visibility: VisibilityService,
              private menuService: MenuService,
              private fb: FormBuilder
              ) { }

  ngOnInit(): void {
    this.visibility.hideNavbar();
    this.visibility.showSidebar();
    this.getDrinks();
    this.getMainDishes();
    this.getSushi();
    this.getDesserts();
    this.createSupplyForm();
  }

  // Get Datas
  getDrinks(): void {
    this.menuService.getAllDrinks()
      .subscribe(data => this.drinks = data);
  }

  getMainDishes(): void {
    this.menuService.getAllMainDishes()
      .subscribe(data => this.mainDishes = data);
  }

  getSushi(): void {
    this.menuService.getAllSushi()
      .subscribe(data => this.sushi = data);
  }

  getDesserts(): void {
    this.menuService.getAllDeserts()
      .subscribe(data => this.desserts = data);
  }

  // Add New Supply
  createSupplyForm() {
    this.supplyForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  // Submits
  onSubmitDrink() {
    let obj: Menu = {
      name: this.supplyForm.value.name,
      price: this.supplyForm.value.price
    }
    this.menuService.addDrink(obj).subscribe(() => {
      this.getDrinks();
    });
    this.supplyForm.reset();
  }

  onSubmitMainDish() {
    let obj: Menu = {
      name: this.supplyForm.value.name,
      price: this.supplyForm.value.price
    }
    this.menuService.addMainDish(obj).subscribe(() => {
      this.getMainDishes();
    });
    this.supplyForm.reset();
  }

  onSubmitSushi() {
    let obj: Menu = {
      name: this.supplyForm.value.name,
      price: this.supplyForm.value.price
    }
    this.menuService.addSushi(obj).subscribe(() => {
      this.getSushi();
    });
    this.supplyForm.reset();
  }

  onSubmitDessert() {
    let obj: Menu = {
      name: this.supplyForm.value.name,
      price: this.supplyForm.value.price
    }
    this.menuService.addDessert(obj).subscribe(() => {
      this.getDesserts();
    });
    this.supplyForm.reset();
  }

  // Side Functions
  isClicked(): void {
    this.clicked = !this.clicked;
    console.log(this.clicked);
  }

}