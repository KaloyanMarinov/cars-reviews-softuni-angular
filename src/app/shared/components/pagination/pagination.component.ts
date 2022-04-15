import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 0;
  @Input() type!: string;
  pages!: number[];

  constructor() {
  }

  ngOnInit(): void {
    if (this.totalPages) {
      console.log(this.totalPages);
      this.pages = Array(this.totalPages).fill(0).map((_, i) => i + 1);
    }
  }
}
