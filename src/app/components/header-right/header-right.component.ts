import { Component, OnInit, ElementRef } from '@angular/core';
import { HeaderItemRight} from './../../shapes/border-right-shape';

@Component({
  selector: 'c-header-right',
  templateUrl: './header-right.component.html',
  styleUrls: ['./header-right.component.scss']
})
export class HeaderRightComponent implements OnInit {
  headerRightItem: HeaderItemRight;
  
  constructor(private el: ElementRef) {
    
  }

  ngOnInit() {
    this.headerRightItem = new HeaderItemRight(this.el.nativeElement.querySelector('.shape_container'));
  }

}
