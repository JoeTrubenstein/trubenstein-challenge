import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InboxComponent } from './inbox/inbox.component';
import { ProfileComponent } from './profile/profile.component';
import { ShopComponent } from './shop/shop.component';

// register routes here //
const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'inbox', component: InboxComponent},
  {path:'shop', component: ShopComponent},
  {path:'', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// consolidate routes in an array to avoid duplicate import statements in app module
export const routingComponents = [ProfileComponent, InboxComponent, ShopComponent, HomeComponent ]
