import { TestBed } from '@angular/core/testing';

import { LuxousRoomService } from './luxous-room.service';

describe('LuxousRoomService', () => {
  let service: LuxousRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuxousRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
