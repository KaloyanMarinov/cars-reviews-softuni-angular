import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getAppMessage, getRouterUrl } from 'src/app/+store/app-selectors';
import { isAdmin } from 'src/app/core/+store/auth/auth-selectors';
import { IMessage } from 'src/app/shared/interfaces';
import { CarClear, DeleteCar } from '../../+store/cars-actions';
import { getCarsCar } from '../../+store/cars-selectors';
import { ICar, ICarsState } from '../../interfaces';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit, OnDestroy {
  car$!: Observable<ICar>;
  isAdmin$!: Observable<boolean>;
  sub!: Subscription;
  message!: IMessage;
  goToEdit = false;
  constructor(
    private store: Store<ICarsState>,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.car$ = this.store.select(getCarsCar);
    this.isAdmin$ = this.store.select(isAdmin);

    this.sub = this.store.select(getRouterUrl).subscribe(url => {
      if (url.endsWith('edit')) {
        this.goToEdit = true;
      }
    });

    this.sub = this.store.select(getAppMessage).subscribe(message => {
      this.message = message;
      if (message.messageText && !message.type) {
        setTimeout(() => {
          this.route.navigate(['/'])
        }, 1500);
      }
    });
  }

  ngOnDestroy(): void {
    if (!this.goToEdit) {
      this.store.dispatch(CarClear());
    }
    this.sub.unsubscribe();
  }

  deleteCar(e: Event, id: string): void {
    (e.target as HTMLButtonElement).classList.add('loading');
    this.store.dispatch(DeleteCar({ id }))
  }
}
