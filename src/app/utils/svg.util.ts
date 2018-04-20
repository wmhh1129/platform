import { MdIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'

export const loadSvgResources = (ir: MdIconRegistry, ds: DomSanitizer) => {
  // 从iConFont上download了一个svgIcon，放入了assets中，注册之后供md-icon使用
  ir.addSvgIcon('lights', ds.bypassSecurityTrustResourceUrl('assets/lights.svg'))
}
