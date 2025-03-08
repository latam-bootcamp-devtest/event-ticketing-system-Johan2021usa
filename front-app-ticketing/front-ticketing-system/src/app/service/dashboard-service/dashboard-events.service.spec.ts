import { TestBed } from '@angular/core/testing';

import { DashboardEventsService } from './dashboard-events.service';

describe('DashboradEventsService', () => {
  let service: DashboardEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
