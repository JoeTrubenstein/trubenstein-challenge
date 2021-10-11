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
	public todos: any;
	public activeTasks: any;
	public newTodo!: string;
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
			this.getTodos(this.path);
		});
	}

	addTodo() {
		this.emailsService
			.add({ title: this.newTodo, isDone: false })
			.then(() => {
				return this.getTodos();
			})
			.then(() => {
				this.newTodo = ""; // clear input form value
			});
	}

	getTodos(query = "") {
		return this.emailsService.get(query).then(todos => {
			this.todos = todos;
			this.activeTasks = this.todos.filter((todo: { isDone: any }) => !todo.isDone).length;
		});
	}

	updateTodo(todo: { title: any; editing: boolean }, newValue: any) {
		todo.title = newValue;
		return this.emailsService.put(todo).then(() => {
			todo.editing = false;
			return this.getTodos();
		});
	}

	destroyTodo(todo: any) {
		this.emailsService.delete(todo).then(() => {
			return this.getTodos();
		});
	}

	clearCompleted() {
		this.emailsService.deleteCompleted().then(() => {
			return this.getTodos();
		});
	}

   flagSelected() {
		this.emailsService.flagSelected()
			return this.getTodos();
	}

  flagTodo(todo: any) {
		this.emailsService.flag(todo).then(() => {
			return this.getTodos();
		});
	}

	toggleTodo(todo: any) {
		this.emailsService.toggle(todo).then(() => {
			return this.getTodos();
		});
	}
}
