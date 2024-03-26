import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { NavebarBackComponent } from './BackOffice/navebar-back/navebar-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { AddTutorialComponent } from './BackOffice/add-tutorial/add-tutorial.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewTutorialComponent } from './BackOffice/view-tutorial/view-tutorial.component';
import { UpdateTutorialComponent } from './BackOffice/update-tutorial/update-tutorial.component';
import { ViewTutorialFrontComponent } from './FrontOffice/view-tutorial-front/view-tutorial-front.component';
import { FormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,
    AllTemplateBackComponent,
    SidebarBackComponent,
    NavebarBackComponent,
    AllTemplateFrontComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    HomeFrontComponent,
    AddTutorialComponent,
    ViewTutorialComponent,
    UpdateTutorialComponent,
    ViewTutorialFrontComponent,
 
   
  
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
