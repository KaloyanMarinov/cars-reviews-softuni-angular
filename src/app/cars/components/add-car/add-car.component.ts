import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ClearMessage } from 'src/app/+store/app-actions';
import { getAppMessage } from 'src/app/+store/app-selectors';
import { IMessage } from 'src/app/shared/interfaces';
import { AddCar } from '../../+store/cars-actions';
import { IAddCar, IUploadImage } from '../../interfaces';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  addCarForm!: FormGroup;
  Editor = ClassicEditor;
  message!: IMessage;
  formValid!: boolean | null;
  ratingValues = Array(5).fill(0).map((_, i) => i + 1);
  submiting = false;
  sub!: Subscription;
  image!: IUploadImage;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.addCarForm = new FormGroup({
      brand: new FormControl('', [Validators.required]),
      model: new FormControl('', Validators.required),
      year: new FormControl('', [Validators.required, Validators.maxLength(4)]),
      rating: new FormControl(5, [Validators.required]),
      content: new FormControl('', [Validators.required]),
      pawPrintPicture: new FormControl('')
    });

    this.sub = this.store.select(getAppMessage).subscribe(message => {
      if (message.type) {
        this.formValid = !message.type;
        this.submiting = false;
        this.addCarForm.reset();
        this.addCarForm.removeValidators;
        this.f?.rating.setValue(5);
        setTimeout(() => {
          this.store.dispatch(ClearMessage());
        }, 1500);
      }
      this.message = message
    });
  }

  onSubmit(): void {
    this.formValid = this.addCarForm.valid;
    const data: IAddCar = this.addCarForm.value;
    data.rating = parseInt(this.f.rating.value);

    if (this.formValid) {
      this.formValid = false;
      this.submiting = true;
      this.store.dispatch(AddCar({data}));
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
