import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolComponent } from './tool/tool.component';

const routes: Routes = [];

export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
