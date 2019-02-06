import { TestBed, async, inject } from '@angular/core/testing';

import { CantAccessGuard } from './cant-access.guard';

describe('CantAccessGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CantAccessGuard]
    });
  });

  it('should ...', inject([CantAccessGuard], (guard: CantAccessGuard) => {
    expect(guard).toBeTruthy();
  }));
});
