import { Component, OnInit } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-app';
  data = "";

  constructor(private _testService: TestService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._testService.getData().subscribe(
      responseTestData => {
        console.log(responseTestData);
        this.data = responseTestData;
      },
      responseTestError => {
        console.log(responseTestError);
      },
      () => {
        console.log("Successfully executed getData");
      }
    );
  }
}
