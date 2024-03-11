import { Component } from '@angular/core';
import {UsersDataService} from './services/users-data.service';
import { Router } from '@angular/router';
interface User {
  fname: string;
  lname: string;
  age: number | null;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
 

  export class AppComponent {
  
    title = 'umazontest';
    users: any;
    newUser: User = {
      fname: '',
      lname: '',
      age: null
  
    };
    // constructor(private router: Router) {}
    constructor(private userData: UsersDataService, private router: Router) {
      this.refreshUsers();
    }
    
  
 
  addUser() {
    this.userData.addUser(this.newUser).subscribe(
      response => {
        console.log("User added successfully:", response);
        this.refreshUsers(); // Refresh the user list
        this.resetForm();
      },
      error => {
        console.error("Error adding user:", error);
        // Handle errors appropriately
      }
    );
  }
 
  private refreshUsers() {
    this.userData.getUsers().subscribe((data) => {
      console.warn("Users data", data);
      this.users = data;
    });
  }
 
  onSubmit() {
    this.addUser();
  }
 
  private resetForm() {
    this.newUser = {
      fname: '',
      lname: '',
      age: null
    };
  }
  goToProducts() {
    this.router.navigate(['/products']);
  }
}