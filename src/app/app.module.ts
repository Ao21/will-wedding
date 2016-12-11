import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MojsInit } from './shapes/mo-js.init';
import { HeaderLeftComponent } from './components/header-left/header-left.component';
import { HeaderRightComponent } from './components/header-right/header-right.component';
import { ChandelierComponent } from './components/chandelier/chandelier.component';
import { TicketComponent } from './components/ticket/ticket.component';

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
    FormsModule,
    HttpModule
  ],
  providers: [
    MojsInit
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
