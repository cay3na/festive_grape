import { TestBed } from '@angular/core/testing';

import { PostmanService } from './postman.service';

describe('PostmanService', () => {
  let service: PostmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostmanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
