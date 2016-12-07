import { Component, OnInit, ElementRef } from '@angular/core';
import { Chandelier } from './../../shapes/chandelier-shape';
@Component({
	selector: 'c-chandelier',
	templateUrl: './chandelier.component.html',
	styleUrls: ['./chandelier.component.scss']
})
export class ChandelierComponent implements OnInit {
	chandelier: Chandelier;

	constructor(private el: ElementRef) { }

	ngOnInit() {
		this.chandelier = new Chandelier(this.el.nativeElement.querySelector('.shape_container'));
	}

}
