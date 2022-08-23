import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Animations } from '../../animations/animations';
import { SelectorData } from '../pipes/models';

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
    { tool: "Heroku", key: "t", isActive: false },
    { tool: "Css", key: "fe", isActive: false },
    { tool: "C#", key: "be", isActive: false },
    { tool: "Type Script", key: "fe", isActive: false },
    { tool: "Firebase", key: "t", isActive: false },
    { tool: "HTML", key: "fe", isActive: false },
    { tool: "Ado.Net", key: "be", isActive: false },
    { tool: "MS SQL", key: "be", isActive: false },
    { tool: "Git CLI", key: "t", isActive: false },
    { tool: "Angular", key: "fe", isActive: false },
    { tool: "Sass", key: "t", isActive: false },
    { tool: "Sql Server Managment Studio", key: "t", isActive: false },
    { tool: "Java Script", key: "fe", isActive: false },
    { tool: "JWT", key: "t", isActive: false },
    { tool: "API", key: "t", isActive: false },
    { tool: "Postman", key: "t", isActive: false },
    { tool: "ASP.Net Core MVC/Api", key: "be", isActive: false },
    { tool: "Sass", key: "fe", isActive: false },
    { tool: "Entity Framework Core", key: "be", isActive: false },
    { tool: "IIS", key: "t", isActive: false },
  ]
  constructor() {
   }

  ngOnInit(): void {
  }

}
