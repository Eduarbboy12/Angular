import { LugaresServices } from './../services/lugares.services';
import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent {
    id = null
    lugar : any = {};
    constructor(private route: ActivatedRoute, private lugaresServices : LugaresServices){
        this.id = this.route.snapshot.params['id'];
        this.lugar = this.lugaresServices.buscarLugar(this.id);
    }
}