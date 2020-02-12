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
        shaderStyle: 'rgba(241, 196, 18, 0.67)',
        shaderOffset: 3,
      },
    },
    {
      name: 'bar',
      rad: 15,
      distance: 100,
      rv: 0.3,
      appearance: {
        color: 'red',
        shaderStyle: 'rgba(241, 18, 18, 0.59)',
        shaderOffset: 4,
      },
      orbiters: [
        {
          name: 'pinko',
          rad: 3,
          distance: 23,
          rv: 0.5,
          appearance: {
            color: 'pink',
          },
          orbiters: [
            {
              name: 'yellow',
              rad: 2,
              distance: 6,
              rv: 0.5,
              appearance: {
                color: 'yellow',
              },
            }
          ]
        },
      ]
    },
    {
      name: 'foo',
      rad: 10,
      distance: 70,
      rv: 0.4,
      appearance: {
        color: 'blue',
        shaderStyle: 'rgba(50, 205, 229, 0.41)',
        shaderOffset: 1,
      },
    },
    {
      name: 'oran',
      rad: 7,
      distance: 130,
      rv: 0.2,
      appearance: {
        color: 'orange',
        shaderStyle: 'rgba(241, 18, 18, 0.59)',
        shaderOffset: 2,
      },
      orbiters: [
        {
          name: 'mun',
          rad: 3,
          distance: 10,
          rv: 1,
          appearance: {
            color: 'cyan',
          },
        },
        {
          name: 'mun2',
          rad: 2,
          distance: 20,
          rv: 0.2,
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
      rv: 0.1,
      appearance: {
        color: 'gray',
        shaderStyle: 'rgba(142, 142, 142, 0.36)',
        shaderOffset: 1,
      },
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
