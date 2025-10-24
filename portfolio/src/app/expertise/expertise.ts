import { Component } from '@angular/core';
import { ExpCard } from "../components/exp-card/exp-card";

@Component({
  selector: 'app-expertise',
  imports: [ExpCard],
  templateUrl: './expertise.html',
  styleUrl: './expertise.css'
})
export class Expertise {
  readonly expertises = [
    {
      title: "Backend Develpment",
      chips: ["ExpressJs", "NestJs", "AspNet WebApi/MVC", "WCF Services"]
    },
    {
      title: "Frontend Develpment",
      chips: ["Angular", "RxJs", "NgRx", "Tailwind","SASS","Tanstack Query","GraphQl","React"]
    },
    {
      title: "Cloud & DevOps",
      chips: ["Gitlab CI", "Github Actions", "Docker", "Podman","Nginx","IIS","Docker Swarm","ASW S3"]
    },
        {
      title: "Database & Message Brokers",
      chips: ["Postgres", "MongoDb", "MSSQL", "Redis","RabbitMQ"]
    },
    {
      title: "Scripting & Automation",
      chips: ["Golang","Python", "CMD", "BASH","Task Scheduler","Cron"]
    },
    {
      title: "Tools & others",
      chips: ["GIT","Postman", "VSCode", "Dbeaver","Visual Studio","MS Office"]
    },
    {
      title: "Principles",
      chips: ["OOP","SOLID", "KISS", "YANGI","DRY"]
    },
  ]
}
