import { Injectable } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(
    private messageService: MessageService,
    private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    this.log(`HeroService: Heroes fetched.`);
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.log(`HeroService: Hero fetched with id=${id}.`);
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`);
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
