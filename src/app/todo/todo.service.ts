import { Injectable } from "@angular/core";

let TODOS = [
	{ title: "Angular sure has a steep learning curve!", isDone: false, isFlagged: false },
	{ title: "This is was very challenging", isDone: false, isFlagged: false },
	{ title: "But I still had a lot of fun", isDone: false, isFlagged: false },
	{ title: "Thank you for giving me a chance!", isDone: false, isFlagged: false }
];

@Injectable({
	providedIn: "root"
})
export class TodoService {
	constructor() {}

	get(query = "") {
		return new Promise(resolve => {
			let data;

			if (query === "completed" || query === "active") {
				const isCompleted = query === "completed";
				data = TODOS.filter(todo => todo.isDone === isCompleted);
			} else {
				data = TODOS;
			}

			resolve(data);
		});
	}

	add(data: any) {
		return new Promise(resolve => {
			TODOS.push(data);
			resolve(data);
		});
	}

	put(changed: any) {
		return new Promise(resolve => {
			const index = TODOS.findIndex(todo => todo === changed);
			TODOS[index].title = changed.title;
			resolve(changed);
		});
	}

	delete(selected: { title: string; isDone: boolean }) {
		return new Promise(resolve => {
			const index = TODOS.findIndex(todo => todo === selected);
			TODOS.splice(index, 1);
			resolve(true);
		});
	}

	deleteCompleted() {
		return new Promise(resolve => {
			TODOS = TODOS.filter(todo => !todo.isDone);
			resolve(TODOS);
		});
	}

	toggle(selected: { isDone: boolean }) {
		selected.isDone = !selected.isDone;
		return Promise.resolve();
	}

	flag(selected: { isFlagged: boolean }) {
		selected.isFlagged = !selected.isFlagged;
		return Promise.resolve();
	}

	flagSelected() {
		for (let i = 0; i < TODOS.length; i++) {
			if (TODOS[i].isDone == true && TODOS[i].isFlagged == false) {
				TODOS[i].isFlagged = true;
			} else if (TODOS[i].isDone == true && TODOS[i].isFlagged == true) {
				TODOS[i].isFlagged = false;
			}
		}
	}
}
