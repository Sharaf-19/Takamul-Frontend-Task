// src/types/search.ts

export type SearchCategory = 'team' | 'services';

export interface SearchResultItem {
  id: number;
  title: string;
  excerpt: string;
  url: string;
  category: SearchCategory;
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface SearchResults {
  items: SearchResultItem[];
  pagination: PaginationMeta;
}
