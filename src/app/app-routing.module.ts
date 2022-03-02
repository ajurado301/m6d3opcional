import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeTestComponent } from './pages/pipe-test/pipe-test.component';

const routes: Routes = [
  { path: '', component: PipeTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
