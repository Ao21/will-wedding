import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'wedding-travel',
	templateUrl: './wedding-travel.component.html',
	styleUrls: ['./wedding-travel.component.scss']
})
export class WeddingTravelComponent implements OnInit {
	constructor() {}

	activeTab = 'bus';

	ngOnInit() {}

	selectTab($tab) {
		this.activeTab = $tab;
	}
}
