import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAuthUser, getIsAuthenticated } from '../../+store/auth/auth-selectors';
import { IUser } from '../../auth/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged$!: Observable<boolean>;
  user$!: Observable<IUser>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isLogged$ = this.store.select(getIsAuthenticated);
    this.user$ = this.store.select(getAuthUser);
  }
}
