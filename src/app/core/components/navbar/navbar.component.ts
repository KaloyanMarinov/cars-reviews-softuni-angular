import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICoreState } from '../../+store';
import { isAdmin } from '../../+store/auth/auth-selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAdmin$!: Observable<boolean>;

  constructor(private store: Store<ICoreState>) { }

  ngOnInit(): void {
    this.isAdmin$ = this.store.select(isAdmin);
  }
}
