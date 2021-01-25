import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/Router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });
  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  getErrorMessage(): string{
    return 'Required';
  }

  submit(): void{
    if (!this.loginForm.invalid) {
      console.log(this.loginForm.value.email, this.loginForm.value.password);
      this.router.navigate(['home']);
      this.authenticationService.saveToken('test');
    }
  }

}
