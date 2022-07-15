import { Component } from '@angular/core';

@Component({
  selector: '[app-warning-alert]',
  template: `
    <span>Warning Message!</span>
  `,
  styles: [
    `
    span {
      color: rgb(230, 130, 0);
    }
  `,
  ],
})
export class WarningAlertComponent {}
