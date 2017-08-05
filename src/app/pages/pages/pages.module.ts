import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeddingInfoComponent } from './wedding-info/wedding-info.component';
import { WeddingAccomodationComponent } from './wedding-accomodation/wedding-accomodation.component';
import { WeddingTravelComponent } from './wedding-travel/wedding-travel.component';
import { RsvpDefaultComponent } from './rsvp-default/rsvp-default.component';
import { FormsModule } from '@angular/forms';
import { WeddingFaqComponent } from './wedding-faq/wedding-faq.component';
import { RsvpAftersComponent } from './rsvp-afters/rsvp-afters.component';
import { RvspPlusoneComponent } from './rvsp-plusone/rvsp-plusone.component';


@NgModule({
	imports: [CommonModule, FormsModule],
	declarations: [WeddingInfoComponent, WeddingAccomodationComponent, WeddingTravelComponent, RsvpDefaultComponent, WeddingFaqComponent, RsvpAftersComponent, RvspPlusoneComponent],
	exports: [WeddingInfoComponent, WeddingAccomodationComponent, WeddingTravelComponent, RsvpDefaultComponent, WeddingFaqComponent]
})
export class PagesModule {}
