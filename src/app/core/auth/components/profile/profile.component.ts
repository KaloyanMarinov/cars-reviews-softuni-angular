import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Logout } from 'src/app/core/+store/auth/auth-actions';
import { getAuthUser } from 'src/app/core/+store/auth/auth-selectors';
import { IUser } from '../../interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user$!: Observable<IUser | null>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.user$ = this.store.select(getAuthUser);
  }

  logout(): void {
    this.store.dispatch(Logout());
  }
}
