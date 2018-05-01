import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDataComponent } from './containers/book-data/book-data.component';
import { ExampleDataGuard } from './guards/example-data.guard';

const routes: Routes = [
    { path: 'book-data', component: BookDataComponent, canActivate: [ExampleDataGuard] },
    { path: '**', component: BookDataComponent, canActivate: [ExampleDataGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExamplesRoutingModule { }
