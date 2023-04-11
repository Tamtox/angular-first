import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Hero } from '@/app/hero';
import { heroes } from '@/app/hero-list';
import { MessagesService } from '@/app/messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messagesService: MessagesService, private http: HttpClient) {}
  private heroesUrl = 'api/heroes';
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }
  getHero(id: number): Observable<Hero> {
    const heroUrl = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(heroUrl).pipe(
      tap((_) => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  private log(message: string) {
    this.messagesService.addMessage(`HeroService: ${message}`);
  }
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
}
