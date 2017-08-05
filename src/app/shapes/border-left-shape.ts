import { Shape, Tween, Timeline, addShape, CustomShape } from 'mo-js';
import { StrokeDashArray } from './../core/animations/stroke-dasharray';
import { BORDER_TIME_DELAY } from './../core/consts/timings';

export class HeaderItemLeft {
	timeline: Timeline;
	StrokeDashArray: StrokeDashArray;
	el: any;
	shapeArr = [];

	constructor(el) {
		this.initShapes();
		this.el = el;
		this.timeline = new Timeline({ delay: BORDER_TIME_DELAY });
		this.shapeArr.forEach((e, i) => {
			this.createShape(e.name, e.stroke, e.path, i);
		});
		this.createCircle();
		this.timeline.play();
	}

	createShape(name, stroke, path, index) {
		const strokeDashArray = new StrokeDashArray(path);
		const startPosition = strokeDashArray.getPosition('0%', '0%', 1);
		const endPosition = strokeDashArray.getPosition('0%', '100%', 1);
		const s = new Shape({
			shape: name,
			isShowEnd: true,
			isShowStart: true,
			parent: this.el,
			delay: index * 300,
			fill: 'transparent',
			stroke: '#494949',
			strokeWidth: stroke,
			strokeDashoffset: strokeDashArray.length * 2,
			strokeDasharray: { [startPosition]: endPosition },
			scale: 1,
			y: 0,
			left: 60,

			top: 75,
			duration: 1500,
			width: 800,
			height: window.innerHeight * 2,
			origin: '0% 0%'
		});
		this.timeline.add(s);
	}

	createCircle() {
		const s = new Shape({
			shape: 'circle',
			left: 40,
			parent: this.el,
			delay: 7 * 300,
			fill: '#494949',
			top: 125,
			radius: { [0]: 5 }
		});
		this.timeline.add(s);
	}

	initShapes() {
		addShape('BorderLeftHeader1', BorderLeftHeader1);
		addShape('BorderLeftHeader2', BorderLeftHeader2);
		addShape('BorderLeftHeader3', BorderLeftHeader3);
		addShape('BorderLeftHeader4', BorderLeftHeader4);
		addShape('BorderLeftHeader5', BorderLeftHeader5);
		addShape('BorderLeftHeader6', BorderLeftHeader6);
		addShape('BorderLeftHeader7', BorderLeftHeader7);

		this.shapeArr.push(
			{
				name: 'BorderLeftHeader1',
				stroke: 2,
				path: `M140.1,23 57,94.4 57,${window.innerHeight}`
			},
			{
				name: 'BorderLeftHeader2',
				stroke: 3,
				path: `M48.5,${window.innerHeight} 48.5,87 142,8.5`
			},
			{
				name: 'BorderLeftHeader3',
				stroke: 2,
				path: `M30,${window.innerHeight}V104`
			},
			{
				name: 'BorderLeftHeader4',
				stroke: 2,
				path: `M20,${window.innerHeight}V106l0.4,0.4c7.8,7.9,12,8,19.3-0.8l0.4-0.4V${window.innerHeight}`
			},
			{
				name: 'BorderLeftHeader5',
				stroke: 2,
				path: `M380,23H105L26,88.2c1.1-0.4,2.3-0.6,3.5-0.6c5.6,0,10.2,4.2,10.7,9.8L40,42.2`
			},
			{
				name: 'BorderLeftHeader6',
				stroke: 5,
				path: `M420.7,10.2 78.4,9.9 10.5,67.1 10.5,${window.innerHeight}`
			},
			{
				name: 'BorderLeftHeader7',
				stroke: 2,
				path: `M455,1 113,1 1,95.1 1,${window.innerHeight}`
			}
		);
	}

	public BorderLeftHeader1() {
		const svg = new BorderLeftHeader1();
	}
}

class BorderLeftHeader1 extends CustomShape {
	getShape() {
		return `<path id="line1" class="st0" d="M140.1,23 57,94.4 57,${window.innerHeight} "/>`;
	}
}

class BorderLeftHeader2 extends CustomShape {
	getShape() {
		return `<path id="line2" class="st2" d="M48.5,${window.innerHeight} 48.5,87 142,8.5 "/>`;
	}
}

class BorderLeftHeader3 extends CustomShape {
	getShape() {
		return `<path id="line3" class="st0" d="M30,${window.innerHeight}V104"/>`;
	}
}

class BorderLeftHeader4 extends CustomShape {
	getShape() {
		return `<path id="line4" class="st0" d="M20,${window.innerHeight}V106l0.4,0.4c7.8,7.9,12,8,19.3-0.8l0.4-0.4V${window.innerHeight}"/>`;
	}
}

class BorderLeftHeader5 extends CustomShape {
	getShape() {
		return `<path id="line5" class="st0" d="M380,23H105L26.1,88.2c1.1-0.4,2.3-0.6,3.5-0.6c5.6,0,10.2,4.2,10.7,9.8L40,42.2"/>`;
	}
}

class BorderLeftHeader6 extends CustomShape {
	getShape() {
		return `<path id="line6" class="st1" d="M420.7,10.2 78.4,9.9 10.5,67.1 10.5,${window.innerHeight} "/>`;
	}
}

class BorderLeftHeader7 extends CustomShape {
	getShape() {
		return `<path id="line7" class="st0" d="M452,1 113,1 1,95.1 1,${window.innerHeight} "/>`;
	}
}
