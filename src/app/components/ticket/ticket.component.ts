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
	host: {
		'[class.open]': 'ticketIsOpen',
	},
	styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

	private mailChimpUrl = 'http://wilandpatrickwedding.us14.list-manage.com/subscribe/post-json';

	ticket: Ticket;
	ticketHorizontal: Ticket;
	ticketIsOpen: boolean = false;

	model = new MailchimpModel('', '', '', '', '');

	isSubmitted: boolean = false;
	isValidSubmit: boolean = false;
	isInvalidSubmit: boolean = false;

	defaultValue = "Save";
	constructor(
		private http: Jsonp,
		private el: ElementRef
	) { }

	ngOnInit() {
		this.ticket = new Ticket(this.el.nativeElement.querySelector('.ticketVertical'), this.el.nativeElement.querySelector('.ticketHorizontal'))
	}

	openTicket() {
		if (this.ticketIsOpen) {
			return;
		}
		this.ticket.open();
		this.ticketIsOpen = true;
	}

	onSubmit(form: NgForm) {
		let formData = form.form.value;
		formData.u = '9c094231e20a57997f234dd79';
		formData.id = '8c27d4ca67';
		formData.subscribe = 'Subscribe';
		this.isSubmitted = true;
		this.isInvalidSubmit = false;
		this.isValidSubmit = false;
		const url = this.mailChimpUrl + this.jsonToQueryString(formData) + '&c=JSONP_CALLBACK';
		this.http.get(url).subscribe((next) => {
			const res = next.json();
			if (res.result === 'error') {
				this.isInvalidSubmit = true;
				this.isSubmitted = false;
				this.defaultValue = 'Try Again.';
			} else {
				this.defaultValue = 'Thanks!';
				this.isValidSubmit = true;
			}
		}, (err) => { console.log(err); });
	}

	jsonToQueryString(json) {
		return '?' +
			Object.keys(json).map(function (key) {
				return encodeURIComponent(key) + '=' +
					encodeURIComponent(json[key]);
			}).join('&');
	}

}
