import { Shape, Tween, Timeline, addShape, CustomShape } from 'mo-js';
import { StrokeDashArray } from './../core/animations/stroke-dasharray';

export class HeaderItemLeft {

    timeline: Timeline;
    StrokeDashArray: StrokeDashArray;
    el: any;
    shapeArr = [];

    constructor(el) {
        this.initShapes();
        this.el = el;
        this.timeline = new Timeline();
        this.shapeArr.forEach((e, i) => {
            this.createShape(e.name, e.stroke, e.path, i)
        })
        this.createCircle();
        this.timeline.play();
        
    }

    createShape(name, stroke, path, index) {
        let strokeDashArray = new StrokeDashArray(path);
        let startPosition = strokeDashArray.getPosition('0%', '0%', 1);
		let endPosition = strokeDashArray.getPosition('0%', '100%', 1);
        let s = new Shape({
            shape: name,
            isShowEnd: true,
            isShowStart: true,
            parent: this.el,
            delay: index * 300,
            fill: 'transparent',
            stroke: 'white',
            strokeWidth: stroke,
            strokeDashoffset: strokeDashArray.length * 2,
            strokeDasharray: { [startPosition]: endPosition },
            scale: 1,
            y: 0,
            left: 60,
            top: 75,
            duration: 1500,
            width: 800,
            height: 1200,
            origin: '0% 0%'
        });
        this.timeline.add(s);
    }

    createCircle() {
        let s = new Shape({
            shape: 'circle',
            left: 40,
            parent: this.el,
            delay: 7 * 300,
            fill: 'white',
            top: 125,
            radius: { [0]: 5}
        })
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
            { name: 'BorderLeftHeader1', stroke: 2, path: 'M140.1,23 57,94.4 57,761' },
            { name: 'BorderLeftHeader2', stroke: 3, path: 'M48.5,760 48.5,87 142,8.5' },
            { name: 'BorderLeftHeader3', stroke: 2, path: 'M30,775V104'},
            { name: 'BorderLeftHeader4', stroke: 2, path: 'M20,772V106l0.4,0.4c7.8,7.9,12,8,19.3-0.8l0.4-0.4V771' },
            { name: 'BorderLeftHeader5', stroke: 2, path: 'M239,23H105L26.1,88.2c1.1-0.4,2.3-0.6,3.5-0.6c5.6,0,10.2,4.2,10.7,9.8L40,42.2'},
            { name: 'BorderLeftHeader6', stroke: 5, path: 'M260.7,10.2 78.4,9.9 10.5,67.1 10.5,760'},
            { name: 'BorderLeftHeader7', stroke: 2, path: 'M281,1 113,1 1,95.1 1,761'},
        )
    }


    public BorderLeftHeader1() {
        let svg = new BorderLeftHeader1();
    }
}


class BorderLeftHeader1 extends CustomShape {
    getShape() {
        return '<path id="line1" class="st0" d="M140.1,23 57,94.4 57,761 "/>'
    }
}

class BorderLeftHeader2 extends CustomShape {
    getShape() {
        return '<path id="line2" class="st2" d="M48.5,760 48.5,87 142,8.5 "/>'
    }
}

class BorderLeftHeader3 extends CustomShape {
    getShape() {
        return '<path id="line3" class="st0" d="M30,775V104"/>'
    }
}


class BorderLeftHeader4 extends CustomShape {
    getShape() {
        return '<path id="line4" class="st0" d="M20,772V106l0.4,0.4c7.8,7.9,12,8,19.3-0.8l0.4-0.4V771"/>'
    }
}

class BorderLeftHeader5 extends CustomShape {
    getShape() {
        return '<path id="line5" class="st0" d="M239,23H105L26.1,88.2c1.1-0.4,2.3-0.6,3.5-0.6c5.6,0,10.2,4.2,10.7,9.8L40,42.2"/>'
    }
}

class BorderLeftHeader6 extends CustomShape {
    getShape() {
        return '<path id="line6" class="st1" d="M260.7,10.2 78.4,9.9 10.5,67.1 10.5,760 "/>'
    }
}

class BorderLeftHeader7 extends CustomShape {
    getShape() {
        return '<path id="line7" class="st0" d="M281,1 113,1 1,95.1 1,761 "/>'
    }
}


