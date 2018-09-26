import { Component } from '@angular/core';
import { LugaresServices } from '../services/lugares.services';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html',
    animations: [
        trigger('contenedorAnimable', [
            state('inicial', style({
                opacity: 0
            })),
            state('final', style({
                opacity: 1
            })),
            transition('inicial => final', animate(2000)),
            transition('final => inicial', animate(1000))
        ])
    ]
})
export class LugaresComponent {
    title = 'PlatziSquare';
    log = '';
    state = 'inicial';
    
    lat:number = 4.6560663;
    lng:number = -74.0595918;
    lugares = null
    animar() {
        this.state = (this.state === 'final') ? 'inicial' : 'final';
    }
    animacionInicia(e){
        console.log('Iniciado');
        console.log(e);
    }
    animacionTermina(e){
        console.log('Terminado');
        console.log(e);
    }
    constructor(private lugaresServices : LugaresServices){
        lugaresServices.getLugares()            
            .subscribe( (lugares) => {
                this.lugares = lugares;
                var me = this;
                this.lugares = Object.keys(me.lugares).map((key) => me.lugares[key]);
                this.state = 'final';
            }, (error) => {
                alert('Tenemos dificultadas con este servicio ' + error.statusText);
                this.log = 'Tenemos dificultadas con este servicio ' + error.statusText;
            });
    }
}
