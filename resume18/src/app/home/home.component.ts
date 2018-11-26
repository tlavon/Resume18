import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger, animateChild } from '@angular/animations';

declare var particlesJS : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ trigger('listAnimation', [
                  transition('* => *', [
                    query(':enter', style({ opacity: 0}), { optional: true}),
                    query(':enter', stagger(300, [animate('1s ease-in', style({ opacity: 1}))]))
                  ])
  ])]
})
export class HomeComponent implements OnInit {
  list = ["JavaScript", "Angular", "HTML", "CSS", "C#", "RESTful Api",
          "Azure Application Insights", "SQL Server", "Agile"]



  constructor() { }

  ngOnInit() {
    particlesJS.load('particle-js', '/assets/particlesjs-config.json', function(){
      console.log('callback - particles-js config loaded');
    });


  }

}
