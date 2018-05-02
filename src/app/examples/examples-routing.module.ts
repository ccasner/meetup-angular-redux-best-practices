import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDataComponent } from './containers/book-data/book-data.component';
import { BookDataGuard } from './guards/book-data.guard';

const routes: Routes = [
    { path: 'book-data', component: BookDataComponent, canActivate: [BookDataGuard] },
    { path: '**', component: BookDataComponent, canActivate: [BookDataGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExamplesRoutingModule { }
