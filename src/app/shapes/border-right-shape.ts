import { Shape, Tween, Timeline, addShape, CustomShape } from 'mo-js';
import { StrokeDashArray } from './../core/animations/stroke-dasharray';

export class HeaderItemRight {

    timeline: Timeline;
    StrokeDashArray: StrokeDashArray;
    el: any;
    

    shapeArr = [];

    constructor(el) {
        this.initShapes();
        this.el = el;
        
        this.timeline = new Timeline();
        this.shapeArr.forEach((e, i) => {
            this.createShape(e.name, e.stroke, e.path, i);
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
            top: 75,
            left: -112,
            x: 0,
            duration: 1500,
            width: 400,
            height: 1200,
        });
        this.timeline.add(s);
    }

    createCircle() {
        let s = new Shape({
            shape: 'circle',
            left: -40,
            parent: this.el,
            delay: 7 * 300,
            fill: 'white',
            top: 125,
            radius: { [0]: 5}
        })
        this.timeline.add(s);
    }    
    


    initShapes() {
        addShape('BorderRightHeader1', BorderRightHeader1);
        addShape('BorderRightHeader2', BorderRightHeader2);
        addShape('BorderRightHeader3', BorderRightHeader3);
        addShape('BorderRightHeader4', BorderRightHeader4);
        addShape('BorderRightHeader5', BorderRightHeader5);
        addShape('BorderRightHeader6', BorderRightHeader6);
        addShape('BorderRightHeader7', BorderRightHeader7);

        this.shapeArr.push(
            { name: 'BorderRightHeader1', stroke: 2, path: 'M311.9,23 395,94.4 395,761' },
            { name: 'BorderRightHeader2', stroke: 3, path: 'M403.5,760 403.5,87 310,8.5' },
            { name: 'BorderRightHeader3', stroke: 2, path: 'M213,23h134l78.9,65.2c-1.1-0.4-2.3-0.6-3.5-0.6c-5.6,0-10.2,4.2-10.7,9.8l0.3-55.1'},
            { name: 'BorderRightHeader4', stroke: 2, path: 'M422,775V104' },
            { name: 'BorderRightHeader5', stroke: 2, path: 'M432,772V106l-0.4,0.4c-7.8,7.9-12,8-19.3-0.8l-0.4-0.4V771'},
            { name: 'BorderRightHeader6', stroke: 5, path: 'M191.3,10.2 373.6,9.9 441.5,67.1 441.5,760'},
            { name: 'BorderRightHeader7', stroke: 2, path: 'M171,1 339,1 451,95.1 451,761'},
        )
    }


    public BorderRightHeader1() {
        let svg = new BorderRightHeader1();
    }
}


class BorderRightHeader1 extends CustomShape {
    getShape() {
        return '<path  transform="translate(-300)" id="line1" class="st0" d="M311.9,23 395,94.4 395,761"/>'
    }
}

class BorderRightHeader2 extends CustomShape {
    getShape() {
        return '<path  transform="translate(-300)" id="line2" class="st2" d="M403.5,760 403.5,87 310,8.5"/>'
    }
}

class BorderRightHeader3 extends CustomShape {
    getShape() {
        return '<path  transform="translate(-300)" id="line3" class="st0" d="M213,23h134l78.9,65.2c-1.1-0.4-2.3-0.6-3.5-0.6c-5.6,0-10.2,4.2-10.7,9.8l0.3-55.1"/>'
    }
}


class BorderRightHeader4 extends CustomShape {
    getShape() {
        return '<path  transform="translate(-300)" id="line4" class="st0" d="M422,775V104"/>'
    }
}

class BorderRightHeader5 extends CustomShape {
    getShape() {
        return '<path  transform="translate(-300)" id="line5" class="st0" d="M432,772V106l-0.4,0.4c-7.8,7.9-12,8-19.3-0.8l-0.4-0.4V771"/>'
    }
}

class BorderRightHeader6 extends CustomShape {
    getShape() {
        return '<path  transform="translate(-300)" id="line6" class="st1" d="M191.3,10.2 373.6,9.9 441.5,67.1 441.5,760"/>'
    }
}

class BorderRightHeader7 extends CustomShape {
    getShape() {
        return '<path  transform="translate(-300)" id="line7" class="st0" d="M171,1 339,1 451,95.1 451,761"/>'
    }
}


