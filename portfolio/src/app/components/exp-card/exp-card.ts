import { Component, input } from '@angular/core';

@Component({
  selector: 'app-exp-card',
  imports: [],
  templateUrl: './exp-card.html',
  styleUrl: './exp-card.css'
})
export class ExpCard {
  expertise = input.required<{ title: string, chips: string[] }>()
}
