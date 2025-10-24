import { Component, input } from '@angular/core';
import { TextRenderer } from '../../directives/text-renderer';

@Component({
  selector: 'app-experience',
  imports: [TextRenderer],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  showTimeline = input(true)
  experience = input.required<{
    companyIcon:string,
    company: string,
    role: string,
    period: string,
    desc: string
  }>()
}
