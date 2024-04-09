export interface Admin {
  full_name: string;
  user_name: string;
  password: string;
  gmail : string;
  phone : string;
  university: string;
  birthDate: string;
  adress: string;
  gender: string;
  hobby: string;
  major: string;
}

export const adminList: Admin[] = [
  {
    full_name : 'Quang Toàn',
    user_name: 'tonmeoton',
    password: '123456',
    gmail: 'toanqp.tomotek@gmail.com',
    phone: '0868866967',
    university: 'HaUI',
    birthDate: '29-08-2001',
    adress: 'Ba Vì, Hà Nội',
    gender: 'Nam',
    hobby : 'Mèo',
    major: 'Hệ thống thông tin',
  },
];