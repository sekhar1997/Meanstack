import { CommonModule } from '@angular/common';
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
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgChartjsModule } from 'ng-chartjs';

@NgModule({
  declarations: [AppComponent, InvoiceBuilderComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    InvoiceBuilderModule,
    AddUserModule,
    FlexLayoutModule,
    NgChartjsModule,
  ],
  exports: [ReactiveFormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
