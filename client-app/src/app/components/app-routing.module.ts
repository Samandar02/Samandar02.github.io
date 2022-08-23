import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { MyworksComponent } from './myworks/myworks.component';

const routes: Routes = [
  {path:'',component:AboutMeComponent,data:{state:''}},
  {path:'myworks',component:MyworksComponent,data:{state:'myworks'}},
  {path:'contact',component:ContactComponent,data:{state:'contact'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
