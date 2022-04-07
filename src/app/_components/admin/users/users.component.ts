import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_models/user';
import { UserService, VisibilityService } from 'src/app/_services/service_collector';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  userForm!: FormGroup;
  modalTitle!: string;
  addUser!: boolean;
  userIdToEdit!: number;

  constructor(public visibility: VisibilityService,
              private userService: UserService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.visibility.hideNavbar();
    this.visibility.showSidebar();
    this.getUsers();
    this.createUserForm();
  }

  // User form
  createUserForm() {
    this.userForm = this.fb.group({
      access: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Read data
  getUsers(): void {
    this.userService.getAllUsers()
      .subscribe(data => this.users = data);
  }

  // Prepare to add or edit
  prepareToAdd() {
    this.modalTitle = 'Add New User';
    this.addUser = true;
    this.userForm.reset();
  }

  prepareToEdit(user: any) {
    this.modalTitle = 'Edit User';
    this.addUser = false;
    this.userForm.controls['access'].setValue(user.access);
    this.userForm.controls['firstName'].setValue(user.firstName);
    this.userForm.controls['lastName'].setValue(user.lastName);
    this.userForm.controls['email'].setValue(user.email);
    this.userForm.controls['password'].setValue(user.password);
    this.userIdToEdit = user.id;
  }

  // Add user
  addNewUser() {
    let obj: User = {
      token: '',
      access: this.userForm.value.access,
      firstName: this.userForm.value.firstName,
      lastName: this.userForm.value.lastName,
      email: this.userForm.value.email,
      password: this.userForm.value.password
    }
    this.userService.addUser(obj).subscribe(() => {
      this.getUsers()
    });
    this.userForm.reset();
  }

  // Edit user
  editUser() {
    let obj: User = {
      token: '',
      access: this.userForm.value.access,
      firstName: this.userForm.value.firstName,
      lastName: this.userForm.value.lastName,
      email: this.userForm.value.email,
      password: this.userForm.value.password
    }

    this.userService.updateUser(obj, this.userIdToEdit).subscribe(() => {
      this.getUsers();
    })
  }

  // Delete user
  deleteUser(user: any) {
    confirm('Are you sure?') ?
    this.userService.deleteThisUser(user.id).subscribe(() => {
      this.getUsers();
    }) : '';
  }

}