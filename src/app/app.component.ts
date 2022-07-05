import { Component, OnInit } from '@angular/core';
import {SocialAuthService, FacebookLoginProvider, SocialUser} from '@abacritt/angularx-social-login';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'LoginFacebook';
  socialUser!: SocialUser;
  isLogin!: Boolean; /*variable de control */

  constructor(
    /*inyección de dependencia*/
    private socialAuthService: SocialAuthService
  ){
  }

  ngOnInit(): void{
    this.socialAuthService.authState.subscribe((user)=> {
      /*escucha el estado del login */
      console.log("Datos del usuario");
      console.log(user);

      this.socialUser=user;
      /*evaluación si el objeto trae datos o no */
      this.isLogin= (user!= null);
    });
  }
  
  /*funcion que loguea un usuario*/
  logInWithFacebook():void{
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
   
  }
  /*función que cierra sesión */
  signOut(): void {
    this.socialAuthService.signOut();
  }

}
