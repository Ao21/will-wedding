import {
	Shape,
	Tween,
	Timeline,
	Burst,
	addShape,
	CustomShape,
	easing,
	ShapeSwirl
} from 'mo-js';
import { StrokeDashArray } from './../core/animations/stroke-dasharray';
import { BORDER_TIME_DELAY } from './../core/consts/timings';
import * as _ from 'lodash';

export class TopHat {
	timeline: Timeline;
	el: any;

	constructor(el) {
		this.initShapes();
		this.timeline = new Timeline();
		this.el = el;
		this.createShape();
		this.timeline.play();
	}

	initShapes() {
		addShape('TopHatShape', TopHatShape);
	}

	createShape() {
		const s = new Shape({
			shape: 'TopHatShape',
			isShowEnd: true,
			isShowStart: true,
			parent: this.el,
			fill: '#333232',
			strokeWidth: 1,
			easing: easing.elastic.inout,
			scale: 0,
			top: window.innerHeight / 2 - 110, // 443
			origin: '50% 50%',
			left: window.innerWidth / 2 + 55,
			angle: 0,
			delay: 10250,
			x: 0,
			y: 0,
			repeat: 0,
			duration: 300,
			width: 40,
			height: 24
		}).then({
			angle: { [-30]: 20 },
			scale: { 0: 1 }
		});
		this.timeline.add(s);
	}
}

class TopHatShape extends CustomShape {
	getShape() {
		return `<path transform="translate(30, 38) scale(1, 1)" class="cls-1" d="M24.15,21.81c1.37.27,2.74.53,4.1.84.26.06.66.37.64.53a1,1,0,0,1-.54.73A16.79,16.79,0,0,1,25.45,25a35.23,35.23,0,0,1-20-.92,32.66,32.66,0,0,1-4.82-2.4c-.3-.16-.42-.64-.63-1,.34-.19.66-.52,1-.55,1.29-.1,2.59-.14,3.88-.13.55,0,.79-.13.93-.69A41,41,0,0,0,6.18,1.22C6.07.65,6.2.4,6.75.34,7.84.23,8.92.05,10,0A44.78,44.78,0,0,1,26.95,2.67c.49.18.94.45,1.47.71A38.08,38.08,0,0,0,23.6,21.69ZM22.92,3c-.15,0-.45.36-.5.59C21.58,7,20.65,10.33,20,13.74c-.53,2.76-.72,5.59-1.06,8.39,0,.32,0,.65-.07,1.21.88-.16,1.66-.28,2.42-.47.16,0,.34-.38.35-.58A50.43,50.43,0,0,1,25.74,3.71a1.15,1.15,0,0,0,0-.29C24.81,3.27,23.87,3.09,22.92,3Z"/>`;
	}
}
