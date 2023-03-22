import { Injectable } from "@angular/core";
import { InformationTechnology } from "./informationTechnology";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class InformationTechnologyService {
  endpoint = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getInformationTechnologyById(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/informationTechnology/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  getInformationTechnology(): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/informationTechnology`)
      .pipe(catchError(this.errorHandler));
  }

  addInformationTechnology(data: InformationTechnology): Observable<any> {
    return this.httpClient
      .post(
        `${this.endpoint}/informationTechnology`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  editInformationTechnology(
    id: any,
    data: InformationTechnology
  ): Observable<any> {
    return this.httpClient
      .put(
        `${this.endpoint}/informationTechnology/${id}`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteInformationTechnology(id: number): Observable<any> {
    return this.httpClient
      .delete(`${this.endpoint}/informationTechnology/${id}`, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  // Error handling
  errorHandler(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
