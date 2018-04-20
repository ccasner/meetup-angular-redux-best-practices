import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
} from '@angular/material';

const MatModules = [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
];

@NgModule({
  imports: MatModules,
  exports: MatModules
})
export class MaterialModule { }
