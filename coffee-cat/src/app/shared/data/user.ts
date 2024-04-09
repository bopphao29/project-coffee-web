export interface User {
  full_name: string;
  user_name: string;
  password: string;
  gmail : string;
  phone : string;
  birthDate: string;
  adress: string;
  gender: string;
}

export const userList: User[] = [
  {
    full_name : 'Nguyễn Văn A',
    user_name: 'nva123',
    password: '123456',
    gmail: 'nva123@gmail.com',
    phone: '085468767',
    birthDate: '09-01-2001',
    adress: 'Ba Vì, Hà Nội',
    gender: 'Nam',
  },
  {
    full_name : 'Nguyễn Văn B',
    user_name: 'nvb123',
    password: '123456',
    gmail: 'nvb123@gmail.com',
    phone: '08634567',
    birthDate: '04-09-1987',
    adress: 'Sơn Tây, Hà Nội',
    gender: 'Nam',
  },
  {
    full_name : 'Nguyễn Thị C',
    user_name: 'ntc',
    password: '123456',
    gmail: 'ntc@gmail.com',
    phone: '0868866967',
    birthDate: '06-11-2000',
    adress: 'Phùng, Hà Nội',
    gender: 'Nữ',
  },
  {
    full_name : 'park ji sung',
    user_name: 'pjs123',
    password: '123456',
    gmail: 'pjs123@gmail.com',
    phone: '095662767',
    birthDate: '25-12-1997',
    adress: 'Trạm Trôi, Hà Nội',
    gender: 'Nam',
  },
];