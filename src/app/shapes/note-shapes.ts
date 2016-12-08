import { Shape, Tween, Timeline, Burst, addShape, CustomShape, easing, ShapeSwirl } from 'mo-js';
import { StrokeDashArray } from './../core/animations/stroke-dasharray';
import { BORDER_TIME_DELAY } from './../core/consts/timings';
import * as _ from 'lodash';

export class MusicNotes {
    timeline: Timeline;
    headerTimeline: Timeline;
    StrokeDashArray: StrokeDashArray;
    el: any;
    shapeArr = [];

    BURST_OPTS: any;
    CHILD_OPTS: any;

    constructor(el) {
        this.initShapes();
        this.el = el;
        this.timeline = new Timeline();
        this.headerTimeline = new Timeline();
        this.configureOptions();
        this.createHeaderShapes();
        this.timeline.play();
        this.headerTimeline.play();
    }

    initShapes() {
        addShape('MusicNote1', MusicNote1);
        addShape('MusicNote2', MusicNote2);
        addShape('MusicNote3', MusicNote3);
        addShape('MusicNote4', MusicNote4);
    }


    createHeaderShapes() {
        // 75 - top level
        // 85 - middle
        // 95  - bar
        // 102 -- bottom
        let s = this.createHeaderShape(BORDER_TIME_DELAY + 5000, 220, { 'rand(75,115)': '95' }, 95, 'MusicNote1');
        let s2 = this.createHeaderShape(BORDER_TIME_DELAY + 5200, 235, { 'rand(75,115)': '102' }, 102, 'MusicNote2');
        let s3 = this.createHeaderShape(BORDER_TIME_DELAY + 5400, 325, { 'rand(75,115)': '85' }, 85, 'MusicNote1');
        let s4 = this.createHeaderShape(BORDER_TIME_DELAY + 5600, 340, { 'rand(75,115)': '95' }, 95, 'MusicNote1');
        let s5 = this.createHeaderShape(BORDER_TIME_DELAY + 5800, 365, { 'rand(75,115)': '75' }, 75, 'MusicNote3');
        let s6 = this.createHeaderShape(BORDER_TIME_DELAY + 6000, 380, { 'rand(75,115)': '100' }, 100, 'MusicNote4');
        
        this.headerTimeline.add(s, s2, s3, s4,s5, s6);
    }

    createHeaderShape(delay,left, y, y2, shape) {
        return new Shape({
            shape: shape,
            fill: 'white',
            fillOpacity: { 0: 1 },
            radius: 20,
            top: 0,
            easing: easing.cubic.inout,
            delay: delay,
            y: y,
            left: left,
            scale: 3,
            isYoyo: false,
            duration: 900,
            isShowStart: false,
            parent: this.el
        })
    }

    configureOptions() {

        const SWIRL_OPTS: any = {
            fill: 'white',
            degree: 0,
            count: 10,
            angle: 0,
            top: '100%',
            delay: 0,
            radius: { 0: 400 },
            children: {
                shape: ['MusicNote1', 'MusicNote2', 'MusicNote3', 'MusicNote4'],
                fill: 'white',
                pathScale: 'rand(0.5, 1)',
                radius: 'rand(20, 40)',
                angle: -90,
                repeat: 1,
                swirlSize: 'rand(10, 15)',
                swirlFrequency: 'rand(2, 4)',
                direction: [1, -1],
                duration: `rand(2000, 4000)`,
                delay: 'rand(0, 500)',
                easing: 'quad.out',
                isSwirl: true,
                isForce3d: true,

            }
        }

        const burst = new Burst(SWIRL_OPTS);
        const burst2 = new Burst(_.assign({}, SWIRL_OPTS, { children: _.assign({}, SWIRL_OPTS.children, { delay: 'rand(1000, 1500)' }) }));
        this.timeline.add(burst, burst2);

    }
}

class MusicNote1 extends CustomShape {
    getShape() {
        return `<ellipse transform="matrix(0.9292 -0.3696 0.3696 0.9292 -9.2456 3.4187)" class="st0" cx="4.3" cy="25.8" rx="4.5" ry="2.8"/>
        <path class="st0" d="M7.6,1.3v22.9l1,0.6V1.3H7.6z"/>`;
    }
}

class MusicNote2 extends CustomShape {
    getShape() {
        return `<ellipse transform="matrix(0.9292 -0.3696 0.3696 0.9292 -10.6246 13.2944)" class="st0" cx="29.4" cy="34.4" rx="6.3" ry="3.9"/>
    <path class="st0" d="M34,0v32.2l1.5,0.9V0H34z"/>
    <ellipse transform="matrix(0.9292 -0.3696 0.3696 0.9292 -12.2584 4.7763)" class="st0" cx="6.3" cy="34.4" rx="6.3" ry="3.9"/>
    <path class="st0" d="M10.9,0v32.2l1.5,0.9V0H10.9z"/>
    <ellipse transform="matrix(0.9292 -0.3696 0.3696 0.9292 -8.9027 22.2962)" class="st0" cx="53.7" cy="34.4" rx="6.3" ry="3.9"/>
    <path class="st0" d="M58.3,0v32.2l1.5,0.9V0H58.3z"/>
    <rect x="12.4" y="0" class="st0" width="45.9" height="5.5"/>
    <rect x="35.4" y="8.5" class="st0" width="22.9" height="3.2"/>`;
    }
}

class MusicNote3 extends CustomShape {
    getShape() {
        return `<path class="st0" d="M2.5,51.8V1.6L0.2,0.2v51.6H2.5z"/>
<path class="st0" d="M2.6,51.8c11.4-7.4,20.6-29.2,0-17.3v1.8c7.6-5.3,17-0.5-0.7,14.4C2.6,50.7,2.6,51.8,2.6,51.8z"/>`;
    }
}

class MusicNote4 extends CustomShape {
    getShape() {
        return `<ellipse transform="matrix(0.9292 -0.3696 0.3696 0.9292 -14.7574 5.5069)" class="st0" cx="7" cy="41.3" rx="6.8" ry="4.2"/>
	<path class="st0" d="M13.5,39.8V6.9c2.2,2.2,8.1,7.4,5,15.6c6.8-12.1-5.6-15.8-6.6-22.4v38.8L13.5,39.8z"/>
	<path class="st0" d="M13.5,18.5c2.2,2.2,8.1,7.4,5,15.6c5.5-9.8-1.6-14.1-5-18.8V18.5z"/>`;
    }
}