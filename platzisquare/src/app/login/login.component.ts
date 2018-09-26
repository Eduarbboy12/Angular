import { AutorizacionServices } from './../services/autorizacion.services';
import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    ingreso : any = {};
    constructor(private autorizacionServices : AutorizacionServices){
        
    }

    login(){
        this.autorizacionServices.login(this.ingreso.email, this.ingreso.password);
    }

    facebookLogin(){
        this.autorizacionServices.facebookLogin();
    }

    
}