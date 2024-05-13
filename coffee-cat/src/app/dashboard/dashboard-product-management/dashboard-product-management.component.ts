import { Component, OnInit } from '@angular/core';
import { productsDB } from 'src/app/shared/data/products';

@Component({
  selector: 'app-dashboard-product-management',
  templateUrl: './dashboard-product-management.component.html',
  styleUrls: ['./dashboard-product-management.component.scss']
})
export class DashboardProductManagementComponent implements OnInit {

  constructor() { }

  view = 'list';

  products;

  ngOnInit(): void {
    this.products = productsDB.Product;
  }

}
