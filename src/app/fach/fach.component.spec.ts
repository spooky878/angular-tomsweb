import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FachComponent} from './fach.component';

describe('FachComponent', () => {
    let component: FachComponent;
    let fixture: ComponentFixture<FachComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FachComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FachComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
