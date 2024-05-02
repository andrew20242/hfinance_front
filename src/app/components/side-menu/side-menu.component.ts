import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { SidebarMenuService } from '../../services/sidebar-menu.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterLink, NgIconComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  providers: [provideIcons({ lucideX })]
})
export class SideMenuComponent implements OnInit{
  sidebarShow = inject(SidebarMenuService)
  mobile: boolean

  constructor() {
    if(window.screen.width <= 1024) {
      this.mobile = true
    } else this.mobile = false
  }
    ngOnInit(): void {
    if(window.screen.width < 1024) {
      this.mobile = true
    } else this.mobile = false
    }
}
