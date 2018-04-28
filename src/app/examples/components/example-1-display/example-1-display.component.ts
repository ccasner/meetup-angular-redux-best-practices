import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ExampleModel } from '../../models/ExampleModel.model';

@Component({
  selector: 'app-example-1-display',
  templateUrl: './example-1-display.component.html',
  styleUrls: ['./example-1-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example1DisplayComponent {
  displayedColumns = ['id', 'title'];
  dataSource: MatTableDataSource<ExampleModel>;
  @Input() set exampleData(data: ExampleModel[]) {
    this.dataSource = new MatTableDataSource<ExampleModel>(data);
    this.dataSource.paginator = this.paginator;
  }
  @Output() clearExampleData = new EventEmitter();
  @Output() loadData = new EventEmitter<number>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  clearData() {
    this.clearExampleData.emit();
    this.dataSource.paginator.firstPage();
  }
}
