import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { PerlinNoise } from "./perlin-noise/perlin-noise";
import { Expertise } from "./expertise/expertise";
import { Section } from "./components/section/section";
import { Experience } from "./components/experience/experience";

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, PerlinNoise, Expertise, Section, Experience],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
  experience = [
    {
      companyIcon: 'images/isds.png',
      company: 'Innasoft Digitial Service',
      role: 'Md.Backend Developer',
      period: '2020 SEP - 2020 JAN',
      desc: `+Participate our system integration with MyGov’s several services+Contribute on Integration with 1C, Lorawan+Integration our service with MUNIS payment system via SOAP transport+Feaute implementation of Consumers/Employers cabinet`
    },
    {
      companyIcon: 'images/flexit.jpeg',
      company: 'FLEXIT',
      role: 'Md.Backend Developer',
      period: '2020 SEP - 2020 JAN',
      desc: '+Participating in Startup projects+Integrating one more Bank to our System+Supporting Our Project'
    },
    {
      companyIcon: 'images/flexit.jpeg',
      company: 'FLEXIT',
      role: 'Jr.Backend Developer',
      period: '2020 SEP - 2020 JAN',
      desc: `+Telegram bot for merchants contest and bonus system+Telegram bot for reporting Merchant and Sale statistics+EBP scrapping tool`
    },
    {
      companyIcon: 'images/khm.jpg',
      company: 'Vocational School',
      role: 'System Administrator',
      period: '2020 SEP - 2020 JAN',
      desc: `+Configure Schools Network infrastructure+Understand networkin+Practice with Office Technologies`
    },
    {
      companyIcon: '',
      company: 'Independent Software Engineer',
      role: 'Software Engineer',
      period: '2020 SEP - 2020 JAN',
      desc: `+Configure Schools Network infrastructure+Understand networkin+Practice with Office Technologies`
    },
  ]
  education = {
    companyIcon: 'images/isds.png',
    company: 'National University of Uzbekistan',
    role: 'Information Systems and technologies',
    period: '2020 SEP - 2020 JAN',
    desc: `+Participate our system integration with MyGov’s several services+Contribute on Integration with 1C, Lorawan+Integration our service with MUNIS payment system via SOAP transport+Feaute implementation of Consumers/Employers cabinet`
  }
}
