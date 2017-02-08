import { Component, OnInit } from '@angular/core';
import Hero from './hero';
import HeroService from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: [ 'app/heroes.component.css']
})

export default class HeroesComponent implements OnInit {
    name = 'Angular';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
        .then( ( heroes: Hero[] ) => this.heroes = heroes );
    }
    onSelectHero( hero: Hero ): void {
        this.selectedHero = hero;
    }
    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
