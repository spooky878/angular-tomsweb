import {Component, OnInit} from '@angular/core';
import {TomService} from '../tom.service';
import {Aufgabe} from '../aufgabe';
import {Fach} from '../fach';

@Component({
    selector: 'app-hausaufgaben',
    templateUrl: './hausaufgaben.component.html',
    styleUrls: ['./hausaufgaben.component.css']
})
export class HausaufgabenComponent implements OnInit {

    aufgaben: Aufgabe[] = [];
    faecher: Fach[] = [];
    neueAufgabe: Aufgabe = new Aufgabe();

    constructor(private tomService: TomService) {
    }

    ngOnInit() {
        this.ladeFaecher();
        this.ladeAufgaben();
    }

    ladeFaecher(): void {
        this.tomService.getFaecher()
            .subscribe(faecher => this.faecher = faecher);
    }

    ladeAufgaben(): void {
        this.tomService.getAufgaben()
            .subscribe(aufgaben => this.aufgaben = aufgaben);
    }

    hinzufuegenAufgabe(): void {
        if (this.neueAufgabe.termin && !(typeof this.neueAufgabe.termin === 'string')) {
            this.neueAufgabe.termin = this.neueAufgabe.termin.year + '-'
                + this.neueAufgabe.termin.month + '-' + this.neueAufgabe.termin.day;
        }
        this.tomService.addAufgabe(this.neueAufgabe)
            .subscribe(aufgabe => {
                this.aufgaben.push(aufgabe);
                this.neueAufgabe = new Aufgabe();
            });
    }

    speichereAufgabe(aufgabe: Aufgabe): void {
        if (aufgabe.termin && !(typeof aufgabe.termin === 'string') && !(typeof aufgabe.termin === 'number')) {
            console.log(aufgabe.termin);
            aufgabe.termin = aufgabe.termin.year + '-'
                + aufgabe.termin.month + '-' + aufgabe.termin.day;
        }
        this.tomService.updateAufgabe(aufgabe)
            .subscribe(response => {
            });
    }

    loescheAufgabe(aufgabe: Aufgabe): void {
        this.aufgaben = this.aufgaben.filter(f => f !== aufgabe);
        this.tomService.deleteAufgabe(aufgabe).subscribe();
    }

}
