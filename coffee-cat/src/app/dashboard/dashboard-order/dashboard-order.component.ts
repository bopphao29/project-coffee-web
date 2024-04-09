import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-order',
  templateUrl: './dashboard-order.component.html',
  styleUrls: ['./dashboard-order.component.scss']
})
export class DashboardOrderComponent implements OnInit {
  orders = [];
  dashboardOrderInfor = []
  constructor() {}

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
      },
      {
        id: 'phongpq.tomotek',
        orderBy: 'Phạm Quang Phong',
        productId: 'cdfsfe5d',
        created: '25.01.2024, 9:00:48',
        status: '0',
        price: 245500
      },
      {
        id: '@cciinn',
        orderBy: 'Ciin',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 9974800
      },
      {
        id: '@hoaa.hanassii',
        orderBy: 'Đào Lê Phương Hoa',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 8430000
      },
      {
        id: '@tra.dang.904',
        orderBy: 'Trà Đặng',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 4850100
      },
      {
        id: '@vietphuongthoa98',
        orderBy: 'Nguyễn Việt Phương Thoa',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 89146010
      },
      {
        id: '@reencyngo',
        orderBy: 'Reency Ngô',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 20500
      },
      {
        id: '@datdo0803',
        orderBy: 'Đỗ Đạt',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 9704100
      },
      {
        id: '@vienvibi_899',
        orderBy: 'Viên Vibi',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 9998000
      },
      {
        id: '@linhbarbie',
        orderBy: '✨ Linh Barbie ✨',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 268001
      },
      {
        id: '@cindymiicute',
        orderBy: ' Cindy',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 9847500
      },
      {
        id: '@hoa_2309',
        orderBy: 'Ngô Ngọc Hoà🦄',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 3340500
      },
      {
        id: '@thanhyvo',
        orderBy: '🌹❤️Thành ý võ ❤️🌹',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 9641000
      },
      {
        id: '@reencyngo',
        orderBy: 'Reency Ngô',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 944000
      },
      {
        id: '@kienreview90',
        orderBy: 'Kien Review',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 84500
      },
      {
        id: '@gamkami',
        orderBy: 'Gấm Kami',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 976100
      },
      {
        id: '@vietmyusa',
        orderBy: ' Việt Mỹ ✏️',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 8250430
      },
      {
        id: '@mokachodien',
        orderBy: 'MOCA🐶VN',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 6403810
      },
      {
        id: '@lebong95',
        orderBy: 'Le bong',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 942300
      },
      {
        id: '@dinhthaotrang03',
        orderBy: 'Đinh Trang Thảo',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 294310
      },
      {
        id: '@bongtim96',
        orderBy: 'Bông Tím',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 99447203
      },
      {
        id: 'e5dcdfsf',
        orderBy: '@longchunchun',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 9641012
      },
      {
        id: '@ndn2307',
        orderBy: 'Ngô Đình Nam💦',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 78120
      },
      {
        id: '@hauhoang',
        orderBy: 'Hậu Hoàng',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 987412
      },
      {
        id: '@crisdevilgamer7',
        orderBy: ' CrisDevilGamer',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 330333
      },
      {
        id: '@mcmisthy',
        orderBy: 'Misthy',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 98700115
      },
      {
        id: '@quynhalee',
        orderBy: 'Quỳnh Alee',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 781015
      },
      {
        id: '@iammeoangel',
        orderBy: 'Mèo Sao Hoả 🐾',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 897912
      },
      {
        id: '@lebaooffical',
        orderBy: 'Lê Bảo',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 654510
      },
      {
        id: '@chipupu',
        orderBy: 'Chi Pu',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 1248054
      },
      {
        id: '@tunpham97',
        orderBy: 'Tun Phạm Official',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 785402
      },
      {
        id: '@chamsuaa',
        orderBy: 'Châm Sứa 👑',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 5374009
      },
      {
        id: '@huynhlapoffical',
        orderBy: 'Huỳnh Lập Official',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 8784001
      },
      {
        id: '@thu.kobito',
        orderBy: 'Lộc Ánh Thu',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 754100
      },
      {
        id: '@dangthuhaf',
        orderBy: 'Đặng Thu Hà',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 6415015
      },
      {
        id: '@duythamchannel',
        orderBy: 'Duy Thẩm',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 9798500
      },
      {
        id: '@hoigym88',
        orderBy: 'Hội Gym 88',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 25400556
      },
      {
        id: '@phun.anh',
        orderBy: 'Phùn Anh',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 298815
      },
      {
        id: '@huongthuf',
        orderBy: 'Hương Thù',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 4551101
      },
      {
        id: '@hatrungpr0vjp',
        orderBy: 'Hà Trung',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 985110
      },
      {
        id: '@binyetne',
        orderBy: 'Bin Yet yah o ho 🎧',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 74102
      },
      {
        id: '@embexinhxinhh',
        orderBy: 'embexinhxinhh',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 25000
      },
      {
        id: '@quinnhu2006',
        orderBy: 'Quỳnh Như 2006',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 894810
      },
      {
        id: '@teacherba',
        orderBy: 'Thầy Giáo Ba',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 954515
      },
      {
        id: 'e5dcdfsf',
        orderBy: 'Dean Lynch',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '1',
        price: 897400
      },
      {
        id: '@vanessa.vroom',
        orderBy: 'mthư hận hóa',
        productId: 'cdfsfe5d',
        created: '25.05.2021, 10:00',
        status: '0',
        price: 781510
      },
    ];

    this.tinhTongTien()
    this.TongTien()
    this.tinhTongMua()
    this.tinhOnline()
  }
  pageSize = 100
  pageIndex = 1
  p: number = 1;

  onPageChange(pageNumber: number) {
    this.p = pageNumber;
  }

  allmoney : number = 0
  allMoney : number = 0
  //cách 1: sử dụng vòng for
  tinhTongTien(){
    for(let i = 0; i < this.orders.length; i++){
      this.allmoney += this.orders[i]['price']
    }
    // console.log(this.allmoney)
  }
  //cách 2: sử dụng reduce
  TongTien(){
    // this.allMoney = this.orders.reduce((acc, current) => acc + current.price, 0)
    const totalPrice = this.orders.reduce((accumulator, currentOrder) => {
      return accumulator + currentOrder.price;
    }, 0);
      this.allMoney = totalPrice
      // console.log(this.allMoney)
    }

    countBuy : number = 0

    tinhTongMua(){
      this.countBuy = this.orders.length
    }

    online : number = 0
    offline: number = 0
    tinhOnline(){
      for(let i = 0; i < this.orders.length; i++){
        if(this.orders[i]['status'] == '0'){
          this.online += 1
        }else{
          this.offline += 1
        }
      }
    }
}
