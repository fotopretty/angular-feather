import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-tag',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/tag.svg'
})
export class IconTagComponent {}

@NgModule({
  declarations: [ IconTagComponent ],
  exports: [ IconTagComponent ]
})
export class IconTag {}
