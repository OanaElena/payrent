import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {AutentificationComponent} from "./autentification/autentification.component";

const routes: Routes = [
  {path: "auth", component: AutentificationComponent},
  {path: "home", component: HomeComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
