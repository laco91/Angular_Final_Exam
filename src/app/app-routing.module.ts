import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent, CarouselComponent, ContactComponent,
         GalleryComponent, MenuComponent } from './_components/component_collector';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CarouselComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
