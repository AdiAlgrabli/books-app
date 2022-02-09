import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";

const baseURL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AppService {
  currentNameSubject$ = new BehaviorSubject('guest');

  constructor(private http: HttpClient) { }

  addName(name: string) {
    this.currentNameSubject$.next(name);
  }

  getName(): Observable<string> {
    return this.currentNameSubject$.asObservable();
  }
}
