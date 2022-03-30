import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  // { path: '/dashboard', component: AppComponent },
  // { path: 'not-found', component: ErrorComponent },
  // { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
