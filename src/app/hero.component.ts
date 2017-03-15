import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import {Router} from '@angular/router';
@Component({
  selector: 'my-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})


export class HeroComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroservice: HeroService, private router: Router,) { }

  getHeroes(): void {
    this.heroservice.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  oneSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}
}
