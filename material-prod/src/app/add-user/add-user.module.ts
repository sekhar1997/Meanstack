import { ReactiveFormsModule } from '@angular/forms';
import { UserserviceService } from './../invoice-builder/services/userservice.service';
import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  declarations: [AddUserComponent, ListUserComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [AddUserComponent],
  providers: [UserserviceService],
})
export class AddUserModule {}
