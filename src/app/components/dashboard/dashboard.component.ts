import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero/hero.service';
import { RouterLink, RouterModule } from '@angular/router';
import { HeroSearchComponent } from "../hero-search/hero-search.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule, RouterLink,
    HeroSearchComponent
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 4));
  }
}
