import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { HeaderComponent } from './header/header.component';
import { MyMaterialModule } from './sherd/modules/my-material/my-material.module';
import { MyPrimengModule } from './sherd/modules/my-primeng/my-primeng.module';
import { OrderStepsComponent } from './order-steps/order-steps.component';
import { OneStepComponent } from './order-steps/one-step/one-step.component';
import { TwoStepComponent } from './order-steps/two-step/two-step.component';
import { ThreeStepComponent } from './order-steps/three-step/three-step.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  HomePageComponent,
  GalleryPageComponent,
  MenuPageComponent,
  AboutPageComponent,
  OrderStepsComponent,
  OneStepComponent,
  TwoStepComponent,
  ThreeStepComponent,
  LoginComponent,
  SignUpComponent,
  PersonalAreaComponent

  ],
  imports: [
    AppRoutingModule,
    MyMaterialModule,
    MyPrimengModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
