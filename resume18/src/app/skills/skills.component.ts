import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger, animateChild } from '@angular/animations';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [ trigger('listAnimation', [
                  transition('* => *', [
                    query(':enter', style({ opacity: 0}), { optional: true}),
                    query(':enter', stagger(300, [animate('1s ease-in', style({ opacity: 1}))]))
                  ])
  ])]
})
export class SkillsComponent implements OnInit {
  list = ["JavaScript", "Angular", "HTML", "CSS", "C#", "RESTful Api",
          "Azure Application Insights", "SQL Server", "Agile", "Git",
          "Microsoft Visual Studio"]


  constructor() { }

  ngOnInit() {
  }

}
