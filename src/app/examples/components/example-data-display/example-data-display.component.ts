import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, SortDirection } from '@angular/material';
import { ExampleModel } from '../../models/ExampleModel.model';

@Component({
  selector: 'app-example-data-display',
  templateUrl: './example-data-display.component.html',
  styleUrls: ['./example-data-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleDataDisplayComponent implements AfterViewInit {
  displayedColumns = ['id', 'title'];
  exampleData: ExampleModel[];
  dataSource: MatTableDataSource<ExampleModel>;

  @Input() set inputExampleData(exampleData: ExampleModel[]) {
    this.exampleData = exampleData;
    this.setDataSource(this.exampleData, this.paginator, this.sort);
  }
  @Output() clearExampleData = new EventEmitter();
  @Output() loadData = new EventEmitter<number>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  clearData() {
    this.clearExampleData.emit();
    this.dataSource.paginator.firstPage();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  setDataSource(exampleData: ExampleModel[], paginator: MatPaginator, sort: MatSort) {
    this.dataSource = new MatTableDataSource<ExampleModel>(exampleData);

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
