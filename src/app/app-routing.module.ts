import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Global } from './global';

const routes: Routes = [
    { path: '', component: HomeComponent, title: "Running Key Tool" },
    { path: 'home', redirectTo: '' },
    { path: '#', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
