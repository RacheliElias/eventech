import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { OneStepComponent } from './order-steps/one-step/one-step.component';
import { TwoStepComponent } from './order-steps/two-step/two-step.component';
import { ThreeStepComponent } from './order-steps/three-step/three-step.component';
import { OrderStepsComponent } from './order-steps/order-steps.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'gallery',
    component:GalleryPageComponent
  },
  {
    path:'about',
    component:AboutPageComponent
  },
  {
    path:'menu',
    component:MenuPageComponent
  },
  {
    path:'orderSteps',
    component:LoginComponent
  },
    // {
    //  path:'',
    //  component:OneStepComponent
    // },
    {
      path:'step1',
      component:OneStepComponent
     },
     {
      path:'step2',
      component:TwoStepComponent
     },
     {
      path:'step3',
      component:ThreeStepComponent
     },
     {
      path:'signUp',
      component:SignUpComponent 
     },
    {
      path:'personalArea',
      component:PersonalAreaComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
