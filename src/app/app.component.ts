import { Component,OnInit } from '@angular/core';
import { CommonServiceService } from './_services/common-service.service';
import { interval, Subscription } from 'rxjs';
import {delay, first} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assam-pwrd2.0';
  loading:boolean = false;

  constructor(public cmnService: CommonServiceService){}

  ngOnInit() {
    this.loadContent();
  }

  loadContent() {
    this.cmnService.loadingSub
    .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
    .subscribe((loading) => {
      this.loading = loading;
    });
  }
}
