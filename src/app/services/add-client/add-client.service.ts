import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AddClientService {
  private apiUrl = 'http://127.0.0.1:8000/api/store-client';

  constructor(private http: HttpClient) { }

  addClient(name: string, surname: string, age: number, gender: string) {
    const client = { name, surname, age, gender};

    return this.http.post(this.apiUrl, client);
  }
}
