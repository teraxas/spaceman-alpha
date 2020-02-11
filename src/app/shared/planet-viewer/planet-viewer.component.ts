import { Component, OnInit, ViewEncapsulation, Input, ViewChild, AfterViewInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

export interface OrbitBody {
  /**
   * for reference
   */
  name: string;
  /**
   * Planet radius
   */
  rad: number;
  /**
   * Planet distance from center
   */
  distance: number;
  /**
   * radial velocity (deg/sec)
   */
  rv: number;
  appearance: {
    color: string;
  };
  orbiters?: OrbitBody[];
}

@Component({
  selector: 'app-planet-viewer',
  templateUrl: './planet-viewer.component.html',
  styleUrls: ['./planet-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlanetViewerComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() height = 400;
  @Input() width = 400;
  @Input() planets: OrbitBody[];

  @ViewChild('container') private container: ElementRef;
  private canvas: HTMLCanvasElement;
  private ctx2d: CanvasRenderingContext2D;
  private lastFrameTime: number;

  //state
  private planetsAngle: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.height || changes.width) {
      this.setupCanvasSize();
    } else if (changes.planets) {
      this.planetsAngle = this.planets.map(p => 0);
    }
  }

  ngAfterViewInit() {
    this.canvas = document.createElement('canvas');
    this.ctx2d = this.canvas.getContext('2d');
    this.container.nativeElement.appendChild(this.canvas);
    this.setupCanvasSize();

    this.lastFrameTime = Date.now();
    requestAnimationFrame(() => this.draw());
  }

  private setupCanvasSize() {
    this.canvas.width = this.width = this.width || this.container.nativeElement.clientWidth;
    this.canvas.height = this.height = this.height || this.container.nativeElement.clientHeight;
    this.ctx2d.translate(this.width / 2, this.height / 2);
  }

  private draw() {
    this.ctx2d.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);

    const now = Date.now();
    const dts = (now - this.lastFrameTime) / 1000;
    const planets = this.planets;
    this.drawBodies(planets, dts);
    this.lastFrameTime = now;
    requestAnimationFrame(() => this.draw());
  }

  private drawBodies(planets: OrbitBody[], dts: number, baseX = 0, baseY = 0) {
    this.ctx2d.translate(baseX, baseY);
    planets.forEach((planet, idx) => {
      let theta = 0;
      this.planetsAngle[idx] += planet.rv / Math.PI * dts;
      theta = this.planetsAngle[idx];
      const x = planet.distance * Math.cos(theta);
      const y = planet.distance * Math.sin(theta);
      if (planet.distance) {
        this.drawOrbit(this.ctx2d, planet);
      }
      if (planet.orbiters && planet.orbiters.length) {
        this.drawBodies(planet.orbiters, dts, x, y);
      }
      this.drawPlanet(this.ctx2d, x, y, planet);
    });
    this.ctx2d.translate(-baseX, -baseY);
  }

  private drawPlanet(ctx2d: CanvasRenderingContext2D, x: number, y: number, planet: OrbitBody) {
    ctx2d.save();
    ctx2d.fillStyle = planet.appearance.color;
    ctx2d.translate(x, y);
    ctx2d.beginPath();
    ctx2d.arc(0, 0, planet.rad, 0, 2 * Math.PI, false);
    ctx2d.fill();
    ctx2d.restore();
  }

  private drawOrbit(ctx2d: CanvasRenderingContext2D, planet: OrbitBody) {
    ctx2d.save();
    ctx2d.strokeStyle = planet.appearance.color;
    ctx2d.translate(0, 0);
    ctx2d.beginPath();
    ctx2d.arc(0, 0, planet.distance, 0, 2 * Math.PI, false);
    ctx2d.stroke();
    ctx2d.restore();
  }
}
