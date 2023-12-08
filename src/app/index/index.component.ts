import {Component} from '@angular/core';
import {PostmanService} from "../services/postman.service";
import {waitForAsync} from "@angular/core/testing";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(private postman: PostmanService) {
  }

  ngOnInit(): void {
    console.log("Test")


    this.postman.GETRequest("/index", false).subscribe(
      (response: any) => { console.log("Parsed response: " + response.body.message) }
    )

  }
}
