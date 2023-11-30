import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { DeaschboardComponent } from './deaschboard/deaschboard.component';
import { FormsModule} from '@angular/forms';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditPerfilComponent } from './edit-perfil/edit-perfil.component';
import { CadastroComponent } from './cadastro/cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SplashScreenComponent,
    DeaschboardComponent,
    EditPerfilComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule,
    RouterLinkActive
  


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
