export interface Menu {
  path: string;
  name: string;
}

export const menuList: Menu[] = [
  {
    path: '/products',
    name: 'SẢN PHẨM'
  },
  {
    path: '/sale',
    name: 'KHUYẾN MÃI'
  },
  {
    path: '/about',
    name: 'VỀ CHÚNG TÔI'
  },
  {
    path: '/contact',
    name: 'LIÊN HỆ'
  },
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard'
  // },
  // {
  //   path: '/doc',
  //   name: 'Doc'
  // }
];
