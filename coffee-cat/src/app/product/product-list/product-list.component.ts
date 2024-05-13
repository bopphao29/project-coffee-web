import { Component, OnInit } from '@angular/core';
import { productsDB } from '../../shared/data/products';
import { FormGroup, FormControl, FormBuilder, Validators ,AbstractControl} from '@angular/forms'; 
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/api.service';
import { PaginationInstance } from 'ngx-pagination';

export interface Product{
  name: string,
  price: number,
}

interface ApiResponse {
  data: any[]; // Kiểu dữ liệu của items
  // Các thuộc tính khác trong phản hồi nếu có
  totalItems: number;
}

@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  products = [];
  formSearch : FormGroup
  searchItem: string
  filteredItems: string[]
  countProductFilter = -1
  items: any[] = []; 
  pageSize = 8; 
  p: number = 1; 
  data1 : any[]
  pageIndex = 1

  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 100;
  totalPages = Math.ceil(this.totalItems / this.itemsPerPage);


  collection: any[]; // Dữ liệu cần phân trang
  pagedCollection: any[]; // Dữ liệu trên trang hiện tại
  config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 5,
    currentPage: 1
  };

  constructor(
    public formBuilder : FormBuilder,
    private router: Router,
    private apiServices: ApiService
  ) {
    this.collection = Array.from({ length: 20 }).map((_, index) => `Item ${index + 1}`);
    this.updatePageData();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.products = productsDB.Product;
      this.isLoaded = true
    }, 2000)

    this.form()
    this.getList()
  }

  

  get f(): { [key: string]: AbstractControl } {
    return this.formSearch.controls;
  }

  makeFormLogin(d?) {
    return this.formBuilder.group({
      drink : ['' || -1],
      cast: ['' || -1],
    })
  }

  product: Product= {
    name: '',
    price: 0,
  }

  // onPageChange(event: any) {
  //   this.pageIndex = event
  //   this.getList();
  // }

  updatePageData() {
    const startIndex = (this.config.currentPage - 1) * this.config.itemsPerPage;
    const endIndex = startIndex + this.config.itemsPerPage;
    this.pagedCollection = this.collection.slice(startIndex, endIndex);
  }

  onPageChange(pageNumber: number) {
    this.config.currentPage = pageNumber;
    this.updatePageData();
  }
  // totalItems : number

  getList(){
    this.apiServices.getListProduct(this.pageIndex, this.pageSize).subscribe((data: ApiResponse) => {
      console.log(data)
      this.items = data['data']['items']
      const lengthList = data['data']['total'] / this.items.length
      this.totalItems = lengthList
      console.log(this.totalItems)
    })
  }

  form(){
    this.formSearch = this.makeFormLogin()
  }


  filter(){
    this.filteredItems = this.products.filter(item =>{
     let searchItem = this.searchItem.toUpperCase()
     let itemName = item.name.toUpperCase()
      return itemName.indexOf(searchItem) >= 0
    })
    // console.log(this.filteredItems)
    if(this.filteredItems.length == 0){
      this.countProductFilter = 0
    }else{
      this.countProductFilter = 1
    }
}


items1 = Array.from({length: 100}).map((_, i) => `Item #${i + 1}`);
  pageSize1 = 5;
  currentPage1 = 1;

  get pagedItems() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.items.slice(startIndex, startIndex + this.pageSize);
  }

  get totalItems1() {
    return this.items.length;
  }

  get maxSize() {
    return 5;
  }

  get rotate() {
    return true;
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
  }

}
