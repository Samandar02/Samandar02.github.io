import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Animations } from '../animations/animations';
import { SelectorData } from '../models';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  animations: [
    trigger("onActive", [
      state('false', style(
        {
          opacity: 1
        })),
      state('false', style(
        {
          opacity: 0.5
        })),
      transition('* => *', [
        animate('0.5s', style({ opacity: 1 }))
      ]),
    ])
  ]
})
export class SelectorComponent implements OnInit {

  constructor() { }
  selected: string = '';
  data: SelectorData[] = [
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
  ngOnInit(): void {
  }
  select(ref: "be" | "fe" | "t") {
    this.selected = ref;
  }

}
