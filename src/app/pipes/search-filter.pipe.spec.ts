import { SearchFilterPipe } from './search-filter.pipe';
import { waitForAsync, TestBed } from '@angular/core/testing';
import { MatGridTile } from '@angular/material/grid-list';
import { MatListItem } from '@angular/material/list';

describe('SearchFilterPipe', () => {

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MatGridTile, MatListItem],
      imports: [

      ]
    }).compileComponents();
  }));

  it('create an instance', () => {
    const pipe = new SearchFilterPipe();
    expect(pipe).toBeTruthy();
  });


});
