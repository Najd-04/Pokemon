import { Component, inject } from '@angular/core';
import { ApiPostService } from '../../services/api-post.service';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css',
})
export class PokemonsComponent {
  constructor() {
    this.loadPokemons();
  }

  pokemonService: ApiPostService = inject(ApiPostService);
  pokemons: any;
  loadPokemons(): void {
    this.pokemonService.fetchPokemons().subscribe({
      next: (pokemons: any) => {
        console.log('pokemons are successfully loaded');
        this.pokemons = pokemons.results;
      },
      error: (error: any) => {
        console.log('Some error happenned');
        console.error(error);
      },
    });
  }

  // pokemons: Pokemon[] | [] = [];
  //   constructor(private readonly apiPostService: ApiPostService){
  // this.pokemons = apiPostService.getPokemons()
  //   }

  //   countPokemons(): number {
  //     return this.pokemons.length;
  //   }
}
