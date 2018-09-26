import { AutorizacionServices } from './services/autorizacion.services';
import { Component } from '@angular/core';
import { Observable} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false;
  loggedUser : any = null;
  constructor(private autorizacionServices : AutorizacionServices) {
    this.autorizacionServices.islogged()
      .subscribe( (result) => {
        if(result && result.uid){
          this.loggedIn = true;
          setTimeout(() => {
            this.loggedUser = this.autorizacionServices.getUser().currentUser.email;
          }, 500);
        } else {
          this.loggedIn = false;
        }
    }, (error) => {
      this.loggedIn = false;
    })
  }

  loggout(){
    this.autorizacionServices.loggout();
  }
}
