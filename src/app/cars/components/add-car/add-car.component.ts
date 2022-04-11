import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getAppMessage } from 'src/app/+store/app-selectors';
import { IMessage } from 'src/app/shared/interfaces';
import { AddCar } from '../../+store/cars-actions';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  addCarForm!: FormGroup;
  message!: IMessage;
  formValid!: boolean | null;
  ratingValues = Array(5).fill(0).map((_, i) => i + 1);
  submiting = false;
  sub!: Subscription;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.addCarForm = new FormGroup({
      brand: new FormControl('', [Validators.required]),
      model: new FormControl('', Validators.required),
      year: new FormControl('', [Validators.required]),
      rating: new FormControl(5, [Validators.required]),
      content: new FormControl('', [Validators.required]),
      picture: new FormControl('')
    });

    this.sub = this.store.select(getAppMessage).subscribe(message => {
      this.formValid = message.type;
      this.message = message
      this.submiting = false;
    });
  }


  onSubmit(): void {
    this.formValid = this.addCarForm.valid;
    const data = this.addCarForm.value;

    if (this.formValid) {
      this.formValid = false;
      this.submiting = true;
      this.store.dispatch(AddCar(data));
    } else {
      this.submiting = true;
      this.formValid = true;
    }
  }

  get f() {
    return this.addCarForm.controls;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
