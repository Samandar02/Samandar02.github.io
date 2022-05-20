import { Component, OnInit } from '@angular/core';
import { Animations } from '../animations/animations';

@Component({
  selector: 'app-myworks',
  templateUrl: './myworks.component.html',
  styleUrls: ['./myworks.component.scss'],
})
export class MyworksComponent implements OnInit {

  constructor() { }
  myWorks = [
    {
      imgUrl:"https://github.com/Samandar02/Relab-ui/raw/master/responsive-laptop.gif",
      liveUrl:"https://relab.netlify.app",
      repoUrl:"https://github.com/Samandar02/Relab-ui",
      title:"Relab UI",
      description:"Relab UI e-commerce system. this site build for pracitse Sass",
    },
    {
      imgUrl:"https://github.com/Samandar02/Relab-ui/raw/master/responsive-laptop.gif",
      liveUrl:"https://relab.netlify.app",
      repoUrl:"https://github.com/Samandar02/Relab-ui",
      title:"Relab UI",
      description:"Relab UI is used...",
    },
    {
      imgUrl:"https://github.com/Samandar02/Relab-ui/raw/master/responsive-laptop.gif",
      liveUrl:"https://relab.netlify.app",
      repoUrl:"https://github.com/Samandar02/Relab-ui",
      title:"Relab UI",
      description:"Relab UI is used...",
    },
  ]
  ngOnInit(): void {
  }

}
