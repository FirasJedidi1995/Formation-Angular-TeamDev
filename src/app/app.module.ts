import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './Private/Components/department/department.component';
import { DetailsDepartmentComponent } from './Private/Components/details-department/details-department.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './Private/Shared/nav-bar/nav-bar.component';
import { UserComponent } from './Private/Components/user/user.component';
import { DetailsUserComponent } from './Private/Components/details-user/details-user.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    DetailsDepartmentComponent,
    NavBarComponent,
    UserComponent,
    DetailsUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
