import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent, HomeComponent, ContactComponent,
         GalleryComponent, MenuComponent, DashboardComponent,
         MenuPanelComponent, GalleryPanelComponent, AboutComponent,
         LoginComponent, RegisterComponent, ProfileComponent, UsersComponent}
         from './_components/component_collector';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },

  { path: 'admin',
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'menu-panel', component: MenuPanelComponent },
      { path: 'gallery-panel', component: GalleryPanelComponent },
      { path: 'users', component: UsersComponent }
    ]
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }