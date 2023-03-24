import { sample_antibody } from './../../data';
import { Antibody } from './../shared/models/food';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Antibody[] {
    return sample_antibody;
  }
}
