import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admincomponents/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './admincomponents/header/header.component';
import { FooterComponent } from './admincomponents/footer/footer.component';
import { HomeComponent } from './admincomponents/home/home.component';
import { AboutComponent } from './admincomponents/about/about.component';
import { ContactComponent } from './admincomponents/contact/contact.component';
import { ServicesComponent } from './admincomponents/services/services.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
