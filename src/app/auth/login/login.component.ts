import { Component, inject } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterLink, MatCardModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: '../auth.styles.css'
})
export class LoginComponent {
  private toastr = inject(ToastrService)
  private router = inject(Router)
  private authSvc = inject(AuthService)

  hide = true

  loginForm:FormGroup

  constructor(){
    this.loginForm = new FormGroup({
      uname: new FormControl("",Validators.required),
      upwd: new FormControl("",Validators.required)
    })
  }

  doLogin(){
    // console.log("Form Valid?", this.loginForm.valid)
    // console.log("Values: ", this.loginForm.value)
    // console.log("Form Invalid?", this.loginForm.invalid)


    if(this.loginForm.invalid){
      //console.log("No input data")
      this.toastr.error("Please enter Credentials")
    }
    else{
      let username = this.loginForm.value.uname
      let password = this.loginForm.value.upwd

      if(username == "uhg" && password == "admin"){
        //console.log("Login Successful")
        this.toastr.success("Login Successful")
        sessionStorage.setItem("user", username)
        this.authSvc.setLoggedIn(true)
        this.router.navigate(["/dashboard"])
      }
      else{
        //console.log("Login Failed: Invalid credentials")
        this.toastr.error("Login Failed: Invalid credentials")
      }

    }
  }

}
