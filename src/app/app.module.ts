import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MojsInit } from './shapes/mo-js.init';
import { HeaderLeftComponent } from './components/header-left/header-left.component';
import { HeaderRightComponent } from './components/header-right/header-right.component';
import { ChandelierComponent } from './components/chandelier/chandelier.component';
import { TicketComponent } from './components/ticket/ticket.component';

import { PagesModule } from './pages/pages/pages.module';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';

@NgModule({
	declarations: [
		AppComponent,
		HeaderLeftComponent,
		HeaderRightComponent,
		ChandelierComponent,
		TicketComponent
	],
	imports: [
		BrowserModule,
		RouterModule,
		FormsModule,
		HttpModule,
		JsonpModule,
		PagesModule,
		AppRoutingModule
	],
	providers: [MojsInit],
	bootstrap: [AppComponent]
})
export class AppModule {}
