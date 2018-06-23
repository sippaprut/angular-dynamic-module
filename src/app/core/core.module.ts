import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class CoreModule {
  constructor() {
    console.log('core module loaded');
  }
}
