import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Animations } from '../animations/animations';
import { SelectorData } from '../models';

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
  myToolsAndLanguages:SelectorData[] = [
    { tool: "Css", key: "fe", isActive: false },
    { tool: "C#", key: "be", isActive: false },
    { tool: "Type Script", key: "fe", isActive: false },
    { tool: "HTML", key: "fe", isActive: false },
    { tool: "Ado.Net", key: "be", isActive: false },
    { tool: "MS SQL", key: "be", isActive: false },
    { tool: "Git", key: "t", isActive: false },
    { tool: ".Net Core MVC", key: "be", isActive: false },
    { tool: "Angular", key: "fe", isActive: false },
    { tool: "Sass", key: "t", isActive: false },
    { tool: "Sql Server Managment Studio", key: "t", isActive: false },
    { tool: "Java Script", key: "fe", isActive: false },
    { tool: "JWT", key: "t", isActive: false },
    { tool: "API", key: "t", isActive: false },
    { tool: "JSON", key: "t", isActive: false },
    { tool: ".Net Core Api", key: "be", isActive: false },
    { tool: "Sass", key: "fe", isActive: false },
    { tool: "Entity Framework Core", key: "be", isActive: false },
    { tool: "IIS Express", key: "t", isActive: false },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
