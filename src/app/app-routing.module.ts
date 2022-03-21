import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent, HomeComponent, ContactComponent,
         GalleryComponent, MenuComponent, DashboardComponent,
         MenuPanelComponent, GalleryPanelComponent, AboutComponent,
         LoginComponent, RegisterComponent, ProfileComponent}
         from './_components/component_collector';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/menu-panel', component: MenuPanelComponent },
  { path: 'admin/gallery-panel', component: GalleryPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
