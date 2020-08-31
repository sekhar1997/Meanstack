import { Users } from './../models/users';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/api';
@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(`${BASE_URL}/users`);
  }
  createUser(body: Users): Observable<Users> {
    return this.httpClient.post<Users>(`${BASE_URL}/users`, body);
  }
  deleteUser(id: string) {
    return this.httpClient.delete(`${BASE_URL}/users/${id}`);
  }
  getUserById(id: String): Observable<Users> {
    return this.httpClient.get<Users>(`${BASE_URL}/users/${id}`);
  }
  updateUser(id: Number, body: Users) {
    return this.httpClient.put<Users>(`${BASE_URL}/users/${id}`, body);
  }
}
