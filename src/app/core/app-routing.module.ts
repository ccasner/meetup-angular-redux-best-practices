import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesModule } from '../examples/examples.module';
import { HomeComponent } from './containers/home/home.component';

export function loadExamplesModule() {
  return ExamplesModule;
}

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'examples',
    loadChildren: '../examples/examples.module#ExamplesModule'
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
