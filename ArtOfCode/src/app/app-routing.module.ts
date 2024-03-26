import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { ViewTutorialFrontComponent } from './FrontOffice/view-tutorial-front/view-tutorial-front.component';

import { AddTutorialComponent } from './BackOffice/add-tutorial/add-tutorial.component';
import { ViewTutorialComponent } from './BackOffice/view-tutorial/view-tutorial.component';
import { UpdateTutorialComponent } from './BackOffice/update-tutorial/update-tutorial.component';



const routes: Routes = [
 
{
  path:"",
  component:AllTemplateFrontComponent

},
{path:"view-tutorial-front" , component:ViewTutorialFrontComponent},
{ path: 'view-tutorial', component: ViewTutorialComponent },
{
  path:"admin",
  component:AllTemplateBackComponent,
  children:[
   
    {path: 'view-tutorial',
    component:ViewTutorialComponent},
    {path:"view-tutorial/add-tutorial",component:AddTutorialComponent},
    {path:'update-tutorial/:id',
    component:UpdateTutorialComponent},
    
  ]

}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }