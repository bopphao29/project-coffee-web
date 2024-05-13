import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2'

interface ApiResponse {
  data: any[]; // Kiểu dữ liệu của items
  // Các thuộc tính khác trong phản hồi nếu có
  totalItems: number;
}


@Component({
  selector: 'app-dashboard-category',
  templateUrl: './dashboard-category.component.html',
  styleUrls: ['./dashboard-category.component.scss']
})
export class DashboardCategoryComponent implements OnInit {

  name : string
  constructor(
    public formBuilder : FormBuilder,
    private router: Router,
    private apiServices: ApiService
  ) { }


  pageSize = 8; 
  p: number = 1; 
  data1 : any[]
  pageIndex = 1
  items: any[]
  ngOnInit(): void {
    this.getList()
  }

  showModal = false;
  showModalChangePasword = false;

  toggleModal(){
    this.showModal = !this.showModal;
  }

  getList(){
    this.apiServices.getListCategory(this.pageIndex, this.pageSize).subscribe((data) => {
      console.log(data)
      this.items = data['data']['items']
      // const lengthList = data['data']['total'] / this.items.length
      // this.totalItems = lengthList
      console.log(this.items)
    })
  }

  createCate ={
    name: "",
    description: ""
  }

  createCategories(){
    this.apiServices.createCategory(this.createCate.name, this.createCate.description).subscribe(data => {
      console.log(data)
      // sessionStorage.setItem('access_token', data['accessToken'])
      // localStorage.setItem('access_token', data['accessToken'])
      // this.router.navigate(['/dashboard'])
          const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Thêm thành công"
              });
              this.showModal = !this.showModal
              this.getList()
    }, err => {
      const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "error",
                title: "Thêm thất bại"
              });
    })
  }
}
