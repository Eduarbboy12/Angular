import {Injectable} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {Http, Headers} from "@angular/http";
import { HttpClient, HttpHeaders } from'@angular/common/http'; 
import { map } from 'rxjs/operators'

@Injectable()
export class LugaresServices {
    API_ENDPOINT = 'https://platzisquare-ae3aa.firebaseio.com';
    lugares:any = [
        {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre:'Florería la Gardenia', descripcion:'¿Cómo configuro PhpStorm para que me importe automáticamente las dependencias, módulos, servicios? Tengo la versión 2017.2.4'},
        {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Donas la pasadita', descripcion:'¿Cómo configuro PhpStorm para que me importe automáticamente las dependencias, módulos, servicios? Tengo la versión 2017.2.4'},
        {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Veterinaria Huellitas Felices', descripcion:'¿Cómo configuro PhpStorm para que me importe automáticamente las dependencias, módulos, servicios? Tengo la versión 2017.2.4'},
        {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre:'Sushi Suhiroll', descripcion:'¿Cómo configuro PhpStorm para que me importe automáticamente las dependencias, módulos, servicios? Tengo la versión 2017.2.4'},
        {id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre:'Hotel la Gracia', descripcion:'¿Cómo configuro PhpStorm para que me importe automáticamente las dependencias, módulos, servicios? Tengo la versión 2017.2.4'},
        {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre:'Zapatería el Clavo', descripcion:'¿Cómo configuro PhpStorm para que me importe automáticamente las dependencias, módulos, servicios? Tengo la versión 2017.2.4'}
    ];

    constructor(private afDB : AngularFireDatabase, private http : Http, private httpCliente: HttpClient){

    }

    public getLugares(){
        // return this.afDB.list('lugares/');
        // return this.http.get(this.API_ENDPOINT+'/.json');
        return this.http.get(this.API_ENDPOINT+'/.json')
                        .pipe(map((resultado)=>{
                                const data =  resultado.json().lugares
                                return data
                            })
                        )

    }
    public buscarLugar(id){
        return this.lugares.filter( (lugar) => {
            return lugar.id == id
        })[0] || null;
    }

    public guardarLugar(lugar) {
        //this.afDB.database.ref('lugares/' + lugar.id ).set(lugar);

        const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        this.httpCliente.post(this.API_ENDPOINT+'/lugares.json',lugar,{headers:headers}).subscribe() ;
    }
    
    public editarLugar(lugar) {
        this.afDB.database.ref('lugares/' + lugar.id ).set(lugar);
    }

    public obtenerGeodata( direccion) {
        return this.http.get('https://maps.google.com/maps/api/geocode/json?address=' + direccion + '&key=AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0');
    }

    public getLugar(id) {
        return this.afDB.object('lugares/' + id );
    }
}