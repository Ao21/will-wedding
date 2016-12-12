import { Component, ViewEncapsulation, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Ticket } from './../../shapes/ticket-shape';
import { Jsonp, Headers, RequestOptions } from '@angular/http';

// action="//wilandpatrickwedding.us14.list-manage.com/subscribe/post?u=9c094231e20a57997f234dd79&amp;id=8c27d4ca67"
export class MailchimpModel {
  constructor(
    FNAME: string,
    LNAME: string,
    EMAIL: string,
    ADDRESS: string,
    TOWN: string
  ) { }
}

@Component({
  selector: 'c-ticket',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  private mailChimpUrl = 'http://wilandpatrickwedding.us14.list-manage.com/subscribe/post-json';

  ticket: Ticket;
  ticketHorizontal: Ticket;
  ticketIsOpen: boolean = false;

  model = new MailchimpModel('', '', '', '', '');

  constructor(
    private http: Jsonp,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.ticket = new Ticket(this.el.nativeElement.querySelector('.ticketVertical'), this.el.nativeElement.querySelector('.ticketHorizontal'))
  }

  openTicket() {
    this.ticket.open();
    this.ticketIsOpen = true;
  }

  onSubmit(form: NgForm) {
    let formData = form.form.value;
    formData.u = '9c094231e20a57997f234dd79';
    formData.id = '8c27d4ca67';
    formData.subscribe = 'Subscribe';
    console.log(formData);
    let url = this.mailChimpUrl + this.jsonToQueryString(formData) + '&c=JSONP_CALLBACK';
    this.http.get(url).subscribe((next) => { console.log(next) }, (err) => { console.log(err) });
  }

  jsonToQueryString(json) {
    return '?' +
      Object.keys(json).map(function (key) {
        return encodeURIComponent(key) + '=' +
          encodeURIComponent(json[key]);
      }).join('&');
  }

}
