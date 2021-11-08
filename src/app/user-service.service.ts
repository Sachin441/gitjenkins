import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url='https://jsonplaceholder.typicode.com/todos/';

  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get(this.url);
  }
  saveData(data: any){
    return this.http.post(this.url,data);
  }
}
