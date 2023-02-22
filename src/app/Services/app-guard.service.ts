import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Resolve, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

import { FirstComponent } from "../first/first.component";
import { SecondComponent } from "../second/second.component";
import { AuthService } from "./auth.service";
import { DataService } from "./data.service";

@Injectable()
export class AppGuardService implements CanActivate{
    
    constructor(private router:Router,private authservice:AuthService,private dataservice:DataService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.authservice.isAuthenticated())
        {
            return true;
        }
        else 
        {
            this.router.navigateByUrl('Login')
            return false;

        }
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(childRoute,state)
    }
    canDeactivate(component:FirstComponent,currentRoute:ActivatedRouteSnapshot,currentState:RouterStateSnapshot,nextState:RouterStateSnapshot){
        return true;
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let data:any;
        this.dataservice.getdata().subscribe((res)=> {
            data=res;
        })
        return data;
    }
   
}