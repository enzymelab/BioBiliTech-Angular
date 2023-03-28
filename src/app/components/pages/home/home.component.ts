import { AntibodyService } from '../../../services/antibody.service';
import { Antibody } from './../../../shared/models/food';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  antibodies: Antibody[] = [];
  constructor(private antibodyService: AntibodyService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.antibodies = this.antibodyService.getAllantibodiesBySearchTerm(params.searchTerm);
      else if (params.tag)
        this.antibodies = this.antibodyService.getAllAntibodiesByTag(params.tag);
      else
        this.antibodies = antibodyService.getAll();
    })

  }

}
