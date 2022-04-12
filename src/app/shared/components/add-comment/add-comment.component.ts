import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ClearMessage } from 'src/app/+store/app-actions';
import { getAppMessage } from 'src/app/+store/app-selectors';
import { AddCarComment, CarCommentsSuccess } from 'src/app/cars/+store/cars-actions';
import { getIsAuthenticated, getAuthUser } from 'src/app/core/+store/auth/auth-selectors';
import { IAuthState, IUser } from 'src/app/core/auth/interfaces';
import { IAddComment, IMessage } from '../../interfaces';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Input() postId!: string | undefined;
  isLogged!: boolean;
  user!: IUser | null;
  commentForm!: FormGroup;
  message!: IMessage;
  formValid!: boolean | null;
  submiting: boolean = false;
  sub!: Subscription;
  ratingValues = Array(5).fill(0).map((_, i) => i + 1);

  constructor(
    private store: Store<IAuthState>,
    private commentsService: CommentsService
  ) { }

  ngOnInit(): void {
    this.sub = this.store.select(getIsAuthenticated).subscribe(logged => this.isLogged = logged);
    this.sub.add(
      this.store.select(getAuthUser).subscribe(user => this.user = user)
    );

    this.sub.add(this.store.select(getAppMessage).subscribe(message => {
      if (message.type) {
        this.formValid = !message.type;
        this.submiting = false;
        this.commentForm.reset();
        this.f?.rating.setValue(5);
        this.message = message;
        this.commentForm.removeValidators;
        setTimeout(() => {
          this.store.dispatch(ClearMessage());
        }, 1500);
      }
    }));

    this.commentForm = new FormGroup({
      rating: new FormControl(5, [Validators.required]),
      comment: new FormControl('', [Validators.required, Validators.minLength(20)]),
    });
  }

  get f() {
    return this.commentForm.controls;
  }

  addComment(): void {
    this.store.dispatch(ClearMessage());
    this.formValid = this.commentForm.valid;
    const data: IAddComment = {
      comment: this.f.comment.value,
      rating: parseInt(this.f.rating.value),
      user_id: this.user?._id,
      post_id: this.postId,
      author: [this.user?.firstname, this.user?.lastname].join(' ')
    };

    if (this.formValid) {
      this.formValid = false;
      this.submiting = true;
      this.store.dispatch(AddCarComment({ data }));
    } else {
      this.formValid = true;
      this.submiting = false;
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
