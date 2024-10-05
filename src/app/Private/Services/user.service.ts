import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  baseUrl = 'http://localhost:8082/api';
  getAllUsers() {
    return this.httpClient.get<User[]>(this.baseUrl + '/user');
  }
  deleteUser(id: number) {
    return this.httpClient.delete(this.baseUrl + '/user/' + id);
  }
  addUser(user: User) {
    return this.httpClient.post(this.baseUrl + '/user', user);
  }
  editUser(id: number, user: User) {
    return this.httpClient.put(this.baseUrl + '/user/' + id, user);
  }
  getUserById(id: number) {
    return this.httpClient.get<User>(this.baseUrl + '/user/' + id);
  }
}
