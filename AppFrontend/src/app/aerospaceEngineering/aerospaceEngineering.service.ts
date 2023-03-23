import { Injectable } from "@angular/core";
import { AerospaceEngineering } from "./aerospaceEngineering";
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
export class AerospaceEngineeringService {
  endpoint = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAerospaceEngineeringById(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/aerospaceEngineering/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  getAerospaceEngineering(): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/aerospaceEngineering`)
      .pipe(catchError(this.errorHandler));
  }

  addAerospaceEngineering(data: AerospaceEngineering): Observable<any> {
    return this.httpClient
      .post(
        `${this.endpoint}/aerospaceEngineering`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  editAerospaceEngineering(
    id: any,
    data: AerospaceEngineering
  ): Observable<any> {
    return this.httpClient
      .put(
        `${this.endpoint}/aerospaceEngineering/${id}`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteAerospaceEngineering(id: number): Observable<any> {
    return this.httpClient
      .delete(`${this.endpoint}/aerospaceEngineering/${id}`, this.httpOptions)
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
