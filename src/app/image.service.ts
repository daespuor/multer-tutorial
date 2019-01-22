import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()

export class ImageService{
    api:string;

    constructor(private http:HttpClient){
        this.api='https://multer-tuto.herokuapp.com/picture';
    }

    addPicture(name:string,file:File):Observable<Object>{
        const form= new FormData();//Crea un formulario
        form.append('name',name);
        form.append('file',file,'form-data');//Asigna el campo File
        return this.http.post<Object>(this.api,form).
        pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      };
}