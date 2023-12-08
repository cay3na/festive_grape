import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("Test")

    setTimeout(() =>{
      this.http.get("http://localhost:5000/api/v1/index",{
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
}
