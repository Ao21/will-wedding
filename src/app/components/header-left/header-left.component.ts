import { Component, OnInit, ElementRef } from '@angular/core';
import { HeaderItemLeft } from './../../shapes/border-left-shape';
import { HeaderItemTopLeft } from './../../shapes/border-top--left-shape';

@Component({
  selector: 'c-header-left',
  templateUrl: './header-left.component.html',
  styleUrls: ['./header-left.component.scss']
})
export class HeaderLeftComponent implements OnInit {
  headerLeftItem: HeaderItemLeft;
  headerItemTopLeft: HeaderItemTopLeft

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    this.headerLeftItem = new HeaderItemLeft(this.el.nativeElement.querySelector('.shape_container'));
    this.headerItemTopLeft = new HeaderItemTopLeft(this.el.nativeElement.querySelector('.sub_shape_container'))
  }

}
