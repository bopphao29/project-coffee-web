import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { menuList as staticMenuList } from '../../data/menus';
import { Router } from '@angular/router';

@Component({
  selector: 'll-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() topFixed: boolean;
  @Output() toggleSidenav = new EventEmitter();
  isScrolled: boolean;
  menuList = [];
  isLessThenLargeDevice;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.menuList = staticMenuList;
    this.breakpointObserver.observe(['(max-width: 1080px)']).subscribe(({ matches }) => {
      this.isLessThenLargeDevice = matches;
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isScrolled = window.pageYOffset > 15;
  }

  routerAdmin(){
    this.router.navigate(['/cart'])
  }
}
