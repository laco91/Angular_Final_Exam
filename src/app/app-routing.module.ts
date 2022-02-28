import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent, HomeComponent, ContactComponent,
         GalleryComponent, MenuComponent, DashboardComponent,
         MenuPanelComponent, GalleryPanelComponent} from './_components/component_collector';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/menu-panel', component: MenuPanelComponent },
  { path: 'admin/gallery-panel', component: GalleryPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
