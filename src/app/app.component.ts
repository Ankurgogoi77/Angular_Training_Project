import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shopping Project';
  private authSvc = inject(AuthService)
  private changeDetectorRef = inject(ChangeDetectorRef)

  isAdminLoggedIn = false
  

  ngOnInit(){

    if(sessionStorage.getItem("user") != null){
      this.authSvc.setLoggedIn(true)
    }


    this.authSvc.currentLoggedIn.subscribe({
      next: (data) => this.isAdminLoggedIn=data
    })
  }
  ngAfterContentChecked(){
    this.changeDetectorRef.detectChanges()
  }
}
