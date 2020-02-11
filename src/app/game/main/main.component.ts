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
      rv: 1,
      appearance: {
        color: 'red',
      },
      orbiters: [
        {
          name: 'pinko',
          rad: 3,
          distance: 20,
          rv: 1,
          appearance: {
            color: 'pink',
          },
        },
      ]
    },
    {
      name: 'foo',
      rad: 10,
      distance: 70,
      rv: 2,
      appearance: {
        color: 'blue',
      },
    },
    {
      name: 'oran',
      rad: 7,
      distance: 130,
      rv: 0.5,
      appearance: {
        color: 'orange',
      },
      orbiters: [
        {
          name: 'mun',
          rad: 3,
          distance: 10,
          rv: 4,
          appearance: {
            color: 'cyan',
          },
        },
        {
          name: 'mun2',
          rad: 4,
          distance: 20,
          rv: 2,
          appearance: {
            color: 'lime',
          },
        },
      ]
    },
    {
      name: 'gray',
      rad: 7,
      distance: 170,
      rv: 3,
      appearance: {
        color: 'gray',
      },
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
