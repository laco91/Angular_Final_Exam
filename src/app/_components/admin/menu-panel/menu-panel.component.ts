import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Menu } from 'src/app/_models/model_collector';
import { MenuService, VisibilityService } from 'src/app/_services/service_collector';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.css']
})
export class MenuPanelComponent implements OnInit {

  productForm!: FormGroup;
  drink!: Menu;

  drinks: Menu[] = [];
  mainDishes: Menu[] = [];
  sushi: Menu[] = [];
  desserts: Menu[] = [];

  constructor(public visibility: VisibilityService,
              private menuService: MenuService,
              private fb: FormBuilder,
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.visibility.hideNavbar();
    this.visibility.showSidebar();
    this.getDrinks();
    this.getMainDishes();
    this.getSushi();
    this.getDesserts();
    this.createProductForm();
    // this.getDrinkById();
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

  // Product Form
  createProductForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  // Add New Product
  addNewDrink() {
    let obj: Menu = {
      name: this.productForm.value.name,
      price: this.productForm.value.price
    }
    this.menuService.addDrink(obj).subscribe(() => {
      this.getDrinks();
    });
    this.productForm.reset();
  }

  addNewMainDish() {
    let obj: Menu = {
      name: this.productForm.value.name,
      price: this.productForm.value.price
    }
    this.menuService.addMainDish(obj).subscribe(() => {
      this.getMainDishes();
    });
    this.productForm.reset();
  }

  addNewSushi() {
    let obj: Menu = {
      name: this.productForm.value.name,
      price: this.productForm.value.price
    }
    this.menuService.addSushi(obj).subscribe(() => {
      this.getSushi();
    });
    this.productForm.reset();
  }

  addNewDessert() {
    let obj: Menu = {
      name: this.productForm.value.name,
      price: this.productForm.value.price
    }
    this.menuService.addDessert(obj).subscribe(() => {
      this.getDesserts();
    });
    this.productForm.reset();
  }

  // Update Product
  updateThisDrink() {
    let obj: Menu = {
      name: this.productForm.value.name,
      price: this.productForm.value.price
    }
    console.log(obj);
    // this.menuService.updateDrink(obj, obj.id).subscribe(() => {
    //   this.getDrinks();
    // });
    // this.productForm.reset();
  }

  // Edit Product
  editThisDrink(product: any): void {
    this.productForm.controls['name'].setValue(product.name);
    this.productForm.controls['price'].setValue(product.price);
    console.log(product);
  }
  // Delete Product
  deleteThisDrink(data: any): void  {
    confirm('Are you sure?') ?
    this.menuService.deleteDrink(data.id).subscribe(() => 
      this.getDrinks()) : '';
  }

}