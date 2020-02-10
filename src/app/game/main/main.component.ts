import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrbitBody } from 'src/app/shared/planet-viewer/planet-viewer.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {

  planets: OrbitBody[] = [
    {
      name: 'sun',
      rad: 30,
      distance: 0,
      rv: 0,
      appearance: {
        color: 'yellow',
      },
    },
    {
      name: 'bar',
      rad: 15,
      distance: 100,
      rv: 2,
      appearance: {
        color: 'red',
      },
    },
    {
      name: 'foo',
      rad: 10,
      distance: 70,
      rv: 1,
      appearance: {
        color: 'blue',
      },
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
