import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FactoriesComponent } from './components/factories/factories.component';
import { FactoryComponent } from './components/factory/factory.component';

@NgModule({
  declarations: [
    AppComponent,
    FactoriesComponent,
    FactoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
