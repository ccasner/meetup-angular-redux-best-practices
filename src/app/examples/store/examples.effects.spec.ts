import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { ExamplesEffects } from './examples.effects';

describe('ExamplesService', () => {
  let actions$: Observable<any>;
  let effects: ExamplesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExamplesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ExamplesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
