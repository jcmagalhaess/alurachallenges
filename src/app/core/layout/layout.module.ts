import { MenuModule } from "./menu/menu.module";
import { HeaderModule } from "./header/header.module";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [HeaderModule, MenuModule],
  exports: [HeaderModule, MenuModule],
})
export class LayoutModule {}
