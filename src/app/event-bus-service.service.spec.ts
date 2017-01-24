/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventBusServiceService } from './event-bus-service.service';

describe('EventBusServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventBusServiceService]
    });
  });

  it('should ...', inject([EventBusServiceService], (service: EventBusServiceService) => {
    expect(service).toBeTruthy();
  }));
});
