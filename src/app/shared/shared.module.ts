import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';

@NgModule({
  declarations: [SidebarComponent, Sidebar2Component],
  exports: [SidebarComponent, Sidebar2Component],
  imports: [CommonModule],
})
export class SharedModule {}
