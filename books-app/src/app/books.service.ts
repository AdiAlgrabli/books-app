import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Book} from "./book";
import {environment} from "../environments/environment";

const booksUrl = 'https://www.googleapis.com/books/v1/volumes';
const baseURL = environment.API_URL;
const wishlistURL = baseURL + 'wish-list';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  searchBooks(input: string): Observable<any> {
    const params = new HttpParams()
      .set('q', input)
      .set('maxResults', 20);

    return this.http.get<any>(booksUrl, {params});
  }

  addBook(book: Book): Observable<Book> {
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(book);

    return this.http.post<Book>(wishlistURL, body,{'headers':headers});
  }

  deleteBook(id: string): Observable<any> {
    return this.http.delete(wishlistURL + `/${id}`);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(wishlistURL);
  }
}
