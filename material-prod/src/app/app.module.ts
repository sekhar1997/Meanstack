import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddUserModule } from './add-user/add-user.module';
import { InvoiceBuilderModule } from './invoice-builder/invoice-builder.module';
import { MaterialModule } from './shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceBuilderComponent } from './invoice-builder/invoice-builder.component';
@NgModule({
  declarations: [AppComponent, InvoiceBuilderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    InvoiceBuilderModule,
    AddUserModule,
  ],
  exports: [ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
