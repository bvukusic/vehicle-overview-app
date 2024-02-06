import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { VehicleOverviewComponent } from './vehicle-overview/vehicle-overview.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'vehicle-overview', component: VehicleOverviewComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
