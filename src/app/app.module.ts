import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GenericComponent } from './generic/generic.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    GenericComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent
  ],
  imports: [
    BrowserModule , RouterModule ,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
