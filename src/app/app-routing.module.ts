import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewuserComponent } from './newuser/newuser.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'', component: UserComponent},
  {path:'user', component: UserComponent},
  {path:'newuser', component: NewuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
