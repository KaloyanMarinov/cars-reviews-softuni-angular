import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subscription, tap } from 'rxjs';
import { ClearMessage } from 'src/app/+store/app-actions';
import { getAppMessage, getRouterUrl } from 'src/app/+store/app-selectors';
import { IAppState, IMessage, IRouterState } from 'src/app/shared/interfaces';
import { AddCar, UpdateCar } from '../../+store/cars-actions';
import { getCarsCar } from '../../+store/cars-selectors';
import { IAddCar, ICar, IUploadImage } from '../../interfaces';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  car$!: Observable<ICar>;
  carId!: string;
  carForm!: FormGroup;
  addMode = true;
  Editor = ClassicEditor;
  message!: IMessage;
  formValid!: boolean | null;
  ratingValues = Array(5).fill(0).map((_, i) => i + 1);
  submiting = false;
  sub!: Subscription;
  // image!: IUploadImage;

  constructor(private store: Store<IAppState | IRouterState>) { }

  ngOnInit(): void {
    this.carForm = new FormGroup({
      brand: new FormControl('', [Validators.required]),
      model: new FormControl('', Validators.required),
      year: new FormControl('', [Validators.required, Validators.maxLength(4)]),
      rating: new FormControl(5, [Validators.required]),
      content: new FormControl('', [Validators.required]),
      pawPrintPicture: new FormControl('')
    });

    this.sub = this.store.select(getRouterUrl).subscribe(url => {
      if (url.endsWith('edit')) {
        this.addMode = false;
        this.store.select(getCarsCar).subscribe((car) => {
          this.carId = car._id;
          this.carForm.patchValue(car);
        });
      }
    });

    this.sub = this.store.select(getAppMessage).subscribe(message => {
      if (message.type) {
        this.formValid = !message.type;
        this.submiting = false;
        setTimeout(() => {
          this.store.dispatch(ClearMessage());
        }, 1500);

        if (this.addMode) {
          this.carForm.reset();
          this.carForm.removeValidators;
          this.f?.rating.setValue(5);
        }
      }
      this.message = message
    });
  }

  onSubmit(): void {
    this.formValid = this.carForm.valid;
    const data: IAddCar = this.carForm.value;
    data.rating = parseInt(this.f.rating.value);

    if (this.formValid) {
      this.formValid = false;
      this.submiting = true;
      if (this.addMode) {
        this.store.dispatch(AddCar({ data }));
      } else {
        this.store.dispatch(UpdateCar({id: this.carId, data }));
      }
    } else {
      this.submiting = true;
      this.formValid = true;
    }
  }

  get f() {
    return this.carForm.controls;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
