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
  showModalEdit = false;
  toggleModal(){
    this.createCate.name = ''
    this.createCate.description = ''
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
    description: "",
    status: "",
  }

  createCategories(){
    this.apiServices.createCategory(this.createCate.name, this.createCate.description).subscribe
    (data => {
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
    }
  )
  }

  deleteCate(item){
    this.apiServices.deleteCategory(item.id).subscribe((data) =>{
      // console.log(data);
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
        title: "Xóa thành công"
      });

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
                title: "Xóa thất bại"
              });
    }
  )
  }


  id : number
  toggleModalEdit(category){
    this.showModalEdit = !this.showModalEdit;
    if(this.showModalEdit){
      this.apiServices.getDetailCategories(this.pageIndex, this.pageSize,category.id).subscribe((data) => {
        console.log(data)
        this.id = data['data'].id
        console.log(this.id);
        
        // this.items = data['data']
        this.createCate.name = data['data'].name
        this.createCate.description = data['data'].description
        this.createCate.status = data['data'].status
        // this.createPro.name = data['data'].category
      })
      
    }
  }

  updateCtegory(){
    const body = {
      "id" : this.id,
      "name": this.createCate.name, // tên sản phẩm
      "description": this.createCate.description, // danh mục
      "status": this.createCate.status, // giá 
    }
    this.apiServices.updateCate(body).subscribe((data) => {
      console.log(data)
      const Toast= Swal.mixin({
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
        title: "Sửa thành công"
      });
      this.getList()
      this.showModalEdit = !this.showModalEdit
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
                title: "Sửa thất bại"
              });
    }

      )
      // this}}
  }

}
