import {Component} from '@angular/core';
import {PostmanService} from "../services/postman.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  test: string[] = []

  constructor(private postman: PostmanService) {
  }

  ngOnInit(): void {
    console.log("Test")

    this.postman.GETRequest("/index", false).subscribe(
      (response: any) => {
        let response_test = JSON.stringify(response)
        this.test = JSON.parse(response_test)
      }
    )
  }

  protected readonly JSON = JSON;
}
