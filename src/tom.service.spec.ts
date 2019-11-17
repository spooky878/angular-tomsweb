import {TestBed} from '@angular/core/testing';

import {TomService} from './tom.service';

describe('TomService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: TomService = TestBed.get(TomService);
        expect(service).toBeTruthy();
    });
});
