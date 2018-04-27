import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

const MatModules = [
    CdkTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
];

@NgModule({
  imports: MatModules,
  exports: MatModules
})
export class MaterialModule { }
