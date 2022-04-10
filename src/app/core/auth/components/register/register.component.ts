import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getAppMessage } from 'src/app/+store/app-selectors';
import { Register } from 'src/app/core/+store/auth/auth-actions';
import { IMessage } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  message!: IMessage;
  formValid!: boolean | null;
  sub!: Subscription;

  constructor(private store: Store) {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.sub = this.store.select(getAppMessage).subscribe(message => {
      if (message?.type) {
        this.formValid = !message.type;
        this.registerForm.reset();
      }
      this.message = message
    });
  }

  onSubmit(): void {
    this.formValid = this.registerForm.valid;
    const data = this.registerForm.value;

    if (this.formValid) {
      this.formValid = false;
      this.store.dispatch(Register(data));
    } else {
      this.formValid = true;
    }
  }

  get f() {
    return this.registerForm.controls;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
