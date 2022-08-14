import { Component, HostListener, OnInit } from '@angular/core';
import { Animations } from '../animations/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations:[Animations.navbarTrigger],
})
export class NavbarComponent implements OnInit {

  constructor() {
   }
   toggle(){
    document.querySelector('.nav-items')?.classList.toggle('show')
   }
  ngOnInit(): void {
  }

}
