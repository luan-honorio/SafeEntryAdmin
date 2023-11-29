import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { DeaschboardComponent } from './deaschboard/deaschboard.component';
import { combineLatest } from 'rxjs';
import { EditPerfilComponent } from './edit-perfil/edit-perfil.component';

const routes: Routes = [
  {
    path : '\login',
    component : LoginComponent
  },
  {
path: '\deach',
component : DeaschboardComponent
  },
  {
path : '\edit',
component : EditPerfilComponent
  },
  {
    path : "",
    pathMatch : 'full',
    component : SplashScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
