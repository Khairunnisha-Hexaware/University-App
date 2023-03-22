import { Injectable } from "@angular/core";
import { ElectricalandElectronicsEngineering } from "./electricalandElectronicsEngineering";
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
export class ElectricalandElectronicsEngineeringService {
  endpoint = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getElectricalandElectronicsEngineeringById(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/electricalandElectronicsEngineering/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  getElectricalandElectronicsEngineering(): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/electricalandElectronicsEngineering`)
      .pipe(catchError(this.errorHandler));
  }

  addElectricalandElectronicsEngineering(
    data: ElectricalandElectronicsEngineering
  ): Observable<any> {
    return this.httpClient
      .post(
        `${this.endpoint}/electricalandElectronicsEngineering`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  editElectricalandElectronicsEngineering(
    id: any,
    data: ElectricalandElectronicsEngineering
  ): Observable<any> {
    return this.httpClient
      .put(
        `${this.endpoint}/electricalandElectronicsEngineering/${id}`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteElectricalandElectronicsEngineering(id: number): Observable<any> {
    return this.httpClient
      .delete(
        `${this.endpoint}/electricalandElectronicsEngineering/${id}`,
        this.httpOptions
      )
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
