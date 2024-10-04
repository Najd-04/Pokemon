import { inject, Injectable } from '@angular/core';
import { Pokemon } from '../types/pokemon';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

const BASE_URL = environment.apiGeneration;
const POK_URL = environment.apiPokemon;
@Injectable({
  providedIn: 'root',
})
export class ApiPostService {

  private http = inject(HttpClient);

  fetchGenerations(): any {
    return this.http.get(BASE_URL);
  }
  
  fetchPokemons(): any {
    return this.http.get(POK_URL);
  }
}
// private pokemons: Pokemon[] = [
//   {
//     id: 1,
//     nom: 'Bulbizarre',
//     categorie: 'graine',
//     type: 'plante et poison',
//     taille: '70 centimètres',
//     poids: '6,9 kilogrammes',
//     image: 'https://www.pokepedia.fr/images/e/ef/Bulbizarre-RFVF.png',
//   },
//   {
//     id: 2,
//     nom: 'Herbizarre',
//     categorie: 'graine',
//     type: 'plante et poison',
//     taille: '1 mètre',
//     poids: '13 kilogrammes',
//     image: 'https://www.pokepedia.fr/images/4/44/Herbizarre-RFVF.png',
//   },
//   {
//     id: 3,
//     nom: 'Florizarre',
//     categorie: 'graine',
//     type: 'plante et poison',
//     taille: '2 mètres',
//     poids: '100 kilogrammes',
//     image: 'https://www.pokepedia.fr/images/4/42/Florizarre-RFVF.png',
//   },
//   {
//     id: 4,
//     nom: 'Salamèche',
//     categorie: 'lézard',
//     type: 'feu',
//     taille: '60 centimètres',
//     poids: '8,5 kilogrammes',
//     image: 'https://www.pokepedia.fr/images/8/89/Salam%C3%A8che-RFVF.png',
//   },
//   {
//     id: 5,
//     nom: 'Reptincel',
//     categorie: 'flamme',
//     type: 'feu',
//     taille: '1,1 mètre',
//     poids: '19 kilogrammes',
//     image: 'https://www.pokepedia.fr/images/6/64/Reptincel-RFVF.png',
//   },
//   {
//     id: 6,
//     nom: 'Dracaufeu',
//     categorie: 'flamme',
//     type: 'feu et vol',
//     taille: '1,7 mètre',
//     poids: '90,5 kilogrammes',
//     image: 'https://www.pokepedia.fr/images/1/17/Dracaufeu-RFVF.png',
//   },
// ];
// getPokemons(): Pokemon[] {
//   return this.pokemons;
// }
