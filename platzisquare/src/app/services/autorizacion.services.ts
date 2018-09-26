import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app';
import {Router} from "@angular/router";

@Injectable()

export class AutorizacionServices {
    constructor(private angularFireAuth : AngularFireAuth, private router: Router){
        this.islogged();
    }

    public facebookLogin(){
        this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then( (result) => {
            console.log(result);
            alert('Usuario logueado con facebook');
            this.router.navigate(['lugares']);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    public login = (email, password) => {
        this.angularFireAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password)
        .then( (response) => {
            alert('Usuario Logueado con exito')
            console.log(response)
            this.router.navigate(['lugares']);
        })
        .catch( (error) => {
            alert('un error a ocurrido')
            console.log(error)
        })
    }
    public registro = (email, password) => {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
        .then( (response) => {
            alert('Usuario Registrado con exito')
            console.log(response)
            this.router.navigate(['login']);
        })
        .catch( (error) => {
            alert('un error a ocurrido')
            console.log(error)
        })
    }

    public islogged(){
        return this.angularFireAuth.authState;
    }

    public loggout(){
        this.angularFireAuth.auth.signOut();
        alert('sesion cerrada');
        this.router.navigate(['login']);
    }

    public getUser(){
        return this.angularFireAuth.auth;
    }
}