export class AuthService{
     loggedin: boolean=false;
    //loggedin: boolean=true;
    authenticate(username:string,password:string){
        if(username=="naman"&& password=="12345")
{
    this.loggedin = true;
}   
 }
 isAuthenticated(){
    return this.loggedin;
 }
}