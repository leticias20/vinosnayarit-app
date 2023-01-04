import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
const routes: Routes = [
 {path: 'vino', redirectTo: 'vino/index', pathMatch: 'full'},
 {path: 'vino/index', component: IndexComponent},
 {path: 'vino/create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VinoRoutingModule { }
