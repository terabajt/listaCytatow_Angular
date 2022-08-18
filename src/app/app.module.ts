import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import localePL from '@angular/common/locales/pl';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RankingComponent } from './ranking/ranking.component';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from './button/button.component';
import { VoteButtonsComponent } from './vote-buttons/vote-buttons.component';
import { ListComponent } from './list/list.component';
registerLocaleData(localePL);

@NgModule({
  declarations: [AppComponent, NavbarComponent, RankingComponent, FormComponent, ButtonComponent, VoteButtonsComponent, ListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
