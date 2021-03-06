import { Component, OnInit, ElementRef } from '@angular/core';
import { HeaderItemRight } from './../../shapes/border-right-shape';
import { HeaderItemTopLeft } from './../../shapes/border-top--left-shape';
import { MusicNotes } from './../../shapes/note-shapes';

@Component({
  selector: 'c-header-right',
  templateUrl: './header-right.component.html',
  styleUrls: ['./header-right.component.scss']
})
export class HeaderRightComponent implements OnInit {
  headerRightItem: HeaderItemRight;
  headerItemTopLeft: HeaderItemTopLeft;
   musicNotes: MusicNotes;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    this.headerRightItem = new HeaderItemRight(this.el.nativeElement.querySelector('.shape_container'));
    this.headerItemTopLeft = new HeaderItemTopLeft(this.el.nativeElement.querySelector('.sub_shape_container'))
    this.musicNotes = new MusicNotes(this.el.nativeElement.querySelector('.notes_container'))
  }

}
