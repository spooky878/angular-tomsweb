import {Fach} from './fach';

export class Aufgabe {
    id: number;
    titel: string;
    bemerkung: string;
    erledigt: boolean;
    fach: Fach;
    termin: string | Datum;
}

export class Datum {
    year: number;
    month: number;
    day: number;
}
