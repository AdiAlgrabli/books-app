import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {AppService} from "../app.service";


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  userName = '';

  constructor(private appService: AppService,
              private router: Router) { }

  submit() {
    this.appService.addName(this.userName);

    this.router.navigate(['/books-search']);
  }
}
