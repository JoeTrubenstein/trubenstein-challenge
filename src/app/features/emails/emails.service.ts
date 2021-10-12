import { Injectable } from "@angular/core";

let EMAILS = [
	{ title: "Angular sure has a steep learning curve!", isRead: false, isFlagged: false },
	{ title: "This is was very challenging", isRead: false, isFlagged: false },
	{ title: "But I still had a lot of fun", isRead: false, isFlagged: false },
	{ title: "Thank you for giving me a chance!", isRead: false, isFlagged: false }
];

@Injectable({
	providedIn: "root"
})
export class EmailsService {
	constructor() {}

	get(query = "") {
		return new Promise(resolve => {
			let data;

			if (query === "completed" || query === "active") {
				const isCompleted = query === "completed";
				data = EMAILS.filter(email => email.isRead === isCompleted);
			} else {
				data = EMAILS;
			}
			// console.log(EMAILS) console log from here during degug
			resolve(data);
		});
	}


	delete(selected: { title: string; isRead: boolean }) {
		return new Promise(resolve => {
			const index = EMAILS.findIndex(email => email === selected);
			EMAILS.splice(index, 1);
			resolve(true);
		});
	}

	deleteCompleted() {
		return new Promise(resolve => {
			EMAILS = EMAILS.filter(email => !email.isRead);
			resolve(EMAILS);
		});
	}

	toggle(selected: { isRead: boolean }) {
		selected.isRead = !selected.isRead;
		return Promise.resolve();
	}

	flag(selected: { isFlagged: boolean }) {
		selected.isFlagged = !selected.isFlagged;
		return Promise.resolve();
	}

	// This for loop feels out of place here
	// See if there's a better way to do this in angular if there's time
	flagSelected() {
		for (let i = 0; i < EMAILS.length; i++) {
			if (EMAILS[i].isRead == true && EMAILS[i].isFlagged == false) {
				EMAILS[i].isFlagged = true;
			}
			 else if (EMAILS[i].isRead == true && EMAILS[i].isFlagged == true) {
				EMAILS[i].isFlagged = false;
			}
		}
	}

    // Remaining CRUD operations

		// add(data: any) {
	// 	return new Promise(resolve => {
	// 		EMAILS.push(data);
	// 		resolve(data);
	// 	});
	// }

	// put(changed: any) {
	// 	return new Promise(resolve => {
	// 		const index = EMAILS.findIndex(email => email === changed);
	// 		EMAILS[index].title = changed.title;
	// 		resolve(changed);
	// 	});
	// }
	
}
