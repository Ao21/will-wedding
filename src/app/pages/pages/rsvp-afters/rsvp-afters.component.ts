import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Jsonp, Headers, RequestOptions } from '@angular/http';

export class RSVPModel {

	private mailChimpUrl = 'http://wilandpatrickwedding.us14.list-manage.com/subscribe/post-json';

	constructor(
		public EMAIL: string = '',
		public FNAME: string = '',
		public LNAME: string = '',
		public PHONE: string = '',
	) { }
}

@Component({
	selector: 'rsvp-afters',
	templateUrl: './rsvp-afters.component.html',
	styleUrls: ['./rsvp-afters.component.scss']
})
export class RsvpAftersComponent implements OnInit {
  private mailChimpUrl = 'http://wilandpatrickwedding.us14.list-manage.com/subscribe/post-json';
	model = new RSVPModel();

	constructor(
		private http: Jsonp,
	) {
	}

	ngOnInit() {
	}

	onSubmit(form: any) {
		const formData = form.form.value;
		formData['ADDRESS[zip]'] = '00000';
		formData.u = '9c094231e20a57997f234dd79';
		formData.id = 'c20fcf1fe2';
		formData.subscribe = 'Subscribe';
		const url = this.mailChimpUrl + this.jsonToQueryString(formData) + '&c=JSONP_CALLBACK';

		this.http.get(url).subscribe((next) => {
			const res = next.json();
			console.log(res);
		});
	}

	jsonToQueryString(json) {
		return '?' +
			Object.keys(json).map(function (key) {
				return encodeURIComponent(key) + '=' +
					encodeURIComponent(json[key]);
			}).join('&');
	}
}
