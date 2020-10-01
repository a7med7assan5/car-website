import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { signUpPage } from './sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: signUpPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class signUpPageRoutingModule {}
