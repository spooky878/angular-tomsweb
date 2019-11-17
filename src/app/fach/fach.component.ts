import {Component, OnInit} from '@angular/core';
import {Fach} from '../fach';
import {TomService} from '../tom.service';

@Component({
    selector: 'app-fach',
    templateUrl: './fach.component.html',
    styleUrls: ['./fach.component.css']
})
export class FachComponent implements OnInit {

    faecher: Fach[] = [];
    neuesFach: Fach = new Fach();

    constructor(private tomService: TomService) {
    }

    ngOnInit() {
        this.ladeFaecher();
    }

    ladeFaecher(): void {
        this.tomService.getFaecher()
            .subscribe(faecher => this.faecher = faecher);
    }

    hinzufuegenFach(): void {
        this.tomService.addFach(this.neuesFach)
            .subscribe(fach => {
                this.faecher.push(fach);
                this.neuesFach = new Fach();
            });
    }

    loescheFach(fach: Fach): void {
        this.faecher = this.faecher.filter(f => f !== fach);
        this.tomService.deleteFach(fach).subscribe();
    }
}
