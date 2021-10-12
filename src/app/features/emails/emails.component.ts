import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { EmailsService } from "./emails.service";

@Component({
	selector: "app-emails",
	templateUrl: "./emails.component.html",
	styleUrls: ["./emails.component.css"],
	providers: [EmailsService]
})
export class EmailsComponent implements OnInit {
	public emails: any;
	public activeEmails: any;
	public newEmail!: string;
	public path: string | undefined;
  public query: any = "";

	constructor(private emailsService: EmailsService, private route: ActivatedRoute) {}

	status: boolean = false;
	clickEvent() {
		this.status = !this.status;
    console.log(this.status)
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.path = params["status"];
			this.getEmails(this.path);
		});
	}

	getEmails(query = "") {
		return this.emailsService.get(query).then(emails => {
			this.emails = emails;
			this.activeEmails = this.emails.filter((email: { isRead: any }) => !email.isRead).length;
		});
	}

	destroyEmail(email: any) {
		this.emailsService.delete(email).then(() => {
			return this.getEmails();
		});
	}

	clearCompleted() {
		this.emailsService.deleteCompleted().then(() => {
			return this.getEmails();
		});
	}

   flagSelected() {
		this.emailsService.flagSelected()
			return this.getEmails();
	}

  flagEmail(email: any) {
		this.emailsService.flag(email).then(() => {
			return this.getEmails();
		});
	}

	toggleEmail(email: any) {
		this.emailsService.toggle(email).then(() => {
			return this.getEmails();
		});
	}


	// Can add rest of CRUD functions below 
	
	// updateEmail(email: { title: any; editing: boolean }, newValue: any) {
	// 	email.title = newValue;
	// 	return this.emailsService.put(email).then(() => {
	// 		email.editing = false;
	// 		return this.getEmails();
	// 	});
	// }

	// addEmails() {
	// 	this.emailsService
	// 		.add({ title: this.newEmail, isDone: false })
	// 		.then(() => {
	// 			return this.getEmails();
	// 		})
	// 		.then(() => {
	// 			this.newEmail = ""; // clear input form value
	// 		});
	// }



}
