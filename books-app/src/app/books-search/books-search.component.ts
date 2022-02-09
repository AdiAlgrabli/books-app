import {Component, OnInit} from '@angular/core';
import {BooksService} from "../books.service";
import {Book} from "../book";
import {MatDialog} from "@angular/material/dialog";
import {BookModalComponent} from "./book-modal/book-modal.component";

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent implements OnInit {
  searchInput: string;
  books: Book[];
  wishlist: Book[];

  constructor(private booksService: BooksService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.booksService.getBooks()
      .subscribe((res: Book[]) => {
        this.wishlist = res;
      });
  }

  searchBook(input: string) {
    if (input) {
      this.booksService.searchBooks(input).subscribe((data) => {
        this.books = data.items;
      });
    } else {
      this.books = [];
    }
  }

  onBookSelect(selectedBook: any) {
    let dialogRef = this.dialog.open(BookModalComponent, {
      data: {book: selectedBook},
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(() => {
      if (!this.wishlist.find(book => book.id === selectedBook.id)) {
        this.booksService.addBook(selectedBook).subscribe();
      }})
  }
}
