import { Component, OnInit } from '@angular/core';
import { productsDB } from '../../shared/data/products';
import { FormGroup, FormControl, FormBuilder, Validators ,AbstractControl} from '@angular/forms'; 
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/api.service';

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

  constructor(
    public formBuilder : FormBuilder,
    private router: Router,
    private apiServices: ApiService
  ) {}

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

  totalItems : number

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

  onPageChange(event: any) {
    this.getList();
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
}
