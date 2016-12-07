import { Component } from '@angular/core';
import { MojsInit } from './shapes/mo-js.init';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  constructor(
    mojo: MojsInit
  ) {
    mojo.init();
  }
}
