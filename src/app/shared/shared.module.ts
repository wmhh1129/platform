import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdToolbarModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdToolbarModule,
    MdInputModule
  ],
  exports: [
    CommonModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdToolbarModule,
    MdInputModule
  ],
  declarations: []
})
export class SharedModule {}
