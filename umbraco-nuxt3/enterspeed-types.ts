export interface IEnterspeedDictionaryItem {
  key: string;
  translation: string;
}

export interface IDictionary {
  [key: string]: IDictionaryLanguage;
}

export interface IDictionaryLanguage {
  [key: string]: string;
}

export interface IEnterspeedResponse {
  meta: IEnterspeedMeta;
  route: IEnterspeedRoute;
  views: IEnterspeedViews;
}

interface IEnterspeedMeta {
  status: number;
  redirect: string | null;
}

interface IEnterspeedRoute {
  type: string;
  headline: string;
  seoMetaDescription: string;
  blocks: any[];
}

interface IEnterspeedViews {
  navigation: any | undefined;
  dictionaries: any | undefined;
}

export interface IRoutesResponse {
  total: string;
  pageInfo: IEnterspeedPageInfo;
  results: IEnterspeedRouteItem[];
}
export interface IEnterspeedPageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}
export interface IEnterspeedRouteItem {
  url: string;
  updatedAt: Date;
}
