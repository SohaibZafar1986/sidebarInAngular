import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { IconModule } from '../icon/icon.module';

import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarService } from './sidebar.service';
import { SidebarBrandComponent } from './sidebar-brand/sidebar-brand.component';
// import { SidebarToggleDirective } from './sidebar-toggle/sidebar-toggle.directive';
// import { SidebarTogglerComponent } from './sidebar-toggler/sidebar-toggler.component';
// import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
// import { SidebarFooterComponent } from './sidebar-footer/sidebar-footer.component';

import { SharedModule } from '../shared';

import {
  SidebarNavBadgePipe,
  SidebarNavComponent,
  // SidebarNavDividerComponent,
  SidebarNavGroupComponent,
  SidebarNavHelper,
  SidebarNavIconPipe,
  SidebarNavItemClassPipe,
  // SidebarNavLabelComponent,
  SidebarNavLinkComponent,
  SidebarNavLinkContentComponent,
  SidebarNavLinkPipe,
  SidebarNavTitleComponent,
  SidebarNavCheckboxComponent,
  SidebarNavCheckboxPipe
} from './sidebar-nav';


@NgModule({
  declarations: [
    SidebarComponent,
    // SidebarTogglerComponent,
    // SidebarToggleDirective,
    SidebarBrandComponent,
    SidebarNavBadgePipe,
    SidebarNavComponent,
    // SidebarNavDividerComponent,
    SidebarNavGroupComponent,
    // SidebarNavGroupToggleDirective,
    SidebarNavIconPipe,
    SidebarNavItemClassPipe,
    // SidebarNavLabelComponent,
    SidebarNavLinkComponent,
    SidebarNavLinkContentComponent,
    SidebarNavLinkPipe,
    SidebarNavTitleComponent,
    SidebarNavCheckboxComponent,
    SidebarNavCheckboxPipe,
    // SidebarHeaderComponent,
    // SidebarFooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    // IconModule
  ],
  exports: [
    SidebarComponent,
    // SidebarToggleDirective,
    // SidebarTogglerComponent,
    SidebarBrandComponent,
    SidebarNavComponent,
    // SidebarHeaderComponent,
    // SidebarFooterComponent,
  ],
  providers: [
    SidebarService,
    SidebarNavHelper
  ],
})
export class SidebarModule { }
