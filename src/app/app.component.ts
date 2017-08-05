import { Component } from '@angular/core';
import { MojsInit } from './shapes/mo-js.init';

import * as zenscroll from 'zenscroll';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app works!';

	zen = zenscroll.createScroller(document.body, 750, 0);
	constructor(mojo: MojsInit) {
		mojo.init();
	}
	goToSection($event) {
		const el = document.getElementById($event);
		this.zen.to(el);
	}
}
