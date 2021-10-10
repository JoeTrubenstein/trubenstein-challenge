import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { TodoService } from "./todo.service";

@Component({
	selector: "app-todo",
	templateUrl: "./todo.component.html",
	styleUrls: ["./todo.component.css"],
	providers: [TodoService]
})
export class TodoComponent implements OnInit {
	public todos: any;
	public activeTasks: any;
	public newTodo!: string;
	public path: string | undefined;

	constructor(private todoService: TodoService, private route: ActivatedRoute) {}

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
		this.todoService
			.add({ title: this.newTodo, isDone: false })
			.then(() => {
				return this.getTodos();
			})
			.then(() => {
				this.newTodo = ""; // clear input form value
			});
	}

	getTodos(query = "") {
		return this.todoService.get(query).then(todos => {
			this.todos = todos;
			this.activeTasks = this.todos.filter((todo: { isDone: any }) => !todo.isDone).length;
		});
	}

	updateTodo(todo: { title: any; editing: boolean }, newValue: any) {
		todo.title = newValue;
		return this.todoService.put(todo).then(() => {
			todo.editing = false;
			return this.getTodos();
		});
	}

	destroyTodo(todo: any) {
		this.todoService.delete(todo).then(() => {
			return this.getTodos();
		});
	}

	clearCompleted() {
		this.todoService.deleteCompleted().then(() => {
			return this.getTodos();
		});
	}

  // flagSelected() {
	// 	this.todoService.flagSelected().then(() => {
	// 		return this.getTodos();
	// 	});
	// }

   flagSelected() {
		this.todoService.flagSelected()
			return this.getTodos();
	}



  flagTodo(todo: any) {
		this.todoService.flag(todo).then(() => {
			return this.getTodos();
		});
	}

	toggleTodo(todo: any) {
		this.todoService.toggle(todo).then(() => {
			return this.getTodos();
		});
	}
}
