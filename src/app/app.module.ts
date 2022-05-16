import { AuthGuardService } from './guards/auth-guard.service';
import { MenuModule } from './modules/menu/menu.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionsMenuComponent } from './modules/menu/views/options-menu/options-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    HttpClientModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
