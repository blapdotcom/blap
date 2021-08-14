import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { HomeComponent } from './modules/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NotFoundComponent,
      AboutComponent,
      ContactComponent,
      NavbarComponent,
      FooterComponent
   ],
   imports: [
      AppRouting,
      BrowserModule,
      BrowserAnimationsModule,
      FontAwesomeModule,

      MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule,
      MatTooltipModule,
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
