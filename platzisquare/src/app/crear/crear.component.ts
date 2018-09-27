import { LugaresServices } from '../services/lugares.services';
import { Component } from'@angular/core';
import { ActivatedRoute } from"@angular/router"
import { Observable }  from"rxjs"
import * as Rx from'rxjs';
import { FormControl } from"@angular/forms"
import {Http} from'@angular/http'
import { switchMap, map } from'rxjs/operators';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent{
	lugar:any = {}
	id:any = null;
	results$: Observable<any>;
	private searchField: FormControl;
    constructor(private lugaresService: LugaresServices, private route: ActivatedRoute, private http:Http){
        this.id = this.route.snapshot.params['id'];
        if(this.id != 'new'){
            this.lugaresService.getLugar(this.id)
            	.valueChanges()
                .subscribe((lugar)=>{
                    this.lugar = lugar;
                });
        }
        const _URL = 'https://maps.googleapis.com/maps/api/geocode/json'
        this.searchField = new FormControl()
        this.results$  = this.searchField.valueChanges
        	.pipe(
        		switchMap(query => this.http.get(`${_URL}?address=${query}&key=AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0`))
        		,map(response => response.json().results)

        	);
        this.results$.subscribe()
    }
	guardarLugar() {
		var direccion = this.lugar.direccion+','+this.lugar.ciudad+','+this.lugar.pais
		this.lugaresService.obtenerGeodata(direccion)
		    .subscribe((result)=>{
		    	this.lugar.lat = result.json().results[0].geometry.location.lat
		    	this.lugar.lng = result.json().results[0].geometry.location.lng
				if(this.id != 'new'){
					this.lugaresService.editarLugar(this.lugar)
					alert('exito al editar')
				}else{
					alert(this.lugar.id);
					this.lugaresService.guardarLugar(this.lugar)
					alert('exito al guardar')
				}
				this.lugar = {}
		    })
	}
}