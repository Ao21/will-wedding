import { Component, OnInit, ElementRef } from '@angular/core';
import { Chandelier } from './../../shapes/chandelier-shape';
import { Header } from './../../shapes/header-shape';
@Component({
	selector: 'c-chandelier',
	templateUrl: './chandelier.component.html',
	styleUrls: ['./chandelier.component.scss']
})
export class ChandelierComponent implements OnInit {
	chandelier: Chandelier;
	header: Header;

	constructor(private el: ElementRef) { }

	ngOnInit() {
		this.header = new Header(this.el.nativeElement.querySelector('.header_container'));
		this.chandelier = new Chandelier(this.el.nativeElement.querySelector('.shape_container'));
	}

}
