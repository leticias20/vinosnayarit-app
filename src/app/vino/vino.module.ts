import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VinoRoutingModule } from './vino-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    VinoRoutingModule,
    FormsModule
  ]
})
export class VinoModule { }
