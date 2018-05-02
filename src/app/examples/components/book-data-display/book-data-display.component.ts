import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BookModel } from '../../models/BookModel.model';

@Component({
  selector: 'app-book-data-display',
  templateUrl: './book-data-display.component.html',
  styleUrls: ['./book-data-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDataDisplayComponent implements AfterViewInit {
  displayedColumns = ['id', 'title'];
  books: BookModel[];
  dataSource: MatTableDataSource<BookModel>;

  @Input() set inputExampleData(exampleData: BookModel[]) {
    this.books = exampleData;
    this.setDataSource(this.books, this.paginator, this.sort);
  }
  @Output() clearBookData = new EventEmitter();
  @Output() loadBooks = new EventEmitter<number>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  clearData() {
    this.clearBookData.emit();
    this.dataSource.paginator.firstPage();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  setDataSource(exampleData: BookModel[], paginator: MatPaginator, sort: MatSort) {
    this.dataSource = new MatTableDataSource<BookModel>(exampleData);

    if (paginator) {
      this.dataSource.paginator = paginator;
    }

    if (sort) {
      this.dataSource.sort = sort;
      if (this.dataSource.sort.sortables.has('id')) {
        const idSortable = this.dataSource.sort.sortables.get('id');
        if (this.dataSource.sort.getNextSortDirection(idSortable) === 'asc') {
          this.dataSource.sort.sort(idSortable);
        }
      }
    }
  }
}
