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
      imgUrl: "assets/haircutteam.png",
      liveUrl: "https://haircutteam.netlify.app/",
      repoUrl: "https://github.com/Samandar02/haircut",
      title: "Haircut Team",
      description: "Haircut team portfolio.",
    },
    {
      imgUrl: "assets/relab.gif",
      liveUrl: "https://relab.netlify.app",
      repoUrl: "https://github.com/Samandar02/Relab-ui",
      title: "Relab UI",
      description: "Relab UI e-commerce system. this site build for pracitse Sass",
    },
    {
      imgUrl: "assets/marvis.jpg",
      liveUrl: "https://marvistrucks.netlify.app",
      repoUrl: "https://github.com/Samandar02/marvis-ui",
      title: "Marvis",
      description: "Marvis Trucks is responsive and interactive design. this web site building for sass practice",
    },
    {
      imgUrl: "assets/todo-app.gif",
      liveUrl: "https://superlative-gingersnap-616dba.netlify.app/",
      repoUrl: "https://github.com/Samandar02/frontendmentor/tree/master/todo-app-main/client-app",
      title: "To To app",
      description: "Interactive and Responsive To do app build with Angular, Sass this site see beautifull with Angular Animation",
    },
    {
      imgUrl: "assets/snap.jpg",
      liveUrl: "https://playful-lebkuchen-507473.netlify.app/",
      repoUrl: "https://github.com/Samandar02/frontendmentor/tree/master/intro-section-with-dropdown-navigation-main",
      title: "snap Freelance",
      description: "snap simple Freelance webpage design from frontentmentor challange. This site build with a static page and sass for practice uncompleted:)",
    },
    {
      imgUrl: "assets/googleclone.gif",
      liveUrl: "https://google-by-samandar.w3spaces.com/",
      repoUrl: "https://github.com/Samandar02/google-clone",
      title: "Google Clone",
      description: "Google Clone is created for sass and angular practice",
    },
    {
      imgUrl: "https://www.kindpng.com/picc/m/239-2394224_collaboration-solutions-advantage-of-the-employee-management-system.png",
      liveUrl: "none",
      repoUrl: "https://github.com/Samandar02/EMS.Backend",
      title: "Employee managment system api",
      description: "Employee managment system api for practice .Net Core api with aothorization",
    },
    {
      imgUrl: "https://1.bp.blogspot.com/--N26aRZdGGM/X3w1K1Ua5aI/AAAAAAAAA6U/CAW__gnZGAwwhtESQ8nIaM5e-vBrXRhzwCLcBGAsYHQ/s1280/Create%2Ba%2BQuiz%2BApp%2Bwith%2BTimer%2Busing%2BHTML%2BCSS%2B%2526%2BJavaScript.webp",
      liveUrl: "none",
      repoUrl: "https://github.com/Samandar02/Quiz-App",
      title: "Quiz app",
      description: "Quiz app for practice .Net Core api and Angular with aothorization app. on this site users could make a quiiz then quiz, and other people could play them",
    },
    {
      imgUrl: "assets/loopstudio.png",
      liveUrl: "https://heartfelt-melba-8d5862.netlify.app/",
      repoUrl: "https://github.com/Samandar02/Loopstudios-Landing-UI",
      title: "Loopstudios",
      description: "Loopstudios app for practice sass. on this site users could pay technical things. Uncompleted:)",
    },
  ]
  ngOnInit(): void {
  }

}
