import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { SignUpCardComponent } from './components/sign-up-card/sign-up-card.component';

const routes: Routes = [
  {
    path: '',
    component: SignUpCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
