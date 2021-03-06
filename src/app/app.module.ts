import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item/list-item.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { EmailContentComponent } from './email-content/email-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    SearchBarComponent,
    EmailContentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
