import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoading = false;
  loginMode = true;
  error: string = null;
  constructor(private authService: AuthService, private router: Router) { }
  onSwitchMode() {
    this.loginMode = !this.loginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    let authObs :Observable<AuthResponseData>;
      const email = form.value.email;
      const password = form.value.password;
      this.isLoading = true;
    if (this.loginMode) {
      authObs = this.authService.login(email,password);
     }
    else {
      authObs = this.authService.signUp(email, password);
    }
    authObs.subscribe(
        (respData) => {
          console.log(respData);
          this.isLoading = false;
          this.router.navigate(['/recipes']);
        }, errorMessage => {
          this.isLoading = false;
          console.log(errorMessage);
          this.error = errorMessage;
         }
      )
    form.reset();
  }
  onHandleError() {
    this.error = null;
  }
}
