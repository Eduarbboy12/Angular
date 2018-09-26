import { Injectable } from "@angular/core";

@Injectable()

export class PlaceServices {
    places = [{
        id: 1,
        name: 'Platzi'
    }, {
        id: 1,
        name: 'Zapateria'
    }];

    getPlaces(){
        return this.places;
    }
}