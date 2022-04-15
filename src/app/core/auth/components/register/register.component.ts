import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getAppMessage } from 'src/app/+store/app-selectors';
import { Register } from 'src/app/core/+store/auth/auth-actions';
import { IMessage } from 'src/app/shared/interfaces';
import { emailValidator } from 'src/app/shared/validators/email-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  message!: IMessage;
  formValid!: boolean | null;
  submiting = true;
  sub!: Subscription;

  constructor(private store: Store) {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, emailValidator]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.sub = this.store.select(getAppMessage).subscribe(message => {
      this.formValid = message.type;
      this.submiting = false;
      this.message = message
      this.registerForm.reset();
    });
  }

  onSubmit(): void {
    this.formValid = this.registerForm.valid;
    const data = this.registerForm.value;

    if (this.formValid) {
      this.formValid = false;
      this.submiting = true;
      this.store.dispatch(Register(data));
    } else {
      this.submiting = false;
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
