import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


    currentLoggedIn = new BehaviorSubject(false)

    setLoggedIn(newval: boolean){
       this.currentLoggedIn.next(newval)
    }

    constructor(){
    
   }
  }

