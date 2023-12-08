import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostmanService {

  constructor(private http: HttpClient) { }

  DEFAULT_BACKEND_URL: String = "http://localhost:5000/api/v1"

  simpleGETRequest(where : string){
    setTimeout(() =>{
      this.http.get(this.DEFAULT_BACKEND_URL.concat(where),{
        responseType: 'json',
        observe: 'response'
      }).subscribe(

        (response: any) => {
          console.log("response in header-component: " + JSON.stringify(response));
        }, // If ok

        (error: any) => {
          console.log("Something went wrong...");
          console.log(error);
        }, // If not

        () => console.log("")) // Default?);
    }, 5000)
  }


  GETRequest(where : string, withCredentials : boolean): Observable<HttpResponse<Response>> {
    return this.http.get<Response>(this.DEFAULT_BACKEND_URL.concat(where),{
        responseType: 'json',
        withCredentials: withCredentials,
        observe: 'response'
      })
  }
}
