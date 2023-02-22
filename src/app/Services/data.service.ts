import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class DataService {
    types = [];
    constructor(private http: HttpClient) { }
    getdata() {
        return this.http.get('https://jsonplaceholder.typicode.com/users')
    }

}