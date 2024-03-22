import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  template: `
<h2>You have successfully logged out</h2>
  `,
  styles: ``
})
export class LogoutComponent {
  private authSvc = inject(AuthService);
    
  constructor(){
    console.log("Logout TS file is running")
  }

  ngOnInit(){
    sessionStorage.clear()
    this.authSvc.setLoggedIn(false);
  }


}
