import { Url } from 'url';

export interface TopHeadlinesModel {
    status: string;
    totalResults: number;
    articles: ArticlesModel[];
}

export interface ArticlesModel {
    id: number;
    source: SourceModel;
    author: string;
    title: string;
    description: string;
    url: Url;
    urlToImage: Url;
    publishedAt: string;
}

export interface SourceModel {
    id: string;
    name: string;
}
