import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeFormComponent } from './home/home-form/home-form.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { PricesListComponent } from './prices-list/prices-list.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { TestimonyListComponent } from './testimony-list/testimony-list.component';
import { AboutHeaderComponent } from './about/about-header/about-header.component';
import { AboutContentComponent } from './about/about-content/about-content.component';
import { DoctorsHeaderComponent } from './doctors/doctors-header/doctors-header.component';
import { ServicesHeaderComponent } from './services/services-header/services-header.component';
import { ContactHeaderComponent } from './contact/contact-header/contact-header.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ReadMorePipe } from './read-more.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animationState: '' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animationState: 'about' }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: { animationState: 'services' }
  },
  {
    path: 'doctors',
    component: DoctorsComponent,
    data: { animationState: 'doctors' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animationState: 'contact' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    DoctorsComponent,
    ContactComponent,
    HomeHeaderComponent,
    HomeFormComponent,
    DoctorsListComponent,
    PricesListComponent,
    ServicesListComponent,
    TestimonyListComponent,
    AboutHeaderComponent,
    AboutContentComponent,
    DoctorsHeaderComponent,
    ServicesHeaderComponent,
    ContactHeaderComponent,
    ContactFormComponent,
    ReadMorePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
