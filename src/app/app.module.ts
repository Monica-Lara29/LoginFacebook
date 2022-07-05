import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule}  from '@angular/forms';
import { FacebookLoginProvider, SocialLoginModule, SocialAuthServiceConfig} from '@abacritt/angularx-social-login';



@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule /*modulos que necesitamos importar*/
  ],
  providers: [
    {
      /* configuraciones necesarias para obtener el identificador de la app 
      anteriormente creada */
      provide: 'SocialAuthServiceConfig',
      useValue:{
        autoLogin: false,
        providers: [{
          id:FacebookLoginProvider.PROVIDER_ID,
          provider:new FacebookLoginProvider(
            '1204062823725121'
          )
        }]
      }as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
