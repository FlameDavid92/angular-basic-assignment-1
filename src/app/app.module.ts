import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { AlertsSampleComponent } from './alerts-sample/alerts-sample.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    ErrorAlertComponent,
    AlertsSampleComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
