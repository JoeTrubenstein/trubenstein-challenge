import { TestBed } from '@angular/core/testing';
import { MatFormField } from '@angular/material/form-field';
import { MatGridTile } from '@angular/material/grid-list';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { EmailsComponent } from './features/emails/emails.component';
import { NavComponent } from './features/nav/nav.component';
import { UserComponent } from './features/user/user.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        EmailsComponent,
        UserComponent,
        AppComponent,
        NavComponent,
        OrderByPipe,
        SearchFilterPipe,
        MatGridTile,
        MatFormField
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'trubenstein-challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('trubenstein-challenge');
  });

  
  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('trubenstein-challenge app is running!');
  // });
});
