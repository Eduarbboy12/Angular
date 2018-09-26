import { AutorizacionServices } from './autorizacion.services';
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()

export class MyGuardService implements CanActivate {
    loggedIn = false;
    constructor(private autorizacionServices : AutorizacionServices) {
        this.autorizacionServices.islogged()
            .subscribe( (result) => {
                if(result && result.uid){
                    this.loggedIn = true;
                } else {
                    this.loggedIn = false;
                }
            }, (error) => {
                this.loggedIn = false;
            })
    }
    canActivate(){
        return this.loggedIn;
    }
}