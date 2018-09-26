import { Component, OnInit } from '@angular/core';
import { PlaceServices } from './place.services';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
  providers: [PlaceServices]
})
export class PlaceComponent implements OnInit {

  places = [];

  constructor(private placeServices :PlaceServices ) {
    this.places = placeServices.getPlaces();
   }

  ngOnInit() {
  }

}
