import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ImageService{
    api:string;

    constructor(private http:HttpClient){
        this.api='http://localhost:3000/picture';
    }

    addPicture(name:string,file:File):Observable<Object>{
        const form= new FormData();//Crea un formulario
        form.append('name',name);
        form.append('file',file,'form-data');//Asigna el campo File
        return this.http.post<Object>(this.api,form);
    }
}