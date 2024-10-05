import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../Model/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private httpClient: HttpClient) {}
  getAllDepartment() {
    return this.httpClient.get<Department[]>(
      'http://localhost:8082/api/department'
    );
  }
  baseUrl = 'http://localhost:8082/api';
  deleteDepartment(id: number) {
    return this.httpClient.delete(this.baseUrl + '/department/' + id);
  }
  addDepartment(department: Department) {
    return this.httpClient.post(this.baseUrl + '/department', department);
  }
  editDepartment(id: number, department: Department) {
    return this.httpClient.put(this.baseUrl + '/department/' + id, department);
  }
  getDepartmentById(id: number) {
    return this.httpClient.get<Department>(this.baseUrl + '/department/' + id);
  }
}
