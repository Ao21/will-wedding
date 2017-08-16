import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { RsvpDefaultComponent } from './pages/pages/rsvp-default/rsvp-default.component';
import { RsvpAftersComponent } from './pages/pages/rsvp-afters/rsvp-afters.component';
import { RvspPlusoneComponent } from './pages/pages/rvsp-plusone/rvsp-plusone.component';

const APP_ROUTES: Routes = [
	{
		path: 'invite',
		component: RsvpDefaultComponent,
	},
	{
		path: 'rsvp',
		component: RsvpAftersComponent,
	},
	{
		path: 'invitation',
		component: RvspPlusoneComponent,
	},
	{ path: '**', component: RsvpDefaultComponent }
];

// export const routing: any = RouterModule.forRoot(APP_ROUTES);

@NgModule({
	imports: [RouterModule.forRoot(APP_ROUTES, { enableTracing: false })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
