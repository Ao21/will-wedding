import { Shape, Tween, Timeline, addShape, CustomShape, easing } from 'mo-js';
import { StrokeDashArray } from './../core/animations/stroke-dasharray';

export class HeaderItemTopLeft {

	timeline: Timeline;
	StrokeDashArray: StrokeDashArray;
	el: any;


	shapeArr = [];
	constructor(el) {
		this.initShapes();
		this.el = el;

		this.timeline = new Timeline({});
		this.shapeArr.forEach((e, i) => {
			this.createShape(e.name, e.stroke, e.path, i, e.round);
		})
		this.timeline.play();
	}

	createShape(name, stroke, path, index, round) {
		let strokeDashArray = new StrokeDashArray(path);
		let startPosition = strokeDashArray.getPosition('0%', '0%', 1);
		let endPosition = strokeDashArray.getPosition('0%', '100%', 1);

		let s = new Shape({
			shape: name,
			isShowEnd: true,
			isShowStart: true,
			parent: this.el,
			strokeLinecap: round ? 'round' : null,
			delay: index * 150,
			fill: 'transparent',
			stroke: 'white',
			strokeWidth: stroke,
			strokeDashoffset: strokeDashArray.length * 2,
			strokeDasharray: { [startPosition]: endPosition },
			scale: 1,
			origin: '0% 0%',
			top: 10,
			left: 10,
			x: 35,
			y: 35,
			duration: 1200,
			width: 70,
			height: 70,
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
		addShape('BorderLeftHeader8', BorderLeftHeader8);
		addShape('BorderLeftHeader9', BorderLeftHeader9);
		addShape('BorderLeftHeader10', BorderLeftHeader10);
		addShape('BorderLeftHeader11', BorderLeftHeader11);
		addShape('BorderLeftHeader12', BorderLeftHeader12);
		addShape('BorderLeftHeader13', BorderLeftHeader13);


		this.shapeArr.push(
			{ name: 'BorderLeftHeader1', stroke: 1, round: true, path: `M13.5,13.6 20.5,20.6 30,21.2 36,25.9 30.8,25.8 30,21.2 25.5,25.7 30.8,25.8 32.2,32.4 25.5,25.7 32.2,32.4 25.4,31 25.5,35.8 21,30.3 25.4,31 25.5,25.7 21,30.3 20.5,20.6 25.5,25.7` },
			{ name: 'BorderLeftHeader2', stroke: 1, path: 'M13.8,33 13.8,13.8 32.8,13.8' },
			{ name: 'BorderLeftHeader3', stroke: 1.5, path: 'M7.9,67V17.1' },
			{ name: 'BorderLeftHeader4', stroke: 1.5, path: 'M4.9,0L4.7,61.1c0,0.2,0.2,0.3,0.3,0.1l2.7-4.1C7.9,57,8,57,8.1,57.1l2.7,4.1c0.1,0.1,0.3,0.1,0.3-0.1 L11,0' },
			{ name: 'BorderLeftHeader5', stroke: 1.5, path: 'M-1.4,7.5' },
			{ name: 'BorderLeftHeader6', stroke: 1.5, path: 'M15.8,4.5' },
			{ name: 'BorderLeftHeader7', stroke: 1.5, path: 'M15.8,10.6' },
			{ name: 'BorderLeftHeader8', stroke: 1.5, path: 'M17.1,7.8H67' },
			{ name: 'BorderLeftHeader9', stroke: 2, path: 'M0,10.9L61.1,11c0.2,0,0.3-0.2,0.1-0.3L57.1,8c-0.1-0.1-0.1-0.2,0-0.3l4.1-2.7c0.1-0.1,0.1-0.3-0.1-0.3 L0,4.8' },
			{ name: 'BorderLeftHeader10', stroke: 1.5, path: 'M7.8,17.1' },
			{ name: 'BorderLeftHeader11', stroke: 1.5, path: 'M4.7,0' },
			{ name: 'BorderLeftHeader12', stroke: 1.5, path: 'M10.8,0' },
			{ name: 'BorderLeftHeader13', stroke: 2, path: 'M1.1,47.4 1.1,0.9 47.2,0.9' },
		)
	}
}

// Lines
class BorderLeftHeader1 extends CustomShape {
	getShape() {
		return `<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10 transform=translate(15,15) class="st0" d="M13.5,13.6 20.5,20.6 30,21.2 36,25.9 30.8,25.8 30,21.2 25.5,25.7 30.8,25.8 32.2,32.4 
	25.5,25.7 32.2,32.4 25.4,31 25.5,35.8 21,30.3 25.4,31 25.5,25.7 21,30.3 20.5,20.6 25.5,25.7"/>`
	}
}

class BorderLeftHeader2 extends CustomShape {
	getShape() {
		return `<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) id="group-15" class="st0" d="M13.8,33 13.8,13.8 32.8,13.8"/>`
	}
}

class BorderLeftHeader3 extends CustomShape {
	getShape() {
		return `<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) class="st0" d="M7.9,67V17.1"/>`
	}
}

class BorderLeftHeader4 extends CustomShape {
	getShape() {
		return `<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) id="group-13" class="st0" d="M4.9,0L4.7,61.1c0,0.2,0.2,0.3,0.3,0.1l2.7-4.1C7.9,57,8,57,8.1,57.1l2.7,4.1c0.1,0.1,0.3,0.1,0.3-0.1
	L11,0"/>`
	}
}

class BorderLeftHeader5 extends CustomShape {
	getShape() {
		return `<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) d="M-1.4,7.5"></path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10 >`
	}
}

class BorderLeftHeader6 extends CustomShape {
	getShape() {
		return `<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) class="st0" d="M15.8,4.5"/>`
	}
}

class BorderLeftHeader7 extends CustomShape {
	getShape() {
		return `<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) id="group-10" class="st0" d="M15.8,10.6"/>`
	}
}

class BorderLeftHeader8 extends CustomShape {
	getShape() {
		return `<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) class="st0" d="M17.1,7.8H67"/>`
	}
}

class BorderLeftHeader9 extends CustomShape {
	getShape() {
		return `<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) class="st0" d="M0,10.9L61.1,11c0.2,0,0.3-0.2,0.1-0.3L57.1,8c-0.1-0.1-0.1-0.2,0-0.3l4.1-2.7c0.1-0.1,0.1-0.3-0.1-0.3
	L0,4.8"/>`
	}
}

class BorderLeftHeader10 extends CustomShape {
	getShape() {
		return `<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) class="st0" d="M7.8,17.1"/>`
	}
}

class BorderLeftHeader11 extends CustomShape {
	getShape() {
		return `<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) class="st0" d="M4.7,0"/>`
	}
}

class BorderLeftHeader12 extends CustomShape {
	getShape() {
		return `<path stroke-linecap=round; stroke-linejoin=round stroke-miterlimit=10  transform=translate(15,15) class="st0" d="M10.8,0"/>`
	}
}

class BorderLeftHeader13 extends CustomShape {
	getShape() {
		return `<path stroke-miterlimit=10  transform=translate(15,15) class="st0" d="M1.1,47.4 1.1,0.9 47.2,0.9"/>`
	}
}