import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public myForm: FormGroup;
  public subscription: Subscription = new Subscription();
  public hide = true;

  constructor() { }

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
    this.subscription = this.authServices.onLogin(this.myForm.value).subscribe(
      (user) => {
        //here will be like this.router.navigateByUrl('/home');
      },
      (error) => {
        //here will be service like ngx-toastr
        console.log({ error });
      }
    );
    console.log(this.myForm.value)
  }

}
