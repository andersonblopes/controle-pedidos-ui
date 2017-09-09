import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
  <div *ngIf="temErro()" class="ui-message ui-messages-error">
  {{ text }}
</div>
  `,
  styles: [`
  .ui-messages-error{
    margin: 0;
    margin-top: 4px;
    background-color: #ffffff;
    color: #FA8072;
    border: 0 solid;
    font-size: 0.8em;
    font-weight: bold;
  }

  `]
})
export class MessageComponent {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }


}
