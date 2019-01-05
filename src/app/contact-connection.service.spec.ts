import { TestBed } from '@angular/core/testing';

import { ContactConnectionService } from './contact-connection.service';

describe('ContactConnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactConnectionService = TestBed.get(ContactConnectionService);
    expect(service).toBeTruthy();
  });
});
