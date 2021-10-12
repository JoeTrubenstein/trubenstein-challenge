import { OrderByPipe } from './order-by.pipe';
import { waitForAsync, TestBed } from '@angular/core/testing';
import { MatGridTile } from '@angular/material/grid-list';

describe('OrderByPipe', () => {

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MatGridTile],
      imports: [

      ]
    }).compileComponents();
  }));


  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });
});
