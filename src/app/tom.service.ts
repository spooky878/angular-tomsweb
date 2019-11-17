import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Fach} from './fach';
import {catchError, tap} from 'rxjs/operators';
import {Aufgabe} from './aufgabe';

@Injectable({
    providedIn: 'root'
})
export class TomService {
    private serverUrl = 'http://tomsweb.eu-central-1.elasticbeanstalk.com/tom';  // URL to web api
    // private serverUrl = 'http://localhost:8080/app-web/tom';  // URL to web api

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(
        private http: HttpClient) {
    }

    getFaecher(): Observable<Fach[]> {
        return this.http.get<Fach[]>(this.serverUrl + '/fach')
            .pipe(
                tap(_ => this.log('getFaecher')),
                catchError(this.handleError<Fach[]>('getFaecher', []))
            );
    }

    getFach(id: number): Observable<Fach> {
        const url = `${this.serverUrl}/fach/${id}`;
        return this.http.get<Fach>(url).pipe(
            tap(_ => this.log(`getFach id=${id}`)),
            catchError(this.handleError<Fach>(`getFach id=${id}`))
        );
    }

    addFach(fach: Fach): Observable<Fach> {
        return this.http.post<Fach>(this.serverUrl + '/fach', fach, this.httpOptions).pipe(
            tap((newFach: Fach) => this.log(`added Fach w/ id=${newFach.id}`)),
            catchError(this.handleError<Fach>('addFach'))
        );
    }

    deleteFach(fach: Fach | number): Observable<Fach> {
        const id = typeof fach === 'number' ? fach : fach.id;
        const url = `${this.serverUrl}/fach/${id}`;

        return this.http.delete<Fach>(url, this.httpOptions).pipe(
            tap(_ => this.log(`deleted fach id=${id}`)),
            catchError(this.handleError<Fach>('deleteFach'))
        );
    }

    updateFach(fach: Fach): Observable<any> {
        return this.http.put(this.serverUrl + '/fach', fach, this.httpOptions).pipe(
            tap(_ => this.log(`updated fach id=${fach.id}`)),
            catchError(this.handleError<any>('updateFach'))
        );
    }

    ///////
    getAufgaben(): Observable<Aufgabe[]> {
        return this.http.get<Aufgabe[]>(this.serverUrl + '/aufgabe')
            .pipe(
                tap(_ => this.log('getAufgaben')),
                catchError(this.handleError<Aufgabe[]>('getAufgaben', []))
            );
    }

    getAufgabe(id: number): Observable<Aufgabe> {
        const url = `${this.serverUrl}/aufgabe/${id}`;
        return this.http.get<Aufgabe>(url).pipe(
            tap(_ => this.log(`getAufgabe id=${id}`)),
            catchError(this.handleError<Aufgabe>(`getAufgabe id=${id}`))
        );
    }

    addAufgabe(aufgabe: Aufgabe): Observable<Aufgabe> {
        return this.http.post<Aufgabe>(this.serverUrl + '/aufgabe', aufgabe, this.httpOptions).pipe(
            tap((newAufgabe: Aufgabe) => this.log(`added Aufgabe w/ id=${newAufgabe.id}`)),
            catchError(this.handleError<Aufgabe>('addAufgabe'))
        );
    }

    deleteAufgabe(aufgabe: Aufgabe | number): Observable<Aufgabe> {
        const id = typeof aufgabe === 'number' ? aufgabe : aufgabe.id;
        const url = `${this.serverUrl}/aufgabe/${id}`;

        return this.http.delete<Aufgabe>(url, this.httpOptions).pipe(
            tap(_ => this.log(`deleted aufgabe id=${id}`)),
            catchError(this.handleError<Aufgabe>('deleteAufgabe'))
        );
    }

    updateAufgabe(aufgabe: Aufgabe): Observable<any> {
        return this.http.put(this.serverUrl + '/aufgabe', aufgabe, this.httpOptions).pipe(
            tap(_ => this.log(`updated aufgabe id=${aufgabe.id}`)),
            catchError(this.handleError<any>('updateAufgabe'))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        console.log(`TomService: ${message}`);
    }
}
