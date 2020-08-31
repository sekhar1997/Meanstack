import { Users } from './../../invoice-builder/models/users';
import { Router, ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/invoice-builder/services/userservice.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  private user: Users;
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserserviceService,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.setForm();
  }
  private createForm() {
    this.userForm = this.fb.group({
      name: '',
      email: '',
      phone: '',
    });
  }
  onSubmit() {
    if (this.user) {
      this.userService.updateUser(this.user._id, this.userForm.value).subscribe(
        (data) => {
          console.log(data);
          this.snackBar.open('User updated Successfully', 'Success', {
            duration: 2000,
          });
          this.userForm.reset();
          this.router.navigate(['invoice-builder', 'users']);
        },
        (err) => console.log(err)
      );
    } else {
      this.userService.createUser(this.userForm.value).subscribe(
        (data) => {
          this.snackBar.open('User created Successfully', 'Success', {
            duration: 2000,
          });
          this.userForm.reset();
          this.router.navigate(['invoice-builder', 'users']);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  private setForm() {
    this.route.params.subscribe((param) => {
      let id = param['id'];
      if (!id) {
        return;
      }
      this.userService.getUserById(id).subscribe(
        (users) => {
          this.user = users;
          this.userForm.patchValue(this.user);
        },
        (error) => console.log(error)
      );
    });
  }
}
