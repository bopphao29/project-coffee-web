import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'll-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.scss']
})
export class DashboardIndexComponent implements OnInit {
  orders = [];
  constructor() {}

  dashboardInfor = []
  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  pageSize = 10
  pageIndex = 1

  allMoney: number = 0
  
  data2 = <any>[]

  ngOnInit(): void {

    this.orders = [
      {
        id: '@quynhbei',
        orderBy: 'Quỳnh Bei',
        productId: 'cdfsfe5d',
        created: '25.01.2024, 6:30:43',
        status: '1',
        price: 3104000
      },
      {
        id: 'duyen_158200',
        orderBy: 'Rùa',
        productId: 'cdfsfe5d',
        created: '18.02.2024, 21:12:32',
        status: '0',
        price: 1769000
      },
      {
        id: '_ttqueen',
        orderBy: 'Quỳnh Trương',
        productId: 'cdfsfe5d',
        created: '29.02.2024, 16:02:01',
        status: '1',
        price: 976000
      },
      {
        id: '@nhwquinne202',
        orderBy: 'Quỳnh Thỏ',
        productId: 'cdfsfe5d',
        created: '16.02.2024, 10:45:56',
        status: '1',
        price: 5326000
      },
      {
        id: 'thuy_lcc',
        orderBy: 'Phương Thuỳ',
        productId: 'cdfsfe5d',
        created: '25.01.2024, 8:00:34',
        status: '0',
        price: 2780000
      }
    ];

    this.dashboardInfor = [
      {
        favoriteCount : '10',
        viewCount: '13650',
        buyCount: '763',
      }
    ]

    this.TongTien()
  }


  TongTien(){
    // this.allMoney = this.orders.reduce((acc, current) => acc + current.price, 0)
    const totalPrice = this.orders.reduce((accumulator, currentOrder) => {
      return accumulator + currentOrder.price;
    }, 0);
      // console.log(totalPrice)
      this.allMoney = totalPrice
      // console.log(this.orders)
    }

    
    
}


