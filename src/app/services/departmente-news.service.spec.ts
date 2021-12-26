import { TestBed } from '@angular/core/testing';

import { DepartmenteNewsService } from './departmente-news.service';

describe('DepartmenteNewsService', () => {
  let service: DepartmenteNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmenteNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
