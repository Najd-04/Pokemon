import { Component, inject } from '@angular/core';
import { ApiPostService } from '../../services/api-post.service';

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.css',
})
export class GenerationsComponent {

  constructor(){
    this.loadGenerations();
  }

  generationService: ApiPostService = inject(ApiPostService);
  generations: any;
  loadGenerations(): void {
    this.generationService.fetchGenerations().subscribe({
      next: (generations: any) => {
        console.log('generation are successfully loaded');
        this.generations = generations.results;
      },
      error: (error: any) => {
        console.log('Some error happenned');
        console.error(error);
      },
    });
  }
}
