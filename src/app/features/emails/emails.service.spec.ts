import { TestBed } from '@angular/core/testing';
import { MatToolbar } from '@angular/material/toolbar';
import { EmailsComponent } from './emails.component';

import { EmailsService } from './emails.service';

describe('EmailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations:[
      EmailsComponent,MatToolbar
    ]
  }));

  it('should be created', () => {
    const service: EmailsService = TestBed.get(EmailsService);
    expect(service).toBeTruthy();
  });
});