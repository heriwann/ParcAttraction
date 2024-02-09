import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AccueilComponent } from '../accueil/accueil.component';

@Component({
  selector: 'app-critique',
  standalone: true,
  imports: [MatCardModule,AccueilComponent],
  templateUrl: './critique.component.html',
  styleUrl: './critique.component.scss'
})
export class CritiqueComponent {

}
