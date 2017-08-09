import { Component } from '@angular/core';
import { MojsInit } from './shapes/mo-js.init';

import * as zenscroll from 'zenscroll';

import { IEUTILS } from './core/utils/ie';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app works!';
	isVisible = false;

	zen;
	constructor(mojo: MojsInit) {
		mojo.init();

		if (IEUTILS.detectIE() || IEUTILS.detectFirefox()) {
			this.zen = zenscroll.createScroller(document.querySelector('html'), 750, 0);
		} else {
			this.zen = zenscroll.createScroller(document.body, 750, 0);
		}

		setTimeout(() => {
			this.isVisible = true;
		}, 11000);
	}
	goToSection($event) {
		const el = document.getElementById($event);
		this.zen.intoView(el);
	}
}
