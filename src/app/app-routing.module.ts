import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  // { path: '', component: AppComponent }, //root
  // { path: 'not-found', component: ErrorComponent },
  // { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
