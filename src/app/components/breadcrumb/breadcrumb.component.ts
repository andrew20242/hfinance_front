import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbPath: string[] = []
  currentUrl: string = ''

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.router.events.subscribe((ev) => {
      if(ev instanceof NavigationEnd) {
        this.currentUrl = ev.urlAfterRedirects
        this.breadcrumbPath = ev.urlAfterRedirects.split('/').filter((url: string) => url)
      }
    })
  }

}
