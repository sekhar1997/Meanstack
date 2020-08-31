import { Users } from './../../invoice-builder/models/users';
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/invoice-builder/services/userservice.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  constructor(
    private userService: UserserviceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  displayedColumns: string[] = ['name', 'email', 'phone', 'action'];
  dataSource: Users[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.dataSource = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  addUser() {
    this.router.navigate(['invoice-builder', 'addUser']);
  }
  deleteUser(id) {
    this.userService.deleteUser(id).subscribe(
      (data) => {
        this.snackBar.open('User Deleted Successfully', 'Success', {
          duration: 2000,
        });
        this.dataSource = this.dataSource;
        location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  editUser(id) {
    console.log(id);
    this.router.navigate(['invoice-builder', 'editUser', id]);
  }
}
