import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthServices } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [AuthServices],
})
export class AuthComponent implements OnInit, OnDestroy {
  myForm: FormGroup;
  aSub: Subscription;
  hide: boolean = true;

  constructor(private authServices: AuthServices) {}

  ngOnInit(): void {
    this.onInitForm();
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  onInitForm(): void {
    this.myForm = new FormGroup({
      userLogin: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.aSub = this.authServices.onLogin(this.myForm.value).subscribe(
      (user) => {
        console.log('Login Succses', user);
        // here will be redirected to Home Page
      },
      (error) => {
        console.log({ error: error });
        this.myForm.enable();
      }
    );
  }
}
