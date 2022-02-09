import {Component, OnDestroy, OnInit} from '@angular/core';
import {BooksService} from "../books.service";
import {Book} from "../book";
import {finalize, Subscription} from "rxjs";

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit, OnDestroy {

  isLoading = true;
  wishlistBooks: Book[];
  isReadMore = true;

  private subscriptions = new Subscription();

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.getWishlistBooks();
  }

  removeBook(bookId: string) {
    this.subscriptions.add(
      this.booksService.deleteBook(bookId)
        .subscribe((_) => this.getWishlistBooks())
    );
  }

  getWishlistBooks() {
    this.subscriptions.add(
      this.booksService.getBooks()
        .pipe(finalize(() => this.isLoading = false))
        .subscribe((res: Book[]) => {
          this.wishlistBooks = res;
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
