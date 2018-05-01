import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ArticlesModel } from '../../models/HackerNewsModel.model';

@Component({
  selector: 'app-hacker-news-articles-display',
  templateUrl: './hacker-news-articles-display.component.html',
  styleUrls: ['./hacker-news-articles-display.component.scss']
})
export class HackerNewsArticlesDisplayComponent implements AfterViewInit {

  displayedColumns = ['author', 'title'];
  articles: ArticlesModel[];
  dataSource: MatTableDataSource<ArticlesModel>;

  @Input() set inputArticles(articles: ArticlesModel[]) {
    this.articles = articles;
    this.setDataSource(this.articles, this.paginator, this.sort);
  }
  @Output() clearArticles = new EventEmitter();
  @Output() loadArticles = new EventEmitter();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  clearData() {
    this.clearArticles.emit();
    this.dataSource.paginator.firstPage();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  setDataSource(exampleData: ArticlesModel[], paginator: MatPaginator, sort: MatSort) {
    this.dataSource = new MatTableDataSource<ArticlesModel>(exampleData);

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
