import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { MyworksComponent } from './myworks/myworks.component';
import { SelectorComponent } from './selector/selector.component';
import { SeparatePipe } from './pipes/separate.pipe';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AboutMeComponent,
    ContactComponent,
    MyworksComponent,
    SelectorComponent,
    SeparatePipe,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ComponentsModule { }
