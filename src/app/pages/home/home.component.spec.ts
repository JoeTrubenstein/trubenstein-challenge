import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatGridList, MatGridTile } from "@angular/material/grid-list";
import { MatIcon } from "@angular/material/icon";
import { MatSidenavContent } from "@angular/material/sidenav";
import { MatToolbar } from "@angular/material/toolbar";
import { EmailsComponent } from "src/app/features/emails/emails.component";
import { TasksComponent } from "src/app/features/tasks/tasks.component";

import { HomeComponent } from "./home.component";

describe("HomeComponent", () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HomeComponent, TasksComponent, MatGridList, MatGridTile, MatIcon, MatToolbar, MatSidenavContent, EmailsComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
