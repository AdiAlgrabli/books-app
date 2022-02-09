import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Book} from "../../book";

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.scss']
})
export class BookModalComponent {
  isReadMore = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {book: Book}) { }

  showTextToggle() {
    this.isReadMore = !this.isReadMore
  }
}
