import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceBuilderRoutingModule } from './invoice-builder-routing.module';
import { MainContentComponent } from './main-content/main-content.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MainContentComponent, SideNavComponent, ToolbarComponent],
  imports: [
    CommonModule,
    InvoiceBuilderRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [SideNavComponent],
})
export class InvoiceBuilderModule {}
