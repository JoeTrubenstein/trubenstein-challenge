import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";

@Component({
	selector: "app-products",
	templateUrl: "./products.component.html",
	styleUrls: ["./products.component.css"]
})
export class ProductsComponent {

	/** Based on the screen size, switch from standard to one column per row */
	
	// Variables for pipe logic
	public query: any = "";
	SortDirection = "asc";
	SortbyParam = "";

	onSortDirectionHigh() {
		this.SortDirection = "desc";
	}
	onSortDirectionLow() {
		this.SortDirection = "asc";
	}

	// If there's time, find out if this is best practice for creating responsive view
	// Feels strange to hard code duplicate data sets
	cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
		map(({ matches }) => {
			if (matches) {
				return [
					{ title: "Canon 23432", image: "https://source.unsplash.com/W2Dta_Yiwfw", description: "スキルレベル	初級者", price: 30000, cols: 4, rows: 1 },
					{ title: "Canon 65433", image: "https://source.unsplash.com/kSmTaltv9KU", description: "スキルレベル	初級者", price: 74000, cols: 4, rows: 1 },
					{ title: "Canon 96738", image: "https://source.unsplash.com/gGgoDJRD2WM", description: "スキルレベル	初級者", price: 45000, cols: 4, rows: 1 },
					{ title: "Canon 58373", image: "https://source.unsplash.com/PEZ3C-1DNe8", description: "スキルレベル	初級者", price: 36000, cols: 4, rows: 1 }
				];
			}

			return [
				{ title: "Canon 23432", image: "https://source.unsplash.com/XzL8YAWdirE", description: "スキルレベル	初級者", price: 30000, cols: 1, rows: 1 },
				{ title: "Canon 65433", image: "https://source.unsplash.com/kSmTaltv9KU", description: "スキルレベル	初級者", price: 74000, cols: 1, rows: 1 },
				{ title: "Canon 96738", image: "https://source.unsplash.com/gGgoDJRD2WM", description: "スキルレベル	初級者", price: 45000, cols: 1, rows: 1 },
				{ title: "Canon 58373", image: "https://source.unsplash.com/PEZ3C-1DNe8", description: "スキルレベル	初級者", price: 36000, cols: 1, rows: 1 }
			];
		})
	);

	constructor(private breakpointObserver: BreakpointObserver) {}
}
