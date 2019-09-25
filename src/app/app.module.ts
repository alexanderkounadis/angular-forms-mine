import { APP_MODULE_DECLARATIONS, APP_MODULE_IMPORTS } from './app.module.dependencies';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [...APP_MODULE_DECLARATIONS],
  imports: [...APP_MODULE_IMPORTS],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
