import { Component, OnInit } from '@angular/core';
import { adminList as staticAdminList } from '../../shared/data/admin';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators ,AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user_name: string
  password: string
  adminList = []
  submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private apiServices: ApiService

  ) { }
  ngOnInit(): void {
    // this.getByAdmin()
  }

  formLogin = {
    username: '',
    password: '',
  }

  // getByAdmin(){
  //   this.adminList = staticAdminList
  // }

  onSubmit() {
    this.apiServices.login(this.formLogin.username, this.formLogin.password).pipe(map(item=>item['data'])).subscribe(data => {
      console.log(data)
      sessionStorage.setItem('access_token', data['accessToken'])
      // localStorage.setItem('access_token', data['accessToken'])
      this.router.navigate(['/dashboard'])
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
                title: "Đăng nhập thành công"
              });
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
                title: "Sai tên đăng nhập hoặc mật khẩu"
              });
    })
  }

  // checkAccount(){
  //   this.submitted = true
  //   if (this.formLogin.valid) {
  //     alert('Form Submitted succesfully!!!\n Check the values in browser console.');
  //     console.table(this.formLogin.value);
  //   }
  //   else{
  //     if(this.formLogin.value.user_name == staticAdminList[0].user_name && this.formLogin.value.password == staticAdminList[0].password){
  //       this.router.navigate(['/dashboard'])
  //       const Toast = Swal.mixin({
  //         toast: true,
  //         position: "top-end",
  //         showConfirmButton: false,
  //         timer: 2000,
  //         timerProgressBar: true,
  //         didOpen: (toast) => {
  //           toast.onmouseenter = Swal.stopTimer;
  //           toast.onmouseleave = Swal.resumeTimer;
  //         }
  //       });
  //       Toast.fire({
  //         icon: "success",
  //         title: "Đăng nhập thành công"
  //       });
  //     }else{
  //       const Toast = Swal.mixin({
  //         toast: true,
  //         position: "top-end",
  //         showConfirmButton: false,
  //         timer: 2000,
  //         timerProgressBar: true,
  //         didOpen: (toast) => {
  //           toast.onmouseenter = Swal.stopTimer;
  //           toast.onmouseleave = Swal.resumeTimer;
  //         }
  //       });
  //       Toast.fire({
  //         icon: "error",
  //         title: "Sai tên đăng nhập hoặc mật khẩu"
  //       });
  //     }
  //   }
  // }


}
