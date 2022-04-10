import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getAppMessage } from 'src/app/+store/app-selectors';
import { Login } from 'src/app/core/+store/auth/auth-actions';
import { IMessage } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  message!: IMessage;
  formValid!: boolean| null;
  sub!: Subscription;

  constructor(private store: Store) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.sub = this.store.select(getAppMessage).subscribe(message => {
      this.formValid = message?.type;
      this.message = message
    });
  }


  onSubmit(): void {
    this.formValid = this.loginForm.valid;
    const data = this.loginForm.value;

    if (this.formValid) {
      this.formValid = false;
      this.store.dispatch(Login(data));
    } else {
      this.formValid = true;
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
