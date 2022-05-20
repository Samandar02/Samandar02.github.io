import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Animations } from '../animations/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  // animations:[
  //   trigger('onPopUp', [
  //     transition("void => *", [
  //         style({opacity: 0 }),
  //         animate('5s ease-in-out', style({ opacity: 1 }))
  //     ])
  // ])
  // ]
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
