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

  productForm!: FormGroup;
  drink!: Menu;
  objIdToEdit!: number;
  modalBtnSwap!: boolean;
  modalTitleSwap!: string;

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
    this.createProductForm();
  }

  // Product Form
  createProductForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  //============
  // GET DATAS
  //============
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

  //=================
  // ADD NEW PRODUCT
  //=================
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

  // Edit Product Button
  editProduct(product: any): void {
    this.modalBtnSwap = true;
    this.modalTitleSwap = "Edit Product";
    this.productForm.controls['name'].setValue(product.name);
    this.productForm.controls['price'].setValue(product.price);
    this.objIdToEdit = product.id;
    console.log(this.objIdToEdit);
  }

  // Update Product Button
  addNewProduct() {
    this.modalBtnSwap = false;
    this.modalTitleSwap = "Add New Product";
    this.productForm.reset();
  }

  //================
  // UPDATE PRODUCT
  //================
  updateThisDrink() {
    let obj: Menu = {
      name: this.productForm.value.name,
      price: this.productForm.value.price
    }
    console.log(this.objIdToEdit);
    this.menuService.updateDrink(obj, this.objIdToEdit).subscribe(() => {
      this.getDrinks();
    });
    
  }

  updateThisMainDish() {
    let obj: Menu = {
      name: this.productForm.value.name,
      price: this.productForm.value.price
    }
    console.log(this.objIdToEdit);
    this.menuService.updateMainDish(obj, this.objIdToEdit).subscribe(() => {
      this.getMainDishes();
    });
    
  }

  updateThisSushi() {
    let obj: Menu = {
      name: this.productForm.value.name,
      price: this.productForm.value.price
    }
    console.log(this.objIdToEdit);
    this.menuService.updateSushi(obj, this.objIdToEdit).subscribe(() => {
      this.getSushi();
    });
    
  }

  updateThisDessert() {
    let obj: Menu = {
      name: this.productForm.value.name,
      price: this.productForm.value.price
    }
    console.log(this.objIdToEdit);
    this.menuService.updateDessert(obj, this.objIdToEdit).subscribe(() => {
      this.getDesserts();
    });
    
  }

  //================
  // DELETE PRODUCT
  //================
  deleteThisDrink(data: any): void  {
    confirm('Are you sure?') ?
    this.menuService.deleteDrink(data.id).subscribe(() => 
      this.getDrinks()) : '';
  }

  deleteThisMainDish(data: any): void  {
    confirm('Are you sure?') ?
    this.menuService.deleteMainDish(data.id).subscribe(() => 
      this.getMainDishes()) : '';
  }

  deleteThisSushi(data: any): void  {
    confirm('Are you sure?') ?
    this.menuService.deleteSushi(data.id).subscribe(() => 
      this.getSushi()) : '';
  }

  deleteThisDessert(data: any): void  {
    confirm('Are you sure?') ?
    this.menuService.deleteDessert(data.id).subscribe(() => 
      this.getDesserts()) : '';
  }

}