import { Component } from '@angular/core';
import { AutorizacionServices } from '../services/autorizacion.services';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html'
})
export class RegistroComponent {
    registro:any = {};
    constructor(private autorizacionServices : AutorizacionServices){
        
    }

    registrar(){
        this.autorizacionServices.registro(this.registro.email, this.registro.password)
    }
    
}