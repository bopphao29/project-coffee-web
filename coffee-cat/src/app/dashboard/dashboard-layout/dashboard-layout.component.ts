import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adminList } from 'src/app/shared/data/admin';

@Component({
  selector: 'll-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  isLessThenLargeDevice;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  admin = []
  nameAd
  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 1199px)']).subscribe(({ matches }) => {
      this.isLessThenLargeDevice = matches;
    });
  this.admin = adminList
  this.nameAd = this.admin[0]['full_name']
  // console.log(this.nameAd)
}
  onLogout(): void {
    this.router.navigate(['auth/login']);
  }

}
