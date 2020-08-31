import { ListUserComponent } from './../add-user/list-user/list-user.component';
import { AddUserComponent } from './../add-user/add-user/add-user.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { InvoiceBuilderComponent } from './invoice-builder.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: InvoiceBuilderComponent,
    children: [
      { path: '', component: MainContentComponent },
      {
        path: 'addUser',
        component: AddUserComponent,
      },
      {
        path: 'editUser/:id',
        component: AddUserComponent,
      },
      {
        path: 'users',
        component: ListUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceBuilderRoutingModule {}
