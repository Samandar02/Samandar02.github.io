import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Animations } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[Animations.routerNavigation,Animations.footerAnimation]
})
export class AppComponent {
  ngOnInit(){
    
  }
  getState(outlet:any) {
    // Changing the activatedRouteData.state triggers the animation
    return outlet.activatedRouteData.state;
    
  }
}
