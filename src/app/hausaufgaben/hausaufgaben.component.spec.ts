import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HausaufgabenComponent} from './hausaufgaben.component';

describe('HausaufgabenComponent', () => {
    let component: HausaufgabenComponent;
    let fixture: ComponentFixture<HausaufgabenComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HausaufgabenComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HausaufgabenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
