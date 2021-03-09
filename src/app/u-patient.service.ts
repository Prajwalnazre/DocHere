import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UPatientService {

  constructor(private http: HttpClient) { }
  getData()
  {
    let url = "http://jsonplaceholder.typicode.com/todos";
    return this.http.get(url);
  }

}
