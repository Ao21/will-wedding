import { Component, OnInit, HostBinding } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Jsonp, Headers, RequestOptions } from '@angular/http';

export class Address {
	constructor(
		public addr1: string = '',
		public addr2: string = '',
		public city: string = '',
		public state: string = '',
		public zip: string = '',
		public country: string = '74'
	) {}
}

export class RSVPModel {
	private mailChimpUrl = 'http://wilandpatrickwedding.us14.list-manage.com/subscribe/post-json';

	constructor(
		public EMAIL: string = '',
		public FNAME: string = '',
		public LNAME: string = '',
		public NAMEPLUS1: string = '',
		public PHONE: string = '',
		public ADDRESS: Address = new Address(),
		public FMUSICAL: string = '',
		public DIETARY: string = ''
	) {}
}

@Component({
	selector: 'rvsp-plusone',
	templateUrl: './rvsp-plusone.component.html',
	styleUrls: ['./rvsp-plusone.component.scss']
})
export class RvspPlusoneComponent implements OnInit {
	@HostBinding('attr.id') id = 'rsvp';
	private mailChimpUrl = 'http://wilandpatrickwedding.us14.list-manage.com/subscribe/post-json';
	model = new RSVPModel();
	isComplete = false;
	isLoading = false;

	constructor(private http: Jsonp) {}

	ngOnInit() {}

	onSubmit(form: any) {
		const formData = form.form.value;
		formData['ADDRESS[zip]'] = '00000';
		formData.u = '9c094231e20a57997f234dd79';
		formData.id = 'd9e2324576';
		formData.subscribe = 'Subscribe';
		const url =
			this.mailChimpUrl +
			this.jsonToQueryString(formData) +
			'&c=JSONP_CALLBACK';

		this.isLoading = true;
		this.http.get(url).subscribe(next => {
			const res = next.json();
			this.isComplete = true;
		});
	}

	jsonToQueryString(json) {
		return (
			'?' +
			Object.keys(json)
				.map(function(key) {
					return (
						encodeURIComponent(key) +
						'=' +
						encodeURIComponent(json[key])
					);
				})
				.join('&')
		);
	}
}
