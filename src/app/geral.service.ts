import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  constructor(public http : HttpClient) { }

  selectOne(id : string): Observable<any>{
    return this.http.get(`http://localhost:4000/user/empresa/${id}`);
  }


  getall(): Observable<any>
  {
    return this.http.get('http://localhost:4000/user/users');
  }
  delete(id : number): Observable<any>{
    return this.http.delete(`http://localhost:4000/user/delete/${id}`)
  }

  postUsers(body : any): Observable<any>{
    return this.http.post("", body);
  }

}
