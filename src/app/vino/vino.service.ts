import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import{ Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import{ Vino } from './vino';

@Injectable({
  providedIn: 'root'
})
export class VinoService {

  private apiURL = "http://localhost:8080/api/vinos";

  httpOptions = {
    headers: new HttpHeaders ({
    "Access-Control-Allow-Origin":      "http://localhost:8080",
    "Access-Control-Allow-Credentials": "true",
    "Content-Type" : "application/json",
    "Connection": "keep-alive"
    })  
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any>{
    return this.httpClient.get(this.apiURL).
    
    pipe(catchError(this.errorHandler));

  }

  create(vino:Vino): Observable<any>{
    return this.httpClient.post(this.apiURL, JSON.stringify(vino), this.httpOptions).
    
    pipe(catchError(this.errorHandler)
    )

  }

  errorHandler(error:any){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }

    return throwError(errorMessage);
  }

}
