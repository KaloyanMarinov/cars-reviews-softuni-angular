import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getIsAuthenticated } from '../../+store/auth/auth-selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged$!: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isLogged$ = this.store.select(getIsAuthenticated);
  }
}
