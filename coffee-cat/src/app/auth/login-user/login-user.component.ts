import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators ,AbstractControl} from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private apiServices: ApiService
  ) { }

  ngOnInit(): void {
  }

  formLogin = {
    username: '',
    password: '',
  }

  onSubmit() {
    this.apiServices.login(this.formLogin.username, this.formLogin.password).pipe(map(item=>item['data'])).subscribe(data => {
      console.log(data)
      // sessionStorage.setItem('access_token', data['accessToken'])
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
}
