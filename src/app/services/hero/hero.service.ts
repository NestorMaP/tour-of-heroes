import { Injectable } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../mocks/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add(`HeroService: Heroes fetched.`);
    return heroes;
  }
}
