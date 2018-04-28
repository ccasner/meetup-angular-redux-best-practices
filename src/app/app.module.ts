import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { AppComponent } from './core/containers/app/app.component';
import { CoreModule } from './core/core.module';
import { ExamplesModule } from './examples/examples.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ExamplesModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
