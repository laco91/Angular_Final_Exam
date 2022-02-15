import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BookingComponent, ContactComponent,
         GalleryComponent, MenuComponent,
         NavBarComponent, CarouselComponent } from './_components/component_collector';
         
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuComponent,
    GalleryComponent,
    BookingComponent,
    ContactComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
