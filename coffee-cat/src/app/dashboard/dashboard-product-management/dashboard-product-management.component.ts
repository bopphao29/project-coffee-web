import { Component, OnInit } from '@angular/core';
import { productsDB } from 'src/app/shared/data/products';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dashboard-product-management',
  templateUrl: './dashboard-product-management.component.html',
  styleUrls: ['./dashboard-product-management.component.scss']
})
export class DashboardProductManagementComponent implements OnInit {

  constructor(
    public formBuilder : FormBuilder,
    private router: Router,
    private apiServices: ApiService
  ) { }

  view = 'list';
  pageSize = 8; 
  p: number = 1; 
  data1 : any[]
  pageIndex = 1
  items: any[]
  name1: string

  products;

  ngOnInit(): void {
    this.getList()
  }

  createPro ={
    name:"",
    categoryId: "",
    price: "", 
    discount: "", 
    description: "", 
    imageUrl: "",
    status: ""
  }
  
  showModal = false;
  showModalEdit = false;

  toggleModal(){
    
    this.createPro.name = ''
    this.createPro.categoryId = ''
    this.createPro.price = ''
    this.createPro.discount =''
    this.createPro.description = ''
    this.createPro.imageUrl =''
    this.createPro.status =''
    this.showModal = !this.showModal;
  }
  id : number
  toggleModalEdit(product){
    this.showModalEdit = !this.showModalEdit;
    if(this.showModalEdit){
      this.apiServices.getDetail(this.pageIndex, this.pageSize,product.id).subscribe((data) => {
        console.log(data)
        this.id = data['data'].id
        console.log(this.id);
        
        // this.items = data['data']
        this.createPro.name = data['data'].name
        this.createPro.categoryId = data['data'].categoryId
        this.createPro.price = data['data'].price
        this.createPro.discount = data['data'].discount
        this.createPro.description = data['data'].description
        this.createPro.imageUrl = data['data'].imageUrl
        this.createPro.status = data['data'].status
        // this.createPro.name = data['data'].category
      })
      
    }
  }
  updateProduct(){
    const body = {
      "id" : this.id,
      "name": this.createPro.name, // tên sản phẩm
      "categoryId": this.createPro.categoryId, // danh mục
      "price": this.createPro.price, // giá 
      "discount": this.createPro.discount, // giá giảm
      "description": this.createPro.description, // mô tả
      "imageUrl": this.createPro.imageUrl, // link url của anh
      "status": this.createPro.status // 1 - đang kinh doanh, 0 - ngừng kinh doanh
    }
    this.apiServices.update(body).subscribe((data) => {
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
  getList(){
    this.apiServices.getListProduct(this.pageIndex, this.pageSize).subscribe((data) => {
      console.log(data)
      this.items = data['data']['items']
      console.log(this.items)
    })
  }
  createProduct(){
    this.apiServices.createProduct(this.createPro.name, this.createPro.categoryId,this.createPro.price, this.createPro.discount, this.createPro.description, this.createPro.imageUrl).subscribe(data => {
      console.log(data)
    })
  }

  deleteProduct(item){
    this.apiServices.deleteProduct(item.id).subscribe((data) => {
      console.log(data)
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
}
