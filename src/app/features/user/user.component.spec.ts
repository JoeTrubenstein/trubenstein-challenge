import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatLabel } from '@angular/material/form-field';
import { MatGridTile } from '@angular/material/grid-list';
import { MatListItem } from '@angular/material/list';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent, MatListItem, MatLabel, MatGridTile ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
