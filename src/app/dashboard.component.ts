import { Component, OnInit } from "@angular/core";
import Hero from './hero';
import HeroService from './hero.service';

@Component({
    selector: "my-dashboard",
    templateUrl: 'app/dashboard.component.html'
})

export default class DashboardComponent {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
        .then( ( heroes: Hero[] ) => this.heroes = heroes.slice(1, 5));
    }
}