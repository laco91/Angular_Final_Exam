import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookingComponent, ContactComponent,
         GalleryComponent, MenuComponent,
         NavbarComponent, HomeComponent,
         DashboardComponent, GalleryPanelComponent,
         MenuPanelComponent, SidenavComponent} from './_components/component_collector';
         
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    GalleryComponent,
    BookingComponent,
    ContactComponent,
    HomeComponent,
    MenuPanelComponent,
    GalleryPanelComponent,
    DashboardComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
