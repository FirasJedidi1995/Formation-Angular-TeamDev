import { Component, HostListener, OnInit } from '@angular/core';
import { Department } from '../../Model/department';
import { DepartmentService } from '../../Services/department.service';
import { FormsModule } from '@angular/forms';
import { DetailsDepartmentComponent } from '../details-department/details-department.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  departmentList: Department[] = [];
  selectedDepartment!: Department;
  constructor(private departmentService: DepartmentService) {}
  ngOnInit(): void {
    this.displayedDepartment();
  }
  displayedDepartment() {
    this.departmentService.getAllDepartment().subscribe((res) => {
      this.departmentList = res;
      console.log(res);
    });
  }
  selectDepartment(department: any) {
    this.selectedDepartment = department;
  }
  deleteDepartment() {
    if (this.selectedDepartment.id) {
      this.departmentService
        .deleteDepartment(this.selectedDepartment.id)
        .subscribe((res) => {
          console.log(res);
          this.displayedDepartment();
        });
    }
  }
}
