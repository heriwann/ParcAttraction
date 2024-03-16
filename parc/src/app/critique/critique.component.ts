import { Component } from '@angular/core';
import { AttractionService } from '../Service/attraction.service';
import { Observable } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-critique',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './critique.component.html',
  styleUrl: './critique.component.scss'
})
export class CritiqueComponent {
  constructor(public attractionService: AttractionService)
  {}
  
  public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttraction()

  public onSubmit(elt: any) {
    window.location.href = "/critique"
  }
}
