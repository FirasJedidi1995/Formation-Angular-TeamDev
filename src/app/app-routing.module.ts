import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './Private/Components/department/department.component';
import { DetailsDepartmentComponent } from './Private/Components/details-department/details-department.component';
import { UserComponent } from './Private/Components/user/user.component';
import { DetailsUserComponent } from './Private/Components/details-user/details-user.component';

const routes: Routes = [
  { path: 'department', component: DepartmentComponent },
  { path: 'department/:id', component: DetailsDepartmentComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: DetailsUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
