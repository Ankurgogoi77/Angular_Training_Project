import { Component, inject } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { User } from '../../models/user.model';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ RouterLink, MatSelectModule, MatCardModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: '../auth.styles.css'
})
export class RegisterComponent {
  private toastr = inject(ToastrService)
  hide = true;

  frmUser:User = new User("","","")

  doRegister(valid:any){
    if(valid){
      console.log("")
    }
    else{
      this.toastr.error("Please enter a valid")
    }
  }

}
