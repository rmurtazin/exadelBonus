import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'services/auth.service';
import { IRequestedUser } from 'interfaces/.'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private authService: AuthService, private router: Router){}
  
  ngOnInit(): void {}

  loginGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  
  hide = true;
  get emailInput() { return this.loginGroup.get('email'); }
  get passwordInput() { return this.loginGroup.get('password'); } 

  login() {
    this.authService.login(this.emailInput?.value, this.passwordInput?.value)
      .subscribe(( user:IRequestedUser)  => {
        this.router.navigate(['/']);
      });
  }
}
