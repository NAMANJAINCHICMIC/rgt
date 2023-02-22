import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SecondComponent } from './second/second.component';
import { AppGuardService } from './Services/app-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'first-component', component: FirstComponent,canActivate :[AppGuardService], canDeactivate:[AppGuardService]},
  { path: 'second-component', component: SecondComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
