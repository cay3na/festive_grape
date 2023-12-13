import {Component} from '@angular/core';
import {PostmanService} from "../services/postman.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  test = "test..."

  constructor(private postman: PostmanService) {
  }

  ngOnInit(): void {
    console.log("Test")

    this.postman.GETRequest("/index", false).subscribe(
      (response: any) => {
        console.log("Parsed response: " + response.body.message)
        let response_test = JSON.stringify(response)
        let response_test_parsed = JSON.parse(response_test)
        console.log(response_test_parsed.body.message[0])
        this.test = JSON.stringify(response_test_parsed.body.message[0].name)
      }
    )
  }
}
