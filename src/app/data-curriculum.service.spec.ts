import { TestBed } from '@angular/core/testing';

import { DataCurriculumService } from './data-curriculum.service';

describe('DataCurriculumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCurriculumService = TestBed.get(DataCurriculumService);
    expect(service).toBeTruthy();
  });
});
