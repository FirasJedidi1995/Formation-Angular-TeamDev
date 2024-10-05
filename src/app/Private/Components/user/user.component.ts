import { Component, OnInit } from '@angular/core';
import { User } from '../../Model/user';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  ngOnInit(): void {
    this.displayedUser();
  }
  userList: User[] = [];
  selectedUser!: User;
  constructor(private userService: UserService) {}
  displayedUser() {
    this.userService.getAllUsers().subscribe((res) => {
      this.userList = res;
      console.log(res);
    });
  }
  selectUser(user: any) {
    this.selectedUser = user;
  }
  deleteUser() {
    if (this.selectedUser.id) {
      this.userService.deleteUser(this.selectedUser.id).subscribe((res) => {
        console.log(res);
        this.displayedUser();
      });
    }
  }
}
