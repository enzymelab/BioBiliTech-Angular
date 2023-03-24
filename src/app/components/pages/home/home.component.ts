import { FoodService } from './../../../services/food.service';
import { Antibody } from './../../../shared/models/food';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  antibodies: Antibody[] = [];
  constructor(private foodService: FoodService) {
    this.antibodies = foodService.getAll();
  }

}
