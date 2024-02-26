import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LolService {
  private apiUrl = 'http://127.0.0.1:8001/api/lol';

  constructor(private http: HttpClient) { }

  lol(name: string){
    const lol = {name};
    return this.http.post(this.apiUrl,lol);
  }
}
