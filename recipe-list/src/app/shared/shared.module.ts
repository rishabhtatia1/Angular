import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './spinners/loading-component';

@NgModule({
  declarations: [
    AlertComponent,
    DropdownDirective,
    LoadingSpinnerComponent,
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    DropdownDirective,
    LoadingSpinnerComponent,
    CommonModule]
})


export class SharedModule { }
