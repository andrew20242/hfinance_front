import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideMenu} from '@ng-icons/lucide';
import { SidebarMenuService } from './services/sidebar-menu.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BreadcrumbComponent, SideMenuComponent, NgIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [provideIcons({ lucideMenu})]
})
export class AppComponent {
  title = 'hfinance';
  sidebarShow = inject(SidebarMenuService)
  mobile: boolean

  constructor() {
    if(window.screen.width < 1024) {
      this.mobile = true
    } else this.mobile = false
  }

}
