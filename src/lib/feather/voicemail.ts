import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-voicemail',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/voicemail.svg'
})
export class IconVoicemailComponent {}

@NgModule({
  declarations: [ IconVoicemailComponent ],
  exports: [ IconVoicemailComponent ]
})
export class IconVoicemail {}
