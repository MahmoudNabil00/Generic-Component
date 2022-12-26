import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';
import { PageOneComponent } from './page-one/page-one.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';

const routes: Routes = [
  {path:'page-one' , component:PageOneComponent},
  {path:'page-two' , component:PageTwoComponent},
  {path:'page-three' , component:PageThreeComponent},
  {path:'dynamic-template' , component:DynamicTemplateComponent},
  {path:'' , redirectTo : 'dynamic-template', pathMatch:'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
