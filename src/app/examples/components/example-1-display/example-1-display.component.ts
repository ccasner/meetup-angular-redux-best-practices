import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ExampleModel } from '../../models/ExampleModel.model';

@Component({
  selector: 'app-example-1-display',
  templateUrl: './example-1-display.component.html',
  styleUrls: ['./example-1-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example1DisplayComponent implements AfterViewInit {
  displayedColumns = ['id', 'title'];
  exampleData: ExampleModel[];
  dataSource: MatTableDataSource<ExampleModel>;
  @Input() set inputExampleData(exampleData: ExampleModel[]) {
    this.exampleData = exampleData;
    this.dataSource = new MatTableDataSource<ExampleModel>(exampleData);
    this.dataSource.paginator = this.paginator;
  }
  @Output() clearExampleData = new EventEmitter();
  @Output() loadData = new EventEmitter<number>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  clearData() {
    this.clearExampleData.emit();
    this.dataSource.paginator.firstPage();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
