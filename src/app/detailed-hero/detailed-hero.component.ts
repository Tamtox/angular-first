import { Component } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-detailed-hero',
  templateUrl: './detailed-hero.component.html',
  styleUrls: ['./detailed-hero.component.scss'],
})
export class DetailedHeroComponent {
  hero: Hero | null = null;
  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
}
