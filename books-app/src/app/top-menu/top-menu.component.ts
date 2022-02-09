import {ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {BooksService} from "../books.service";
import {AppService} from "../app.service";
import {NavigationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit, OnDestroy {
  username = 'guest';

  private subscriptions = new Subscription();

  constructor(private appService: AppService, private router : Router) { }

  ngOnInit(): void {
    this.appService.addName(this.username);

    this.subscriptions.add(
      this.appService.getName().subscribe((username) => this.username = username)
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
