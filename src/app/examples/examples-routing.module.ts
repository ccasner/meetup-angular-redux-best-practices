import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleDataComponent } from './containers/example-data/example-data.component';
import { Example2Component } from './containers/example-2/example-2.component';
import { ExampleDataGuard } from './guards/example-data.guard';

const routes: Routes = [
    { path: 'example-data', component: ExampleDataComponent, canActivate: [ExampleDataGuard] },
    { path: '2', component: Example2Component },
    { path: '**', component: ExampleDataComponent, canActivate: [ExampleDataGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExamplesRoutingModule { }
