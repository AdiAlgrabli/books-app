import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {WishListComponent} from "./wish-list/wish-list.component";
import {BooksSearchComponent} from "./books-search/books-search.component";
import {Page404Component} from "./page404/page404.component";

const routes: Routes = [
  {path: 'books-welcome', component: WelcomeComponent},
  {path: 'books-search', component: BooksSearchComponent},
  {path: 'wish-list', component: WishListComponent},
  {path: '', redirectTo: "/books-welcome", pathMatch: "full"},
  {path: "**", component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
