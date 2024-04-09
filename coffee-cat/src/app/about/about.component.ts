import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'll-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  particlesOptions = {
    particles: {
      color: {
        value: [ '#ffffff', '#ffffff' ]
      },
      size: {
        value: 1
      },
      lineLinked: {
        enable: true,
        color: 'random'
      },
      move: {
        enable: true,
        speed: 1
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
