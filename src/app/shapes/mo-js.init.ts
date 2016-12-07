import { Injectable } from "@angular/core";
import { HeaderItemLeft } from './border-left-shape';

import { HeaderItemRight } from './border-right-shape';

@Injectable()
export class MojsInit {

    headerItemLeft: HeaderItemLeft;
    headerItemRight: HeaderItemRight;
    
    init() {
        // this.headerItemLeft = new HeaderItemLeft();
        // this.headerItemRight = new HeaderItemRight();
    }
}