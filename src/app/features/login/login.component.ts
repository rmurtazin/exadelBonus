import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public myForm: FormGroup;
  public subscription: Subscription = new Subscription();
  public hide = true;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.onInitForm();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public onInitForm(): void {
    this.myForm = new FormGroup({
      userLogin: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [Validators.required]),
    });
  }

  public onToggleClickPasswordIcon(): void {
    this.hide = !this.hide;
  }

  public onSubmit(): void {
    this.subscription.add(
      this.loginService.onLogin(this.myForm.value).subscribe(() => {
        // this.router.navigate(['home']);
        this.router.navigateByUrl('/home');
      }),
    );
  }
}
