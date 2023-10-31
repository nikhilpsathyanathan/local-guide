export interface HostsAPIResponse {
  results: Results;
  content: Content;
  contentSeo: Content;
}

export interface Content {
  headerTitle: string;
  headerDescription: string;
  headerImage: string;
  searchResultsTitle: string;
  videoTitle: string;
  videoDescription: string;
  introductionTitle: string;
  introductionText: string;
  pageTitle: string;
  description: string;
  headerTitleKeys: string[];
  headerDescriptionKeys: string[];
  headerImageKeys: string[];
  searchResultsTitleKeys: string[];
  videoTitleKeys: string[];
  videoDescriptionKeys: string[];
  introductionTitleKeys: string[];
  introductionTextKeys: string[];
  pageTitleKeys: string[];
  descriptionKeys: string[];
}

export interface Results {
  took: number;
  timed_out: boolean;
  _shards: Shards;
  hits: Hits;
  aggregations: Aggregations;
}

export interface Shards {
  total: number;
  successful: number;
  skipped: number;
  failed: number;
}

export interface Aggregations {
  languages: Languages;
  family_friendly: FamilyFriendly;
  "categories.keyword": CategoriesKeyword;
  passions: Languages;
}

export interface CategoriesKeyword {
  doc_count_error_upper_bound: number;
  sum_other_doc_count: number;
  buckets: CategoriesKeywordBucket[];
}

export interface CategoriesKeywordBucket {
  key: string;
  doc_count: number;
  host_count: HostCount;
}

export interface HostCount {
  value: number;
}

export interface FamilyFriendly {
  doc_count_error_upper_bound: number;
  sum_other_doc_count: number;
  buckets: FamilyFriendlyBucket[];
}

export interface FamilyFriendlyBucket {
  key: number;
  key_as_string: string;
  doc_count: number;
}

export interface Languages {
  doc_count_error_upper_bound: number;
  sum_other_doc_count: number;
  buckets: LanguagesBucket[];
}

export interface LanguagesBucket {
  key: string;
  doc_count: number;
}

export interface Hits {
  total: number;
  max_score: number;
  hits: Hit[];
}

export interface Hit {
  _index: Index;
  _type: Type;
  _id: string;
  _score: number;
  _source: Source;
}

export enum Index {
  HostsV1 = "hosts-v1",
}

export interface Source {
  id: string;
  name: string;
  locations: Location[];
  personal_title: string;
  photo: string;
  pretty_url: string;
  spoken_languages: string[];
  passions: string[];
  categories: string[];
  detailedPassions: DetailedPassion[];
  is_family_friendly: boolean;
  average_rating: number;
  reviews_count: number;
  available_dates: string[];
  availability_score: number;
}

export interface DetailedPassion {
  category: string;
  categoryId: string;
  subCategory: string;
  subCategoryId: string;
  description: string;
}

export interface Location {
  country: string;
  area: string;
}

export enum Type {
  Doc = "_doc",
}
