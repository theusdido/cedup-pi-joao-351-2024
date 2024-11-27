import { TestBed } from '@angular/core/testing';

import { SpeechsynthesisService } from './speechsynthesis.service';

describe('SpeechsynthesisService', () => {
  let service: SpeechsynthesisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechsynthesisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
