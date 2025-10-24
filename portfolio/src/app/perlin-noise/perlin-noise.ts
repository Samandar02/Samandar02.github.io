import { Component, ElementRef, viewChild } from '@angular/core';
import p5 from 'p5';

@Component({
  selector: 'app-perlin-noise',
  imports: [],
  templateUrl: './perlin-noise.html',
  styleUrl: './perlin-noise.css'
})
export class PerlinNoise {
  div = viewChild.required<ElementRef<HTMLDivElement>>('p5Canvas')
  p5Instance!:p5;
  ngOnInit() {
    const sketch = (s: p5) => {
      let cols:number, rows:number;
      let scl = 80;      // Scale of each grid cell
      let w = s.windowWidth + s.windowWidth * 0.5;      // Width of the terrain
      let h = s.windowWidth * .7;      // Height of the terrain

      let flying = 0;    // Used to animate (scroll) the terrain
      let terrain:number[][] = [];

      s.setup = () => {

        s.createCanvas(s.windowWidth, s.windowHeight, s.WEBGL);  // 3D view
        cols = w / scl;
        rows = h / scl;
      }
      s.draw = () => {
        flying -= 0.01;  // Controls animation speed

        // Generate Perlin noise values for the terrain
        let yoff = flying;
        for (let y = 0; y < rows; y++) {
          terrain[y] = [];
          let xoff = 0;
          for (let x = 0; x < cols; x++) {
            terrain[y][x] = s.map(s.noise(xoff, yoff), 0, 1, -100, 100);
            xoff += 0.2;
          }
          yoff += 0.2;
        }

        s.background(255, 255, 255);
        s.stroke(170);
        s.strokeWeight(.8)
        s.noFill();

        s.rotateX(s.PI / 2.4);
        s.translate(-w / 2, -h / 3);

        // Draw terrain as a mesh
        for (let y = 0; y < rows - 1; y++) {
          s.beginShape(s.TRIANGLE_STRIP);
          for (let x = 0; x < cols; x++) {
            s.vertex(x * scl, y * scl, terrain[y][x]);
            s.vertex(x * scl, (y + 1) * scl, terrain[y + 1][x]);
          }
          s.endShape();
        }
      }
    }
    this.p5Instance = new p5(sketch,this.div().nativeElement)
  }
  ngOnDestroy(){
    this.p5Instance.remove()
  }
}

