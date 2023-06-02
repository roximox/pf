import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  public isSidebarOpen = false;

  public toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  rawga91: string = ' '
}
