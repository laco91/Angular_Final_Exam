/* =========
    Modules
   ========= */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* ============
    Components
   ============ */
import { AppComponent } from './app.component';
import { BookingComponent, ContactComponent,
         GalleryComponent, MenuComponent,
         NavbarComponent, HomeComponent,
         DashboardComponent, GalleryPanelComponent,
         MenuPanelComponent, SidenavComponent,
         AboutComponent, LoginComponent,
         RegisterComponent} from './_components/component_collector';
import { ProfileComponent } from './_components/account/profile/profile.component';
   
         
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
    SidenavComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
