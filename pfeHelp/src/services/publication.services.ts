import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
import { Publication } from "src/app/publication";
import { User } from "src/app/user";
import { Demo } from "src/app/demo";
@Injectable({providedIn: 'root'})

export class publicationsService {
    
    private apiServerUrl= "http://localhost:8080";
    // HttpClient to make an http request (http type is HttpClient)
    constructor(private http: HttpClient){}
    public getPublications(): Observable<Publication[]>{
                //${this.apiServerUrl} so what we're doing in this function is to tell httpClient where to make the request and the type request to make
                // the return type is an Employee
                //because it is a get we only have the http 
        return this.http.get<Publication[]>(`${this.apiServerUrl}/publications`);
    }

    public getPublication(id:number): Observable<Publication>{
      
return this.http.get<Publication>(`${this.apiServerUrl}/publications/${id}`);
}

    public addPublication(publication: Publication): Observable<Publication>{        
        return this.http.post<Publication>(`${this.apiServerUrl}/publicationadd`,publication);
    }
    public updatePublication(publication: Publication): Observable<Publication>{
        return this.http.put<Publication>("http://localhost:8080/publicationsupdate/"+publication.id,publication);
    }
    public deletePublication(id: number) {
        return this.http.delete("http://localhost:8080/publicationsdelete/"+id);
    }

    getSearchePublication(motCle:string,page:number,size:number){
        return this.http.get<Publication[]>(`${this.apiServerUrl}/chercherPublication?mc=`+motCle+`&size`+size+`&page=`+page);}

        
 LoginUser(user: User):Observable<User>{
   console.log(this.http.post<User>("http://localhost:8080/login",user))
     return this.http.post<User>("http://localhost:8080/login",user)}




     public getDemos(): Observable<Demo[]>{
        //${this.apiServerUrl} so what we're doing in this function is to tell httpClient where to make the request and the type request to make
        // the return type is an Employee
        //because it is a get we only have the http 
return this.http.get<Demo[]>(`${this.apiServerUrl}/Demos`);
}

public addDemo(demo: Demo): Observable<Demo>{        
    return this.http.post<Demo>(`${this.apiServerUrl}/Demoadd`,demo);
}

public getDemo(idD:number): Observable<Demo>{
      
    return this.http.get<Demo>(`${this.apiServerUrl}/Demos/${idD}`);
    }
    public updateDemo(demo: Demo): Observable<Demo>{
        return this.http.put<Demo>("http://localhost:8080/Demosupdate/"+demo.idD,demo);
    }
    public deleteDemo(idD: number) {
        return this.http.delete("http://localhost:8080/Demodelete/"+idD);
    }
}

