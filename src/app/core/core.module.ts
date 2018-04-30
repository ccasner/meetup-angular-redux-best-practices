import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import 'hammerjs';

import { environment } from '../../environments/environment';

// store
import { throwIfAlreadyLoaded } from './module-import-guard';
import { reducers, metaReducers } from './store';
import { AppEffects } from './store/app/app.effects';

// modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '../shared/material/material.module';

// components
import { HomeComponent } from './containers/home/home.component';
import { SidenavContainerComponent } from './components/sidenav-container/sidenav-container.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TitleComponent } from './components/title/title.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WrapComponent } from './components/wrap/wrap.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,

    // @ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [
    WrapComponent,
    ToolbarComponent,
    SidenavContainerComponent,
    SidenavComponent,
    TitleComponent,
    HomeComponent
  ],
  exports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

    WrapComponent,
    ToolbarComponent,
    SidenavContainerComponent,
    SidenavComponent,
    TitleComponent,
    HomeComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
