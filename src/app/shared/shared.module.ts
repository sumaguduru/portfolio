import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TopnavComponent } from './topnav/topnav.component';


@NgModule({
  declarations: [TopnavComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [TopnavComponent]
})
export class SharedModule { }
