import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Example1Component } from './containers/example-1/example-1.component';
import { Example2Component } from './containers/example-2/example-2.component';
import { ExampleDataGuard } from './guards/example-data.guard';

const routes: Routes = [
    { path: '1', component: Example1Component, canActivate: [ExampleDataGuard] },
    { path: '2', component: Example2Component },
    { path: '**', component: Example1Component, canActivate: [ExampleDataGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExamplesRoutingModule { }
