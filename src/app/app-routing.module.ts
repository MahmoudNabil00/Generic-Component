import { PageOneComponent } from './page-one/page-one.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path:'page-one' , component:PageOneComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
