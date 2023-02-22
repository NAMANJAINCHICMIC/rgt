import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router:Router){}
  onSubmit(userdata : any){
    this.authService.authenticate(userdata.username,userdata.password);
    if(this.authService.isAuthenticated()){
      this.router.navigateByUrl('/first-component')
    }
  }

}
