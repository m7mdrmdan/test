import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TestdirectiveDirective } from './testdirective.directive';
import { GreenComponent } from './green/green.component';
import { RedComponent } from './red/red.component';

@NgModule({
  declarations: [
    AppComponent,
    TestdirectiveDirective,
    GreenComponent,
    RedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
