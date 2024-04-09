import { Component, OnInit } from '@angular/core';
import { adminList } from 'src/app/shared/data/admin';

@Component({
  selector: 'll-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.scss']
})
export class DashboardProfileComponent implements OnInit {

  constructor() { }


adress
birthDate
full_name
gmail
phone
university
user_name
hobby
gender
major

inforCompany = [
  {
    nameCompany: 'OneLink Việt Nam',
    position : 'Dev frontend',
    dateStartWork: '15/04/2022',
  }
]

nameCompany
position
dateStartWork
  admin =[]
  ngOnInit(): void {
    this.admin = adminList
    this.full_name = adminList[0]['full_name']
    this.gmail = adminList[0]['gmail']
    this.birthDate = adminList[0]['birthDate']
    this.adress = adminList[0]['adress']
    this.phone = adminList[0]['phone']
    this.university = adminList[0]['university']
    this.gender = adminList[0]['gender']
    this.hobby = adminList[0]['hobby']
    this.user_name = adminList[0]['user_name']
    this.nameCompany = this.inforCompany[0]['nameCompany']
    this.position = this.inforCompany[0]['position']
    this.dateStartWork = this.inforCompany[0]['dateStartWork']
    this.major = adminList[0]['major']
  }



}
