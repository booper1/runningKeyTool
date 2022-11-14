import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Global } from './global';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { path: '', component: HomeComponent, title: Global.author + "'s Homepage" },
    { path: 'about', component: AboutComponent, title: "About " + Global.author },
    { path: 'projects', component: ProjectsComponent, title: Global.author + "'s Projects" },
    { path: 'contact', component: ContactComponent, title: "Contact " + Global.author },
    { path: 'home', redirectTo: '' },
    { path: '#', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
