import { MyGuardService } from './services/myguard.services';
import { LinkifystrPipe } from './pipes/linkifystr.pipe';
import { HttpModule } from '@angular/http';
import { ContactoComponent } from './contacto/contacto.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AgmCoreModule } from '@agm/core';
import {ResaltarDirective} from "./directives/resaltar.directive";
import {ContarClicksDirective} from "./directives/contar-clicks.directive";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Routes, RouterModule} from "@angular/router";
import {DetalleComponent} from "./detalle/detalle.component";
import {LugaresComponent} from "./lugares/lugares.component";
import { LugaresServices } from './services/lugares.services';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CrearComponent } from './crear/crear.component';
import { HttpClientModule } from '@angular/common/http'; 
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AutorizacionServices } from './services/autorizacion.services';

export const firebaseConfig = {
  apiKey: "AIzaSyA3RJydskHZlrFhChlhlUCdriby-dm5xrU",
  authDomain: "platzisquare-ae3aa.firebaseapp.com",
  databaseURL: "https://platzisquare-ae3aa.firebaseio.com",
  storageBucket: "platzisquare-ae3aa.appspot.com",
  messagingSenderId: "189460631432"
};


const appRoutes: Routes = [
  {path:'', component: LugaresComponent},
  {path:'lugares', component: LugaresComponent},
  {path:'detalle/:id', component: DetalleComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'login', component: LoginComponent},
  {path:'registro', component: RegistroComponent},
  {path:'crear/:id', component: CrearComponent, canActivate:[MyGuardService]},
];
@NgModule({
  declarations: [
    AppComponent,
      ResaltarDirective,
      ContarClicksDirective,
      DetalleComponent,
      LugaresComponent,
      ContactoComponent,
      CrearComponent,
      LinkifystrPipe,
      LoginComponent,
      RegistroComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0'
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LugaresServices, AutorizacionServices, MyGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
