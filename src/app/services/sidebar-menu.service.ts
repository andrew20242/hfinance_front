import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarMenuService {

  sidebarMenu = new BehaviorSubject<boolean>(false)

  constructor() { }

  toggleSidebar() {
    this.sidebarMenu.next(!this.sidebarMenu.getValue())
  }
}
