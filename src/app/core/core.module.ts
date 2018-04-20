import { NgModule, Optional, SkipSelf } from '@angular/core'
import { HttpModule } from '@angular/http'
import { MdButtonModule, MdIconModule, MdIconRegistry, MdToolbarModule } from '@angular/material'
// import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { DomSanitizer } from '@angular/platform-browser'
import { loadSvgResources } from '../utils/svg.util'

@NgModule({
  imports: [
    SharedModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    HttpModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
/*
 *  如何实现让coreModule只加载一次,尽量让coreModule中的东西都只加载一次
 *  要避免注入时报错陷入循环，要导入SkipSelf装饰器
 *  要避免初次注入时找不到依赖，要注入Optional装饰器，说明依赖可选
 * */
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MdIconRegistry,
    ds: DomSanitizer
  ) {
    if (parent) { // 已经存在CoreModule的话，就抛出异常
      throw new Error('模块已经存在, 不能再次加载')
    }
    loadSvgResources(ir, ds)
  }
}
