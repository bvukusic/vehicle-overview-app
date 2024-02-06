import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleService } from './core/vehicle/vehicle.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { VehicleOverviewComponent } from './vehicle-overview/vehicle-overview.component';
import { VehicleNameFormatPipe } from './vehicle-name-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    VehicleOverviewComponent,
    VehicleNameFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TableModule,
    InputTextModule,
    ToolbarModule,
    ButtonModule,
    CardModule
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent],
})
export class AppModule { }
