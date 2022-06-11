import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
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
  @Input() data: SelectorData[] = []
  ngOnInit(): void {
  }
  select(ref: "be" | "fe" | "t") {
    this.selected = ref;
  }

}
