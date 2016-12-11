import { Component, ViewEncapsulation, OnInit, ElementRef } from '@angular/core';
import { Ticket } from './../../shapes/ticket-shape';
@Component({
  selector: 'c-ticket',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  ticket: Ticket;
  ticketHorizontal: Ticket;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.ticket = new Ticket(this.el.nativeElement.querySelector('.ticketVertical'),this.el.nativeElement.querySelector('.ticketHorizontal'))
  }

  openTicket() {
    this.ticket.open();
    console.log('open!');
  }

}
