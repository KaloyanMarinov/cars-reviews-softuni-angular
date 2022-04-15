import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getRouterParam } from 'src/app/+store/app-selectors';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements  OnDestroy, OnChanges {
  @Input() totalPages: number = 0;
  @Input() type!: string;
  currentPage: number = 1;
  sub!: Subscription;
  pages!: number[];
  router!: any;

  constructor(private store: Store) {
    this.sub = this.store.select(getRouterParam('page')).subscribe(params => {
      if (params) {
        this.currentPage = parseInt(params);
      }
    });
  }

  ngOnChanges(): void {
    if (this.totalPages) {
      this.pages = Array(this.totalPages).fill(0).map((_, i) => i + 1);
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
