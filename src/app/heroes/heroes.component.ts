import { Component } from '@angular/core';
import { Hero } from '@/app/hero';
import { HeroService } from '@/app/hero.service';
import { MessagesService } from '@/app/messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  constructor(private heroService: HeroService, private messageService: MessagesService) {}
  heroes: Hero[] = [];
  selectedHero?: Hero | null;
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
