import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type GenerateAgoraTokenInput = {
  channelName: Scalars['String'];
  host: Scalars['String'];
  uid?: InputMaybe<Scalars['String']>;
};

export type GenerateAgoraTokenOutput = {
  __typename?: 'GenerateAgoraTokenOutput';
  token?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type Message = {
  __typename?: 'Message';
  message?: Maybe<Scalars['String']>;
};

export type SampleInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  accessToken: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type UploadPdfOutput = {
  __typename?: 'UploadPdfOutput';
  slideId: Scalars['Int'];
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "englister.Diary" */
export type Englister_Diary = {
  __typename?: 'englister_Diary';
  /** An array relationship */
  DiaryLikes: Array<Englister_DiaryLike>;
  createdAt: Scalars['timestamptz'];
  createdBy: Scalars['String'];
  id: Scalars['Int'];
  protected: Scalars['Boolean'];
  translatedEnglish: Scalars['String'];
  translatedJapanese?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  userInputEnglish: Scalars['String'];
  userInputText: Scalars['String'];
};


/** columns and relationships of "englister.Diary" */
export type Englister_DiaryDiaryLikesArgs = {
  distinct_on?: InputMaybe<Array<Englister_DiaryLike_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_DiaryLike_Order_By>>;
  where?: InputMaybe<Englister_DiaryLike_Bool_Exp>;
};

/** columns and relationships of "englister.DiaryLike" */
export type Englister_DiaryLike = {
  __typename?: 'englister_DiaryLike';
  createdBy: Scalars['String'];
  diaryId: Scalars['Int'];
  id: Scalars['Int'];
};

/** order by aggregate values of table "englister.DiaryLike" */
export type Englister_DiaryLike_Aggregate_Order_By = {
  avg?: InputMaybe<Englister_DiaryLike_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Englister_DiaryLike_Max_Order_By>;
  min?: InputMaybe<Englister_DiaryLike_Min_Order_By>;
  stddev?: InputMaybe<Englister_DiaryLike_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Englister_DiaryLike_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Englister_DiaryLike_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Englister_DiaryLike_Sum_Order_By>;
  var_pop?: InputMaybe<Englister_DiaryLike_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Englister_DiaryLike_Var_Samp_Order_By>;
  variance?: InputMaybe<Englister_DiaryLike_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "englister.DiaryLike" */
export type Englister_DiaryLike_Arr_Rel_Insert_Input = {
  data: Array<Englister_DiaryLike_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Englister_DiaryLike_On_Conflict>;
};

/** order by avg() on columns of table "englister.DiaryLike" */
export type Englister_DiaryLike_Avg_Order_By = {
  diaryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "englister.DiaryLike". All fields are combined with a logical 'AND'. */
export type Englister_DiaryLike_Bool_Exp = {
  _and?: InputMaybe<Array<Englister_DiaryLike_Bool_Exp>>;
  _not?: InputMaybe<Englister_DiaryLike_Bool_Exp>;
  _or?: InputMaybe<Array<Englister_DiaryLike_Bool_Exp>>;
  createdBy?: InputMaybe<String_Comparison_Exp>;
  diaryId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "englister.DiaryLike" */
export enum Englister_DiaryLike_Constraint {
  /** unique or primary key constraint on columns "diaryId", "createdBy" */
  DiaryLikeDiaryIdCreatedByKey = 'DiaryLike_diaryId_createdBy_key',
  /** unique or primary key constraint on columns "id" */
  DiaryLikePkey = 'DiaryLike_pkey'
}

/** input type for inserting data into table "englister.DiaryLike" */
export type Englister_DiaryLike_Insert_Input = {
  diaryId?: InputMaybe<Scalars['Int']>;
};

/** order by max() on columns of table "englister.DiaryLike" */
export type Englister_DiaryLike_Max_Order_By = {
  createdBy?: InputMaybe<Order_By>;
  diaryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "englister.DiaryLike" */
export type Englister_DiaryLike_Min_Order_By = {
  createdBy?: InputMaybe<Order_By>;
  diaryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "englister.DiaryLike" */
export type Englister_DiaryLike_Mutation_Response = {
  __typename?: 'englister_DiaryLike_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Englister_DiaryLike>;
};

/** on_conflict condition type for table "englister.DiaryLike" */
export type Englister_DiaryLike_On_Conflict = {
  constraint: Englister_DiaryLike_Constraint;
  update_columns?: Array<Englister_DiaryLike_Update_Column>;
  where?: InputMaybe<Englister_DiaryLike_Bool_Exp>;
};

/** Ordering options when selecting data from "englister.DiaryLike". */
export type Englister_DiaryLike_Order_By = {
  createdBy?: InputMaybe<Order_By>;
  diaryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** select columns of table "englister.DiaryLike" */
export enum Englister_DiaryLike_Select_Column {
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  DiaryId = 'diaryId',
  /** column name */
  Id = 'id'
}

/** order by stddev() on columns of table "englister.DiaryLike" */
export type Englister_DiaryLike_Stddev_Order_By = {
  diaryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "englister.DiaryLike" */
export type Englister_DiaryLike_Stddev_Pop_Order_By = {
  diaryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "englister.DiaryLike" */
export type Englister_DiaryLike_Stddev_Samp_Order_By = {
  diaryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "englister_DiaryLike" */
export type Englister_DiaryLike_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Englister_DiaryLike_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Englister_DiaryLike_Stream_Cursor_Value_Input = {
  createdBy?: InputMaybe<Scalars['String']>;
  diaryId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "englister.DiaryLike" */
export type Englister_DiaryLike_Sum_Order_By = {
  diaryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** placeholder for update columns of table "englister.DiaryLike" (current role has no relevant permissions) */
export enum Englister_DiaryLike_Update_Column {
  /** placeholder (do not use) */
  Placeholder = '_PLACEHOLDER'
}

/** order by var_pop() on columns of table "englister.DiaryLike" */
export type Englister_DiaryLike_Var_Pop_Order_By = {
  diaryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "englister.DiaryLike" */
export type Englister_DiaryLike_Var_Samp_Order_By = {
  diaryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "englister.DiaryLike" */
export type Englister_DiaryLike_Variance_Order_By = {
  diaryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "englister.Diary". All fields are combined with a logical 'AND'. */
export type Englister_Diary_Bool_Exp = {
  DiaryLikes?: InputMaybe<Englister_DiaryLike_Bool_Exp>;
  _and?: InputMaybe<Array<Englister_Diary_Bool_Exp>>;
  _not?: InputMaybe<Englister_Diary_Bool_Exp>;
  _or?: InputMaybe<Array<Englister_Diary_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  createdBy?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  protected?: InputMaybe<Boolean_Comparison_Exp>;
  translatedEnglish?: InputMaybe<String_Comparison_Exp>;
  translatedJapanese?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userInputEnglish?: InputMaybe<String_Comparison_Exp>;
  userInputText?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "englister.Diary" */
export enum Englister_Diary_Constraint {
  /** unique or primary key constraint on columns "id" */
  DiaryPkey = 'Diary_pkey'
}

/** input type for inserting data into table "englister.Diary" */
export type Englister_Diary_Insert_Input = {
  DiaryLikes?: InputMaybe<Englister_DiaryLike_Arr_Rel_Insert_Input>;
  protected?: InputMaybe<Scalars['Boolean']>;
  translatedEnglish?: InputMaybe<Scalars['String']>;
  translatedJapanese?: InputMaybe<Scalars['String']>;
  userInputEnglish?: InputMaybe<Scalars['String']>;
  userInputText?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "englister.Diary" */
export type Englister_Diary_Mutation_Response = {
  __typename?: 'englister_Diary_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Englister_Diary>;
};

/** on_conflict condition type for table "englister.Diary" */
export type Englister_Diary_On_Conflict = {
  constraint: Englister_Diary_Constraint;
  update_columns?: Array<Englister_Diary_Update_Column>;
  where?: InputMaybe<Englister_Diary_Bool_Exp>;
};

/** Ordering options when selecting data from "englister.Diary". */
export type Englister_Diary_Order_By = {
  DiaryLikes_aggregate?: InputMaybe<Englister_DiaryLike_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  protected?: InputMaybe<Order_By>;
  translatedEnglish?: InputMaybe<Order_By>;
  translatedJapanese?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userInputEnglish?: InputMaybe<Order_By>;
  userInputText?: InputMaybe<Order_By>;
};

/** select columns of table "englister.Diary" */
export enum Englister_Diary_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Protected = 'protected',
  /** column name */
  TranslatedEnglish = 'translatedEnglish',
  /** column name */
  TranslatedJapanese = 'translatedJapanese',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserInputEnglish = 'userInputEnglish',
  /** column name */
  UserInputText = 'userInputText'
}

/** Streaming cursor of the table "englister_Diary" */
export type Englister_Diary_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Englister_Diary_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Englister_Diary_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  createdBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  protected?: InputMaybe<Scalars['Boolean']>;
  translatedEnglish?: InputMaybe<Scalars['String']>;
  translatedJapanese?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userInputEnglish?: InputMaybe<Scalars['String']>;
  userInputText?: InputMaybe<Scalars['String']>;
};

/** placeholder for update columns of table "englister.Diary" (current role has no relevant permissions) */
export enum Englister_Diary_Update_Column {
  /** placeholder (do not use) */
  Placeholder = '_PLACEHOLDER'
}

/** columns and relationships of "englister.MyNote" */
export type Englister_MyNote = {
  __typename?: 'englister_MyNote';
  categorySlug?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  createdBy: Scalars['String'];
  english: Scalars['String'];
  id: Scalars['Int'];
  japanese: Scalars['String'];
  memo: Scalars['String'];
  questionDescription: Scalars['String'];
  questionTitle: Scalars['String'];
  topicId: Scalars['String'];
  translation: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "englister.MyNote". All fields are combined with a logical 'AND'. */
export type Englister_MyNote_Bool_Exp = {
  _and?: InputMaybe<Array<Englister_MyNote_Bool_Exp>>;
  _not?: InputMaybe<Englister_MyNote_Bool_Exp>;
  _or?: InputMaybe<Array<Englister_MyNote_Bool_Exp>>;
  categorySlug?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  createdBy?: InputMaybe<String_Comparison_Exp>;
  english?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  japanese?: InputMaybe<String_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  questionDescription?: InputMaybe<String_Comparison_Exp>;
  questionTitle?: InputMaybe<String_Comparison_Exp>;
  topicId?: InputMaybe<String_Comparison_Exp>;
  translation?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "englister.MyNote" */
export enum Englister_MyNote_Constraint {
  /** unique or primary key constraint on columns "id" */
  MyNotePkey = 'MyNote_pkey'
}

/** input type for incrementing numeric columns in table "englister.MyNote" */
export type Englister_MyNote_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "englister.MyNote" */
export type Englister_MyNote_Insert_Input = {
  categorySlug?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  english?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  japanese?: InputMaybe<Scalars['String']>;
  memo?: InputMaybe<Scalars['String']>;
  questionDescription?: InputMaybe<Scalars['String']>;
  questionTitle?: InputMaybe<Scalars['String']>;
  topicId?: InputMaybe<Scalars['String']>;
  translation?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "englister.MyNote" */
export type Englister_MyNote_Mutation_Response = {
  __typename?: 'englister_MyNote_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Englister_MyNote>;
};

/** on_conflict condition type for table "englister.MyNote" */
export type Englister_MyNote_On_Conflict = {
  constraint: Englister_MyNote_Constraint;
  update_columns?: Array<Englister_MyNote_Update_Column>;
  where?: InputMaybe<Englister_MyNote_Bool_Exp>;
};

/** Ordering options when selecting data from "englister.MyNote". */
export type Englister_MyNote_Order_By = {
  categorySlug?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  english?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  japanese?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  questionDescription?: InputMaybe<Order_By>;
  questionTitle?: InputMaybe<Order_By>;
  topicId?: InputMaybe<Order_By>;
  translation?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: englister_MyNote */
export type Englister_MyNote_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "englister.MyNote" */
export enum Englister_MyNote_Select_Column {
  /** column name */
  CategorySlug = 'categorySlug',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  English = 'english',
  /** column name */
  Id = 'id',
  /** column name */
  Japanese = 'japanese',
  /** column name */
  Memo = 'memo',
  /** column name */
  QuestionDescription = 'questionDescription',
  /** column name */
  QuestionTitle = 'questionTitle',
  /** column name */
  TopicId = 'topicId',
  /** column name */
  Translation = 'translation',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "englister.MyNote" */
export type Englister_MyNote_Set_Input = {
  categorySlug?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  createdBy?: InputMaybe<Scalars['String']>;
  english?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  japanese?: InputMaybe<Scalars['String']>;
  memo?: InputMaybe<Scalars['String']>;
  questionDescription?: InputMaybe<Scalars['String']>;
  questionTitle?: InputMaybe<Scalars['String']>;
  topicId?: InputMaybe<Scalars['String']>;
  translation?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "englister_MyNote" */
export type Englister_MyNote_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Englister_MyNote_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Englister_MyNote_Stream_Cursor_Value_Input = {
  categorySlug?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  createdBy?: InputMaybe<Scalars['String']>;
  english?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  japanese?: InputMaybe<Scalars['String']>;
  memo?: InputMaybe<Scalars['String']>;
  questionDescription?: InputMaybe<Scalars['String']>;
  questionTitle?: InputMaybe<Scalars['String']>;
  topicId?: InputMaybe<Scalars['String']>;
  translation?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "englister.MyNote" */
export enum Englister_MyNote_Update_Column {
  /** column name */
  CategorySlug = 'categorySlug',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  English = 'english',
  /** column name */
  Id = 'id',
  /** column name */
  Japanese = 'japanese',
  /** column name */
  Memo = 'memo',
  /** column name */
  QuestionDescription = 'questionDescription',
  /** column name */
  QuestionTitle = 'questionTitle',
  /** column name */
  TopicId = 'topicId',
  /** column name */
  Translation = 'translation',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Englister_MyNote_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Englister_MyNote_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Englister_MyNote_Set_Input>;
  where: Englister_MyNote_Bool_Exp;
};

/** columns and relationships of "englister.Phrase" */
export type Englister_Phrase = {
  __typename?: 'englister_Phrase';
  createdBy: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  id: Scalars['Int'];
  phrase: Scalars['String'];
  remembered: Scalars['Boolean'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** Boolean expression to filter rows from the table "englister.Phrase". All fields are combined with a logical 'AND'. */
export type Englister_Phrase_Bool_Exp = {
  _and?: InputMaybe<Array<Englister_Phrase_Bool_Exp>>;
  _not?: InputMaybe<Englister_Phrase_Bool_Exp>;
  _or?: InputMaybe<Array<Englister_Phrase_Bool_Exp>>;
  createdBy?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  phrase?: InputMaybe<String_Comparison_Exp>;
  remembered?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "englister.Phrase" */
export enum Englister_Phrase_Constraint {
  /** unique or primary key constraint on columns "id" */
  PhrasePkey = 'Phrase_pkey'
}

/** input type for incrementing numeric columns in table "englister.Phrase" */
export type Englister_Phrase_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "englister.Phrase" */
export type Englister_Phrase_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  phrase?: InputMaybe<Scalars['String']>;
  remembered?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "englister.Phrase" */
export type Englister_Phrase_Mutation_Response = {
  __typename?: 'englister_Phrase_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Englister_Phrase>;
};

/** on_conflict condition type for table "englister.Phrase" */
export type Englister_Phrase_On_Conflict = {
  constraint: Englister_Phrase_Constraint;
  update_columns?: Array<Englister_Phrase_Update_Column>;
  where?: InputMaybe<Englister_Phrase_Bool_Exp>;
};

/** Ordering options when selecting data from "englister.Phrase". */
export type Englister_Phrase_Order_By = {
  createdBy?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  phrase?: InputMaybe<Order_By>;
  remembered?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: englister_Phrase */
export type Englister_Phrase_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "englister.Phrase" */
export enum Englister_Phrase_Select_Column {
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Phrase = 'phrase',
  /** column name */
  Remembered = 'remembered',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "englister.Phrase" */
export type Englister_Phrase_Set_Input = {
  createdBy?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  phrase?: InputMaybe<Scalars['String']>;
  remembered?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "englister_Phrase" */
export type Englister_Phrase_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Englister_Phrase_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Englister_Phrase_Stream_Cursor_Value_Input = {
  createdBy?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  phrase?: InputMaybe<Scalars['String']>;
  remembered?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "englister.Phrase" */
export enum Englister_Phrase_Update_Column {
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Phrase = 'phrase',
  /** column name */
  Remembered = 'remembered',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Englister_Phrase_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Englister_Phrase_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Englister_Phrase_Set_Input>;
  where: Englister_Phrase_Bool_Exp;
};

/** columns and relationships of "englister.Profile" */
export type Englister_Profile = {
  __typename?: 'englister_Profile';
  id: Scalars['String'];
  imgUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

/** Boolean expression to filter rows from the table "englister.Profile". All fields are combined with a logical 'AND'. */
export type Englister_Profile_Bool_Exp = {
  _and?: InputMaybe<Array<Englister_Profile_Bool_Exp>>;
  _not?: InputMaybe<Englister_Profile_Bool_Exp>;
  _or?: InputMaybe<Array<Englister_Profile_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  imgUrl?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "englister.Profile" */
export enum Englister_Profile_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProfilePkey = 'Profile_pkey'
}

/** input type for inserting data into table "englister.Profile" */
export type Englister_Profile_Insert_Input = {
  imgUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "englister.Profile" */
export type Englister_Profile_Mutation_Response = {
  __typename?: 'englister_Profile_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Englister_Profile>;
};

/** on_conflict condition type for table "englister.Profile" */
export type Englister_Profile_On_Conflict = {
  constraint: Englister_Profile_Constraint;
  update_columns?: Array<Englister_Profile_Update_Column>;
  where?: InputMaybe<Englister_Profile_Bool_Exp>;
};

/** Ordering options when selecting data from "englister.Profile". */
export type Englister_Profile_Order_By = {
  id?: InputMaybe<Order_By>;
  imgUrl?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: englister_Profile */
export type Englister_Profile_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "englister.Profile" */
export enum Englister_Profile_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImgUrl = 'imgUrl',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "englister.Profile" */
export type Englister_Profile_Set_Input = {
  imgUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "englister_Profile" */
export type Englister_Profile_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Englister_Profile_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Englister_Profile_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  imgUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "englister.Profile" */
export enum Englister_Profile_Update_Column {
  /** column name */
  ImgUrl = 'imgUrl',
  /** column name */
  Name = 'name'
}

export type Englister_Profile_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Englister_Profile_Set_Input>;
  where: Englister_Profile_Bool_Exp;
};

/** columns and relationships of "englister.PublicAnswers" */
export type Englister_PublicAnswers = {
  __typename?: 'englister_PublicAnswers';
  age?: Maybe<Scalars['Int']>;
  answer: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  createdBy: Scalars['String'];
  id: Scalars['Int'];
  japanese?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  todayTopicId?: Maybe<Scalars['String']>;
  topicId: Scalars['Int'];
  translation?: Maybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "englister.PublicAnswers". All fields are combined with a logical 'AND'. */
export type Englister_PublicAnswers_Bool_Exp = {
  _and?: InputMaybe<Array<Englister_PublicAnswers_Bool_Exp>>;
  _not?: InputMaybe<Englister_PublicAnswers_Bool_Exp>;
  _or?: InputMaybe<Array<Englister_PublicAnswers_Bool_Exp>>;
  age?: InputMaybe<Int_Comparison_Exp>;
  answer?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  createdBy?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  japanese?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  todayTopicId?: InputMaybe<String_Comparison_Exp>;
  topicId?: InputMaybe<Int_Comparison_Exp>;
  translation?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "englister.PublicAnswers" */
export enum Englister_PublicAnswers_Constraint {
  /** unique or primary key constraint on columns "id" */
  PublicAnswersPkey = 'PublicAnswers_pkey'
}

/** input type for inserting data into table "englister.PublicAnswers" */
export type Englister_PublicAnswers_Insert_Input = {
  age?: InputMaybe<Scalars['Int']>;
  answer?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  japanese?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  todayTopicId?: InputMaybe<Scalars['String']>;
  topicId?: InputMaybe<Scalars['Int']>;
  translation?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "englister.PublicAnswers" */
export type Englister_PublicAnswers_Mutation_Response = {
  __typename?: 'englister_PublicAnswers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Englister_PublicAnswers>;
};

/** on_conflict condition type for table "englister.PublicAnswers" */
export type Englister_PublicAnswers_On_Conflict = {
  constraint: Englister_PublicAnswers_Constraint;
  update_columns?: Array<Englister_PublicAnswers_Update_Column>;
  where?: InputMaybe<Englister_PublicAnswers_Bool_Exp>;
};

/** Ordering options when selecting data from "englister.PublicAnswers". */
export type Englister_PublicAnswers_Order_By = {
  age?: InputMaybe<Order_By>;
  answer?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  japanese?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  todayTopicId?: InputMaybe<Order_By>;
  topicId?: InputMaybe<Order_By>;
  translation?: InputMaybe<Order_By>;
};

/** select columns of table "englister.PublicAnswers" */
export enum Englister_PublicAnswers_Select_Column {
  /** column name */
  Age = 'age',
  /** column name */
  Answer = 'answer',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Japanese = 'japanese',
  /** column name */
  Name = 'name',
  /** column name */
  TodayTopicId = 'todayTopicId',
  /** column name */
  TopicId = 'topicId',
  /** column name */
  Translation = 'translation'
}

/** Streaming cursor of the table "englister_PublicAnswers" */
export type Englister_PublicAnswers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Englister_PublicAnswers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Englister_PublicAnswers_Stream_Cursor_Value_Input = {
  age?: InputMaybe<Scalars['Int']>;
  answer?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  createdBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  japanese?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  todayTopicId?: InputMaybe<Scalars['String']>;
  topicId?: InputMaybe<Scalars['Int']>;
  translation?: InputMaybe<Scalars['String']>;
};

/** placeholder for update columns of table "englister.PublicAnswers" (current role has no relevant permissions) */
export enum Englister_PublicAnswers_Update_Column {
  /** placeholder (do not use) */
  Placeholder = '_PLACEHOLDER'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  GenerateAgoraToken?: Maybe<GenerateAgoraTokenOutput>;
  actionName?: Maybe<SampleOutput>;
  /** delete data from the table: "englister.Diary" */
  delete_englister_Diary?: Maybe<Englister_Diary_Mutation_Response>;
  /** delete data from the table: "englister.DiaryLike" */
  delete_englister_DiaryLike?: Maybe<Englister_DiaryLike_Mutation_Response>;
  /** delete single row from the table: "englister.DiaryLike" */
  delete_englister_DiaryLike_by_pk?: Maybe<Englister_DiaryLike>;
  /** delete single row from the table: "englister.Diary" */
  delete_englister_Diary_by_pk?: Maybe<Englister_Diary>;
  /** delete data from the table: "englister.MyNote" */
  delete_englister_MyNote?: Maybe<Englister_MyNote_Mutation_Response>;
  /** delete single row from the table: "englister.MyNote" */
  delete_englister_MyNote_by_pk?: Maybe<Englister_MyNote>;
  /** delete data from the table: "englister.Phrase" */
  delete_englister_Phrase?: Maybe<Englister_Phrase_Mutation_Response>;
  /** delete single row from the table: "englister.Phrase" */
  delete_englister_Phrase_by_pk?: Maybe<Englister_Phrase>;
  /** insert data into the table: "englister.Diary" */
  insert_englister_Diary?: Maybe<Englister_Diary_Mutation_Response>;
  /** insert data into the table: "englister.DiaryLike" */
  insert_englister_DiaryLike?: Maybe<Englister_DiaryLike_Mutation_Response>;
  /** insert a single row into the table: "englister.DiaryLike" */
  insert_englister_DiaryLike_one?: Maybe<Englister_DiaryLike>;
  /** insert a single row into the table: "englister.Diary" */
  insert_englister_Diary_one?: Maybe<Englister_Diary>;
  /** insert data into the table: "englister.MyNote" */
  insert_englister_MyNote?: Maybe<Englister_MyNote_Mutation_Response>;
  /** insert a single row into the table: "englister.MyNote" */
  insert_englister_MyNote_one?: Maybe<Englister_MyNote>;
  /** insert data into the table: "englister.Phrase" */
  insert_englister_Phrase?: Maybe<Englister_Phrase_Mutation_Response>;
  /** insert a single row into the table: "englister.Phrase" */
  insert_englister_Phrase_one?: Maybe<Englister_Phrase>;
  /** insert data into the table: "englister.Profile" */
  insert_englister_Profile?: Maybe<Englister_Profile_Mutation_Response>;
  /** insert a single row into the table: "englister.Profile" */
  insert_englister_Profile_one?: Maybe<Englister_Profile>;
  /** insert data into the table: "englister.PublicAnswers" */
  insert_englister_PublicAnswers?: Maybe<Englister_PublicAnswers_Mutation_Response>;
  /** insert a single row into the table: "englister.PublicAnswers" */
  insert_englister_PublicAnswers_one?: Maybe<Englister_PublicAnswers>;
  subscribe?: Maybe<Message>;
  /** update data of the table: "englister.MyNote" */
  update_englister_MyNote?: Maybe<Englister_MyNote_Mutation_Response>;
  /** update single row of the table: "englister.MyNote" */
  update_englister_MyNote_by_pk?: Maybe<Englister_MyNote>;
  /** update multiples rows of table: "englister.MyNote" */
  update_englister_MyNote_many?: Maybe<Array<Maybe<Englister_MyNote_Mutation_Response>>>;
  /** update data of the table: "englister.Phrase" */
  update_englister_Phrase?: Maybe<Englister_Phrase_Mutation_Response>;
  /** update single row of the table: "englister.Phrase" */
  update_englister_Phrase_by_pk?: Maybe<Englister_Phrase>;
  /** update multiples rows of table: "englister.Phrase" */
  update_englister_Phrase_many?: Maybe<Array<Maybe<Englister_Phrase_Mutation_Response>>>;
  /** update data of the table: "englister.Profile" */
  update_englister_Profile?: Maybe<Englister_Profile_Mutation_Response>;
  /** update single row of the table: "englister.Profile" */
  update_englister_Profile_by_pk?: Maybe<Englister_Profile>;
  /** update multiples rows of table: "englister.Profile" */
  update_englister_Profile_many?: Maybe<Array<Maybe<Englister_Profile_Mutation_Response>>>;
  /** PDFをPNGに変えてPageにする */
  uploadPdf?: Maybe<UploadPdfOutput>;
};


/** mutation root */
export type Mutation_RootGenerateAgoraTokenArgs = {
  input: GenerateAgoraTokenInput;
};


/** mutation root */
export type Mutation_RootActionNameArgs = {
  arg1: SampleInput;
};


/** mutation root */
export type Mutation_RootDelete_Englister_DiaryArgs = {
  where: Englister_Diary_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Englister_DiaryLikeArgs = {
  where: Englister_DiaryLike_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Englister_DiaryLike_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Englister_Diary_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Englister_MyNoteArgs = {
  where: Englister_MyNote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Englister_MyNote_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Englister_PhraseArgs = {
  where: Englister_Phrase_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Englister_Phrase_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Englister_DiaryArgs = {
  objects: Array<Englister_Diary_Insert_Input>;
  on_conflict?: InputMaybe<Englister_Diary_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Englister_DiaryLikeArgs = {
  objects: Array<Englister_DiaryLike_Insert_Input>;
  on_conflict?: InputMaybe<Englister_DiaryLike_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Englister_DiaryLike_OneArgs = {
  object: Englister_DiaryLike_Insert_Input;
  on_conflict?: InputMaybe<Englister_DiaryLike_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Englister_Diary_OneArgs = {
  object: Englister_Diary_Insert_Input;
  on_conflict?: InputMaybe<Englister_Diary_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Englister_MyNoteArgs = {
  objects: Array<Englister_MyNote_Insert_Input>;
  on_conflict?: InputMaybe<Englister_MyNote_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Englister_MyNote_OneArgs = {
  object: Englister_MyNote_Insert_Input;
  on_conflict?: InputMaybe<Englister_MyNote_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Englister_PhraseArgs = {
  objects: Array<Englister_Phrase_Insert_Input>;
  on_conflict?: InputMaybe<Englister_Phrase_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Englister_Phrase_OneArgs = {
  object: Englister_Phrase_Insert_Input;
  on_conflict?: InputMaybe<Englister_Phrase_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Englister_ProfileArgs = {
  objects: Array<Englister_Profile_Insert_Input>;
  on_conflict?: InputMaybe<Englister_Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Englister_Profile_OneArgs = {
  object: Englister_Profile_Insert_Input;
  on_conflict?: InputMaybe<Englister_Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Englister_PublicAnswersArgs = {
  objects: Array<Englister_PublicAnswers_Insert_Input>;
  on_conflict?: InputMaybe<Englister_PublicAnswers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Englister_PublicAnswers_OneArgs = {
  object: Englister_PublicAnswers_Insert_Input;
  on_conflict?: InputMaybe<Englister_PublicAnswers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootSubscribeArgs = {
  conferenceId?: InputMaybe<Scalars['Int']>;
};


/** mutation root */
export type Mutation_RootUpdate_Englister_MyNoteArgs = {
  _inc?: InputMaybe<Englister_MyNote_Inc_Input>;
  _set?: InputMaybe<Englister_MyNote_Set_Input>;
  where: Englister_MyNote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Englister_MyNote_By_PkArgs = {
  _inc?: InputMaybe<Englister_MyNote_Inc_Input>;
  _set?: InputMaybe<Englister_MyNote_Set_Input>;
  pk_columns: Englister_MyNote_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Englister_MyNote_ManyArgs = {
  updates: Array<Englister_MyNote_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Englister_PhraseArgs = {
  _inc?: InputMaybe<Englister_Phrase_Inc_Input>;
  _set?: InputMaybe<Englister_Phrase_Set_Input>;
  where: Englister_Phrase_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Englister_Phrase_By_PkArgs = {
  _inc?: InputMaybe<Englister_Phrase_Inc_Input>;
  _set?: InputMaybe<Englister_Phrase_Set_Input>;
  pk_columns: Englister_Phrase_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Englister_Phrase_ManyArgs = {
  updates: Array<Englister_Phrase_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Englister_ProfileArgs = {
  _set?: InputMaybe<Englister_Profile_Set_Input>;
  where: Englister_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Englister_Profile_By_PkArgs = {
  _set?: InputMaybe<Englister_Profile_Set_Input>;
  pk_columns: Englister_Profile_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Englister_Profile_ManyArgs = {
  updates: Array<Englister_Profile_Updates>;
};


/** mutation root */
export type Mutation_RootUploadPdfArgs = {
  pdfName: Scalars['String'];
  slideId: Scalars['Int'];
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "englister.Diary" */
  englister_Diary: Array<Englister_Diary>;
  /** fetch data from the table: "englister.DiaryLike" */
  englister_DiaryLike: Array<Englister_DiaryLike>;
  /** fetch data from the table: "englister.DiaryLike" using primary key columns */
  englister_DiaryLike_by_pk?: Maybe<Englister_DiaryLike>;
  /** fetch data from the table: "englister.Diary" using primary key columns */
  englister_Diary_by_pk?: Maybe<Englister_Diary>;
  /** fetch data from the table: "englister.MyNote" */
  englister_MyNote: Array<Englister_MyNote>;
  /** fetch data from the table: "englister.MyNote" using primary key columns */
  englister_MyNote_by_pk?: Maybe<Englister_MyNote>;
  /** fetch data from the table: "englister.Phrase" */
  englister_Phrase: Array<Englister_Phrase>;
  /** fetch data from the table: "englister.Phrase" using primary key columns */
  englister_Phrase_by_pk?: Maybe<Englister_Phrase>;
  /** fetch data from the table: "englister.Profile" */
  englister_Profile: Array<Englister_Profile>;
  /** fetch data from the table: "englister.Profile" using primary key columns */
  englister_Profile_by_pk?: Maybe<Englister_Profile>;
  /** fetch data from the table: "englister.PublicAnswers" */
  englister_PublicAnswers: Array<Englister_PublicAnswers>;
  /** fetch data from the table: "englister.PublicAnswers" using primary key columns */
  englister_PublicAnswers_by_pk?: Maybe<Englister_PublicAnswers>;
};


export type Query_RootEnglister_DiaryArgs = {
  distinct_on?: InputMaybe<Array<Englister_Diary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_Diary_Order_By>>;
  where?: InputMaybe<Englister_Diary_Bool_Exp>;
};


export type Query_RootEnglister_DiaryLikeArgs = {
  distinct_on?: InputMaybe<Array<Englister_DiaryLike_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_DiaryLike_Order_By>>;
  where?: InputMaybe<Englister_DiaryLike_Bool_Exp>;
};


export type Query_RootEnglister_DiaryLike_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootEnglister_Diary_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootEnglister_MyNoteArgs = {
  distinct_on?: InputMaybe<Array<Englister_MyNote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_MyNote_Order_By>>;
  where?: InputMaybe<Englister_MyNote_Bool_Exp>;
};


export type Query_RootEnglister_MyNote_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootEnglister_PhraseArgs = {
  distinct_on?: InputMaybe<Array<Englister_Phrase_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_Phrase_Order_By>>;
  where?: InputMaybe<Englister_Phrase_Bool_Exp>;
};


export type Query_RootEnglister_Phrase_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootEnglister_ProfileArgs = {
  distinct_on?: InputMaybe<Array<Englister_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_Profile_Order_By>>;
  where?: InputMaybe<Englister_Profile_Bool_Exp>;
};


export type Query_RootEnglister_Profile_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootEnglister_PublicAnswersArgs = {
  distinct_on?: InputMaybe<Array<Englister_PublicAnswers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_PublicAnswers_Order_By>>;
  where?: InputMaybe<Englister_PublicAnswers_Bool_Exp>;
};


export type Query_RootEnglister_PublicAnswers_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "englister.Diary" */
  englister_Diary: Array<Englister_Diary>;
  /** fetch data from the table: "englister.DiaryLike" */
  englister_DiaryLike: Array<Englister_DiaryLike>;
  /** fetch data from the table: "englister.DiaryLike" using primary key columns */
  englister_DiaryLike_by_pk?: Maybe<Englister_DiaryLike>;
  /** fetch data from the table in a streaming manner : "englister.DiaryLike" */
  englister_DiaryLike_stream: Array<Englister_DiaryLike>;
  /** fetch data from the table: "englister.Diary" using primary key columns */
  englister_Diary_by_pk?: Maybe<Englister_Diary>;
  /** fetch data from the table in a streaming manner : "englister.Diary" */
  englister_Diary_stream: Array<Englister_Diary>;
  /** fetch data from the table: "englister.MyNote" */
  englister_MyNote: Array<Englister_MyNote>;
  /** fetch data from the table: "englister.MyNote" using primary key columns */
  englister_MyNote_by_pk?: Maybe<Englister_MyNote>;
  /** fetch data from the table in a streaming manner : "englister.MyNote" */
  englister_MyNote_stream: Array<Englister_MyNote>;
  /** fetch data from the table: "englister.Phrase" */
  englister_Phrase: Array<Englister_Phrase>;
  /** fetch data from the table: "englister.Phrase" using primary key columns */
  englister_Phrase_by_pk?: Maybe<Englister_Phrase>;
  /** fetch data from the table in a streaming manner : "englister.Phrase" */
  englister_Phrase_stream: Array<Englister_Phrase>;
  /** fetch data from the table: "englister.Profile" */
  englister_Profile: Array<Englister_Profile>;
  /** fetch data from the table: "englister.Profile" using primary key columns */
  englister_Profile_by_pk?: Maybe<Englister_Profile>;
  /** fetch data from the table in a streaming manner : "englister.Profile" */
  englister_Profile_stream: Array<Englister_Profile>;
  /** fetch data from the table: "englister.PublicAnswers" */
  englister_PublicAnswers: Array<Englister_PublicAnswers>;
  /** fetch data from the table: "englister.PublicAnswers" using primary key columns */
  englister_PublicAnswers_by_pk?: Maybe<Englister_PublicAnswers>;
  /** fetch data from the table in a streaming manner : "englister.PublicAnswers" */
  englister_PublicAnswers_stream: Array<Englister_PublicAnswers>;
};


export type Subscription_RootEnglister_DiaryArgs = {
  distinct_on?: InputMaybe<Array<Englister_Diary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_Diary_Order_By>>;
  where?: InputMaybe<Englister_Diary_Bool_Exp>;
};


export type Subscription_RootEnglister_DiaryLikeArgs = {
  distinct_on?: InputMaybe<Array<Englister_DiaryLike_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_DiaryLike_Order_By>>;
  where?: InputMaybe<Englister_DiaryLike_Bool_Exp>;
};


export type Subscription_RootEnglister_DiaryLike_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootEnglister_DiaryLike_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Englister_DiaryLike_Stream_Cursor_Input>>;
  where?: InputMaybe<Englister_DiaryLike_Bool_Exp>;
};


export type Subscription_RootEnglister_Diary_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootEnglister_Diary_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Englister_Diary_Stream_Cursor_Input>>;
  where?: InputMaybe<Englister_Diary_Bool_Exp>;
};


export type Subscription_RootEnglister_MyNoteArgs = {
  distinct_on?: InputMaybe<Array<Englister_MyNote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_MyNote_Order_By>>;
  where?: InputMaybe<Englister_MyNote_Bool_Exp>;
};


export type Subscription_RootEnglister_MyNote_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootEnglister_MyNote_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Englister_MyNote_Stream_Cursor_Input>>;
  where?: InputMaybe<Englister_MyNote_Bool_Exp>;
};


export type Subscription_RootEnglister_PhraseArgs = {
  distinct_on?: InputMaybe<Array<Englister_Phrase_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_Phrase_Order_By>>;
  where?: InputMaybe<Englister_Phrase_Bool_Exp>;
};


export type Subscription_RootEnglister_Phrase_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootEnglister_Phrase_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Englister_Phrase_Stream_Cursor_Input>>;
  where?: InputMaybe<Englister_Phrase_Bool_Exp>;
};


export type Subscription_RootEnglister_ProfileArgs = {
  distinct_on?: InputMaybe<Array<Englister_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_Profile_Order_By>>;
  where?: InputMaybe<Englister_Profile_Bool_Exp>;
};


export type Subscription_RootEnglister_Profile_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootEnglister_Profile_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Englister_Profile_Stream_Cursor_Input>>;
  where?: InputMaybe<Englister_Profile_Bool_Exp>;
};


export type Subscription_RootEnglister_PublicAnswersArgs = {
  distinct_on?: InputMaybe<Array<Englister_PublicAnswers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_PublicAnswers_Order_By>>;
  where?: InputMaybe<Englister_PublicAnswers_Bool_Exp>;
};


export type Subscription_RootEnglister_PublicAnswers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootEnglister_PublicAnswers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Englister_PublicAnswers_Stream_Cursor_Input>>;
  where?: InputMaybe<Englister_PublicAnswers_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type CreateDiaryMutationVariables = Exact<{
  userInputText: Scalars['String'];
  protected: Scalars['Boolean'];
  translatedEnglish: Scalars['String'];
  translatedJapanese?: InputMaybe<Scalars['String']>;
  userInputEnglish: Scalars['String'];
}>;


export type CreateDiaryMutation = { __typename?: 'mutation_root', insert_englister_Diary_one?: { __typename?: 'englister_Diary', id: number, protected: boolean, translatedEnglish: string, userInputEnglish: string, userInputText: string, updatedAt: any, createdAt: any, createdBy: string, translatedJapanese?: string | null } | null };

export type ListMyDiaryQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type ListMyDiaryQuery = { __typename?: 'query_root', englister_Diary: Array<{ __typename?: 'englister_Diary', createdAt: any, createdBy: string, id: number, protected: boolean, translatedEnglish: string, translatedJapanese?: string | null, updatedAt: any, userInputEnglish: string, userInputText: string }> };

export type ListDiaryQueryVariables = Exact<{ [key: string]: never; }>;


export type ListDiaryQuery = { __typename?: 'query_root', englister_Diary: Array<{ __typename?: 'englister_Diary', createdAt: any, createdBy: string, id: number, protected: boolean, translatedEnglish: string, translatedJapanese?: string | null, updatedAt: any, userInputEnglish: string, userInputText: string, DiaryLikes: Array<{ __typename?: 'englister_DiaryLike', id: number, createdBy: string }> }> };

export type LikeDiaryMutationVariables = Exact<{
  diaryId: Scalars['Int'];
}>;


export type LikeDiaryMutation = { __typename?: 'mutation_root', insert_englister_DiaryLike_one?: { __typename?: 'englister_DiaryLike', id: number, diaryId: number, createdBy: string } | null };

export type SaveMyNoteMutationVariables = Exact<{
  english?: InputMaybe<Scalars['String']>;
  japanese?: InputMaybe<Scalars['String']>;
  memo?: InputMaybe<Scalars['String']>;
  questionTitle?: InputMaybe<Scalars['String']>;
  questionDescription?: InputMaybe<Scalars['String']>;
  topicId?: InputMaybe<Scalars['String']>;
  translation?: InputMaybe<Scalars['String']>;
  categorySlug?: InputMaybe<Scalars['String']>;
}>;


export type SaveMyNoteMutation = { __typename?: 'mutation_root', insert_englister_MyNote_one?: { __typename?: 'englister_MyNote', id: number } | null };

export type UpdateMyNoteMutationVariables = Exact<{
  id: Scalars['Int'];
  memo: Scalars['String'];
}>;


export type UpdateMyNoteMutation = { __typename?: 'mutation_root', update_englister_MyNote_by_pk?: { __typename?: 'englister_MyNote', id: number } | null };

export type GetMyNoteQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetMyNoteQuery = { __typename?: 'query_root', englister_MyNote_by_pk?: { __typename?: 'englister_MyNote', id: number, english: string, questionTitle: string, memo: string, japanese: string, questionDescription: string, topicId: string, categorySlug?: string | null, createdAt: any, translation: string, updatedAt: any } | null };

export type ListMyNoteQueryVariables = Exact<{ [key: string]: never; }>;


export type ListMyNoteQuery = { __typename?: 'query_root', englister_MyNote: Array<{ __typename?: 'englister_MyNote', id: number, english: string, questionTitle: string, memo: string, japanese: string, questionDescription: string, topicId: string, categorySlug?: string | null, createdAt: any, translation: string, updatedAt: any }> };

export type DeleteMyNoteMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteMyNoteMutation = { __typename?: 'mutation_root', delete_englister_MyNote_by_pk?: { __typename?: 'englister_MyNote', id: number } | null };

export type SavePhraseMutationVariables = Exact<{
  phrase: Scalars['String'];
  description: Scalars['String'];
}>;


export type SavePhraseMutation = { __typename?: 'mutation_root', insert_englister_Phrase_one?: { __typename?: 'englister_Phrase', id: number, phrase: string, description: string, created_at?: any | null, updated_at?: any | null } | null };

export type UpdatePhraseMutationVariables = Exact<{
  id: Scalars['Int'];
  phrase: Scalars['String'];
  description: Scalars['String'];
}>;


export type UpdatePhraseMutation = { __typename?: 'mutation_root', update_englister_Phrase_by_pk?: { __typename?: 'englister_Phrase', id: number, phrase: string, description: string, created_at?: any | null, updated_at?: any | null } | null };

export type DeletePhraseMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePhraseMutation = { __typename?: 'mutation_root', delete_englister_Phrase_by_pk?: { __typename?: 'englister_Phrase', id: number, phrase: string, description: string, created_at?: any | null, updated_at?: any | null } | null };

export type ListPhraseQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPhraseQueryQuery = { __typename?: 'query_root', englister_Phrase: Array<{ __typename?: 'englister_Phrase', id: number, phrase: string, description: string, created_at?: any | null, updated_at?: any | null }> };

export type ListPhraseSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ListPhraseSubscription = { __typename?: 'subscription_root', englister_Phrase: Array<{ __typename?: 'englister_Phrase', id: number, phrase: string, description: string, created_at?: any | null, updated_at?: any | null }> };

export type QueryPublciAnswersQueryVariables = Exact<{
  topicId: Scalars['Int'];
}>;


export type QueryPublciAnswersQuery = { __typename?: 'query_root', englister_PublicAnswers: Array<{ __typename?: 'englister_PublicAnswers', id: number, topicId: number, answer: string, japanese?: string | null, translation?: string | null, age?: number | null, createdBy: string, createdAt: any }> };

export type QueryTodayPublciAnswerRankingQueryVariables = Exact<{
  todayTopicId: Scalars['String'];
}>;


export type QueryTodayPublciAnswerRankingQuery = { __typename?: 'query_root', englister_PublicAnswers: Array<{ __typename?: 'englister_PublicAnswers', id: number, topicId: number, answer: string, japanese?: string | null, translation?: string | null, age?: number | null, name?: string | null, createdBy: string, createdAt: any }> };

export type QueryPublicJapaneseQueryVariables = Exact<{
  topicId: Scalars['Int'];
}>;


export type QueryPublicJapaneseQuery = { __typename?: 'query_root', englister_PublicAnswers: Array<{ __typename?: 'englister_PublicAnswers', id: number, topicId: number, japanese?: string | null, createdBy: string, createdAt: any }> };

export type SubmitPublicAnswerMutationVariables = Exact<{
  topicId: Scalars['Int'];
  answer: Scalars['String'];
  japanese: Scalars['String'];
  translation: Scalars['String'];
  age: Scalars['Int'];
}>;


export type SubmitPublicAnswerMutation = { __typename?: 'mutation_root', insert_englister_PublicAnswers_one?: { __typename?: 'englister_PublicAnswers', id: number, topicId: number, answer: string, createdAt: any, createdBy: string } | null };

export type SubmitTodayPublicAnswerMutationVariables = Exact<{
  topicId: Scalars['Int'];
  answer: Scalars['String'];
  japanese: Scalars['String'];
  translation: Scalars['String'];
  age: Scalars['Int'];
  todayTopicId: Scalars['String'];
  name: Scalars['String'];
}>;


export type SubmitTodayPublicAnswerMutation = { __typename?: 'mutation_root', insert_englister_PublicAnswers_one?: { __typename?: 'englister_PublicAnswers', id: number, topicId: number, answer: string, createdAt: any, createdBy: string } | null };


export const CreateDiaryDocument = gql`
    mutation CreateDiary($userInputText: String!, $protected: Boolean!, $translatedEnglish: String!, $translatedJapanese: String, $userInputEnglish: String!) {
  insert_englister_Diary_one(
    object: {userInputText: $userInputText, protected: $protected, translatedEnglish: $translatedEnglish, translatedJapanese: $translatedJapanese, userInputEnglish: $userInputEnglish}
  ) {
    id
    protected
    translatedEnglish
    userInputEnglish
    userInputText
    updatedAt
    createdAt
    createdBy
    translatedJapanese
  }
}
    `;
export type CreateDiaryMutationFn = Apollo.MutationFunction<CreateDiaryMutation, CreateDiaryMutationVariables>;

/**
 * __useCreateDiaryMutation__
 *
 * To run a mutation, you first call `useCreateDiaryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDiaryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDiaryMutation, { data, loading, error }] = useCreateDiaryMutation({
 *   variables: {
 *      userInputText: // value for 'userInputText'
 *      protected: // value for 'protected'
 *      translatedEnglish: // value for 'translatedEnglish'
 *      translatedJapanese: // value for 'translatedJapanese'
 *      userInputEnglish: // value for 'userInputEnglish'
 *   },
 * });
 */
export function useCreateDiaryMutation(baseOptions?: Apollo.MutationHookOptions<CreateDiaryMutation, CreateDiaryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDiaryMutation, CreateDiaryMutationVariables>(CreateDiaryDocument, options);
      }
export type CreateDiaryMutationHookResult = ReturnType<typeof useCreateDiaryMutation>;
export type CreateDiaryMutationResult = Apollo.MutationResult<CreateDiaryMutation>;
export type CreateDiaryMutationOptions = Apollo.BaseMutationOptions<CreateDiaryMutation, CreateDiaryMutationVariables>;
export const ListMyDiaryDocument = gql`
    query ListMyDiary($userId: String!) {
  englister_Diary(order_by: {createdAt: desc}, where: {createdBy: {_eq: $userId}}) {
    createdAt
    createdBy
    id
    protected
    translatedEnglish
    translatedJapanese
    updatedAt
    userInputEnglish
    userInputText
  }
}
    `;

/**
 * __useListMyDiaryQuery__
 *
 * To run a query within a React component, call `useListMyDiaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListMyDiaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListMyDiaryQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useListMyDiaryQuery(baseOptions: Apollo.QueryHookOptions<ListMyDiaryQuery, ListMyDiaryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListMyDiaryQuery, ListMyDiaryQueryVariables>(ListMyDiaryDocument, options);
      }
export function useListMyDiaryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListMyDiaryQuery, ListMyDiaryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListMyDiaryQuery, ListMyDiaryQueryVariables>(ListMyDiaryDocument, options);
        }
export type ListMyDiaryQueryHookResult = ReturnType<typeof useListMyDiaryQuery>;
export type ListMyDiaryLazyQueryHookResult = ReturnType<typeof useListMyDiaryLazyQuery>;
export type ListMyDiaryQueryResult = Apollo.QueryResult<ListMyDiaryQuery, ListMyDiaryQueryVariables>;
export const ListDiaryDocument = gql`
    query ListDiary {
  englister_Diary(order_by: {createdAt: desc}, limit: 20) {
    createdAt
    createdBy
    id
    protected
    translatedEnglish
    translatedJapanese
    updatedAt
    userInputEnglish
    userInputText
    DiaryLikes {
      id
      createdBy
    }
  }
}
    `;

/**
 * __useListDiaryQuery__
 *
 * To run a query within a React component, call `useListDiaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDiaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListDiaryQuery({
 *   variables: {
 *   },
 * });
 */
export function useListDiaryQuery(baseOptions?: Apollo.QueryHookOptions<ListDiaryQuery, ListDiaryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListDiaryQuery, ListDiaryQueryVariables>(ListDiaryDocument, options);
      }
export function useListDiaryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListDiaryQuery, ListDiaryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListDiaryQuery, ListDiaryQueryVariables>(ListDiaryDocument, options);
        }
export type ListDiaryQueryHookResult = ReturnType<typeof useListDiaryQuery>;
export type ListDiaryLazyQueryHookResult = ReturnType<typeof useListDiaryLazyQuery>;
export type ListDiaryQueryResult = Apollo.QueryResult<ListDiaryQuery, ListDiaryQueryVariables>;
export const LikeDiaryDocument = gql`
    mutation LikeDiary($diaryId: Int!) {
  insert_englister_DiaryLike_one(object: {diaryId: $diaryId}) {
    id
    diaryId
    createdBy
  }
}
    `;
export type LikeDiaryMutationFn = Apollo.MutationFunction<LikeDiaryMutation, LikeDiaryMutationVariables>;

/**
 * __useLikeDiaryMutation__
 *
 * To run a mutation, you first call `useLikeDiaryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeDiaryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeDiaryMutation, { data, loading, error }] = useLikeDiaryMutation({
 *   variables: {
 *      diaryId: // value for 'diaryId'
 *   },
 * });
 */
export function useLikeDiaryMutation(baseOptions?: Apollo.MutationHookOptions<LikeDiaryMutation, LikeDiaryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeDiaryMutation, LikeDiaryMutationVariables>(LikeDiaryDocument, options);
      }
export type LikeDiaryMutationHookResult = ReturnType<typeof useLikeDiaryMutation>;
export type LikeDiaryMutationResult = Apollo.MutationResult<LikeDiaryMutation>;
export type LikeDiaryMutationOptions = Apollo.BaseMutationOptions<LikeDiaryMutation, LikeDiaryMutationVariables>;
export const SaveMyNoteDocument = gql`
    mutation SaveMyNote($english: String, $japanese: String, $memo: String, $questionTitle: String, $questionDescription: String, $topicId: String, $translation: String, $categorySlug: String) {
  insert_englister_MyNote_one(
    object: {english: $english, japanese: $japanese, memo: $memo, questionTitle: $questionTitle, questionDescription: $questionDescription, topicId: $topicId, translation: $translation, categorySlug: $categorySlug}
  ) {
    id
  }
}
    `;
export type SaveMyNoteMutationFn = Apollo.MutationFunction<SaveMyNoteMutation, SaveMyNoteMutationVariables>;

/**
 * __useSaveMyNoteMutation__
 *
 * To run a mutation, you first call `useSaveMyNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveMyNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveMyNoteMutation, { data, loading, error }] = useSaveMyNoteMutation({
 *   variables: {
 *      english: // value for 'english'
 *      japanese: // value for 'japanese'
 *      memo: // value for 'memo'
 *      questionTitle: // value for 'questionTitle'
 *      questionDescription: // value for 'questionDescription'
 *      topicId: // value for 'topicId'
 *      translation: // value for 'translation'
 *      categorySlug: // value for 'categorySlug'
 *   },
 * });
 */
export function useSaveMyNoteMutation(baseOptions?: Apollo.MutationHookOptions<SaveMyNoteMutation, SaveMyNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveMyNoteMutation, SaveMyNoteMutationVariables>(SaveMyNoteDocument, options);
      }
export type SaveMyNoteMutationHookResult = ReturnType<typeof useSaveMyNoteMutation>;
export type SaveMyNoteMutationResult = Apollo.MutationResult<SaveMyNoteMutation>;
export type SaveMyNoteMutationOptions = Apollo.BaseMutationOptions<SaveMyNoteMutation, SaveMyNoteMutationVariables>;
export const UpdateMyNoteDocument = gql`
    mutation UpdateMyNote($id: Int!, $memo: String!) {
  update_englister_MyNote_by_pk(pk_columns: {id: $id}, _set: {memo: $memo}) {
    id
  }
}
    `;
export type UpdateMyNoteMutationFn = Apollo.MutationFunction<UpdateMyNoteMutation, UpdateMyNoteMutationVariables>;

/**
 * __useUpdateMyNoteMutation__
 *
 * To run a mutation, you first call `useUpdateMyNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMyNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMyNoteMutation, { data, loading, error }] = useUpdateMyNoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *      memo: // value for 'memo'
 *   },
 * });
 */
export function useUpdateMyNoteMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMyNoteMutation, UpdateMyNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMyNoteMutation, UpdateMyNoteMutationVariables>(UpdateMyNoteDocument, options);
      }
export type UpdateMyNoteMutationHookResult = ReturnType<typeof useUpdateMyNoteMutation>;
export type UpdateMyNoteMutationResult = Apollo.MutationResult<UpdateMyNoteMutation>;
export type UpdateMyNoteMutationOptions = Apollo.BaseMutationOptions<UpdateMyNoteMutation, UpdateMyNoteMutationVariables>;
export const GetMyNoteDocument = gql`
    query GetMyNote($id: Int!) {
  englister_MyNote_by_pk(id: $id) {
    id
    english
    questionTitle
    memo
    japanese
    questionDescription
    topicId
    categorySlug
    createdAt
    translation
    updatedAt
  }
}
    `;

/**
 * __useGetMyNoteQuery__
 *
 * To run a query within a React component, call `useGetMyNoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyNoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyNoteQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMyNoteQuery(baseOptions: Apollo.QueryHookOptions<GetMyNoteQuery, GetMyNoteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyNoteQuery, GetMyNoteQueryVariables>(GetMyNoteDocument, options);
      }
export function useGetMyNoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyNoteQuery, GetMyNoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyNoteQuery, GetMyNoteQueryVariables>(GetMyNoteDocument, options);
        }
export type GetMyNoteQueryHookResult = ReturnType<typeof useGetMyNoteQuery>;
export type GetMyNoteLazyQueryHookResult = ReturnType<typeof useGetMyNoteLazyQuery>;
export type GetMyNoteQueryResult = Apollo.QueryResult<GetMyNoteQuery, GetMyNoteQueryVariables>;
export const ListMyNoteDocument = gql`
    query ListMyNote {
  englister_MyNote(order_by: {updatedAt: desc}) {
    id
    english
    questionTitle
    memo
    japanese
    questionDescription
    topicId
    categorySlug
    createdAt
    translation
    updatedAt
  }
}
    `;

/**
 * __useListMyNoteQuery__
 *
 * To run a query within a React component, call `useListMyNoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useListMyNoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListMyNoteQuery({
 *   variables: {
 *   },
 * });
 */
export function useListMyNoteQuery(baseOptions?: Apollo.QueryHookOptions<ListMyNoteQuery, ListMyNoteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListMyNoteQuery, ListMyNoteQueryVariables>(ListMyNoteDocument, options);
      }
export function useListMyNoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListMyNoteQuery, ListMyNoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListMyNoteQuery, ListMyNoteQueryVariables>(ListMyNoteDocument, options);
        }
export type ListMyNoteQueryHookResult = ReturnType<typeof useListMyNoteQuery>;
export type ListMyNoteLazyQueryHookResult = ReturnType<typeof useListMyNoteLazyQuery>;
export type ListMyNoteQueryResult = Apollo.QueryResult<ListMyNoteQuery, ListMyNoteQueryVariables>;
export const DeleteMyNoteDocument = gql`
    mutation DeleteMyNote($id: Int!) {
  delete_englister_MyNote_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteMyNoteMutationFn = Apollo.MutationFunction<DeleteMyNoteMutation, DeleteMyNoteMutationVariables>;

/**
 * __useDeleteMyNoteMutation__
 *
 * To run a mutation, you first call `useDeleteMyNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMyNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMyNoteMutation, { data, loading, error }] = useDeleteMyNoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMyNoteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMyNoteMutation, DeleteMyNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMyNoteMutation, DeleteMyNoteMutationVariables>(DeleteMyNoteDocument, options);
      }
export type DeleteMyNoteMutationHookResult = ReturnType<typeof useDeleteMyNoteMutation>;
export type DeleteMyNoteMutationResult = Apollo.MutationResult<DeleteMyNoteMutation>;
export type DeleteMyNoteMutationOptions = Apollo.BaseMutationOptions<DeleteMyNoteMutation, DeleteMyNoteMutationVariables>;
export const SavePhraseDocument = gql`
    mutation SavePhrase($phrase: String!, $description: String!) {
  insert_englister_Phrase_one(
    object: {phrase: $phrase, description: $description}
  ) {
    id
    phrase
    description
    created_at
    updated_at
  }
}
    `;
export type SavePhraseMutationFn = Apollo.MutationFunction<SavePhraseMutation, SavePhraseMutationVariables>;

/**
 * __useSavePhraseMutation__
 *
 * To run a mutation, you first call `useSavePhraseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSavePhraseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [savePhraseMutation, { data, loading, error }] = useSavePhraseMutation({
 *   variables: {
 *      phrase: // value for 'phrase'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useSavePhraseMutation(baseOptions?: Apollo.MutationHookOptions<SavePhraseMutation, SavePhraseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SavePhraseMutation, SavePhraseMutationVariables>(SavePhraseDocument, options);
      }
export type SavePhraseMutationHookResult = ReturnType<typeof useSavePhraseMutation>;
export type SavePhraseMutationResult = Apollo.MutationResult<SavePhraseMutation>;
export type SavePhraseMutationOptions = Apollo.BaseMutationOptions<SavePhraseMutation, SavePhraseMutationVariables>;
export const UpdatePhraseDocument = gql`
    mutation UpdatePhrase($id: Int!, $phrase: String!, $description: String!) {
  update_englister_Phrase_by_pk(
    pk_columns: {id: $id}
    _set: {phrase: $phrase, description: $description}
  ) {
    id
    phrase
    description
    created_at
    updated_at
  }
}
    `;
export type UpdatePhraseMutationFn = Apollo.MutationFunction<UpdatePhraseMutation, UpdatePhraseMutationVariables>;

/**
 * __useUpdatePhraseMutation__
 *
 * To run a mutation, you first call `useUpdatePhraseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePhraseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePhraseMutation, { data, loading, error }] = useUpdatePhraseMutation({
 *   variables: {
 *      id: // value for 'id'
 *      phrase: // value for 'phrase'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdatePhraseMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePhraseMutation, UpdatePhraseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePhraseMutation, UpdatePhraseMutationVariables>(UpdatePhraseDocument, options);
      }
export type UpdatePhraseMutationHookResult = ReturnType<typeof useUpdatePhraseMutation>;
export type UpdatePhraseMutationResult = Apollo.MutationResult<UpdatePhraseMutation>;
export type UpdatePhraseMutationOptions = Apollo.BaseMutationOptions<UpdatePhraseMutation, UpdatePhraseMutationVariables>;
export const DeletePhraseDocument = gql`
    mutation DeletePhrase($id: Int!) {
  delete_englister_Phrase_by_pk(id: $id) {
    id
    phrase
    description
    created_at
    updated_at
  }
}
    `;
export type DeletePhraseMutationFn = Apollo.MutationFunction<DeletePhraseMutation, DeletePhraseMutationVariables>;

/**
 * __useDeletePhraseMutation__
 *
 * To run a mutation, you first call `useDeletePhraseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePhraseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePhraseMutation, { data, loading, error }] = useDeletePhraseMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePhraseMutation(baseOptions?: Apollo.MutationHookOptions<DeletePhraseMutation, DeletePhraseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePhraseMutation, DeletePhraseMutationVariables>(DeletePhraseDocument, options);
      }
export type DeletePhraseMutationHookResult = ReturnType<typeof useDeletePhraseMutation>;
export type DeletePhraseMutationResult = Apollo.MutationResult<DeletePhraseMutation>;
export type DeletePhraseMutationOptions = Apollo.BaseMutationOptions<DeletePhraseMutation, DeletePhraseMutationVariables>;
export const ListPhraseQueryDocument = gql`
    query ListPhraseQuery {
  englister_Phrase(order_by: {created_at: desc}) {
    id
    phrase
    description
    created_at
    updated_at
  }
}
    `;

/**
 * __useListPhraseQueryQuery__
 *
 * To run a query within a React component, call `useListPhraseQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPhraseQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPhraseQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useListPhraseQueryQuery(baseOptions?: Apollo.QueryHookOptions<ListPhraseQueryQuery, ListPhraseQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListPhraseQueryQuery, ListPhraseQueryQueryVariables>(ListPhraseQueryDocument, options);
      }
export function useListPhraseQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPhraseQueryQuery, ListPhraseQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListPhraseQueryQuery, ListPhraseQueryQueryVariables>(ListPhraseQueryDocument, options);
        }
export type ListPhraseQueryQueryHookResult = ReturnType<typeof useListPhraseQueryQuery>;
export type ListPhraseQueryLazyQueryHookResult = ReturnType<typeof useListPhraseQueryLazyQuery>;
export type ListPhraseQueryQueryResult = Apollo.QueryResult<ListPhraseQueryQuery, ListPhraseQueryQueryVariables>;
export const ListPhraseDocument = gql`
    subscription ListPhrase {
  englister_Phrase(order_by: {created_at: desc}) {
    id
    phrase
    description
    created_at
    updated_at
  }
}
    `;

/**
 * __useListPhraseSubscription__
 *
 * To run a query within a React component, call `useListPhraseSubscription` and pass it any options that fit your needs.
 * When your component renders, `useListPhraseSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPhraseSubscription({
 *   variables: {
 *   },
 * });
 */
export function useListPhraseSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ListPhraseSubscription, ListPhraseSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ListPhraseSubscription, ListPhraseSubscriptionVariables>(ListPhraseDocument, options);
      }
export type ListPhraseSubscriptionHookResult = ReturnType<typeof useListPhraseSubscription>;
export type ListPhraseSubscriptionResult = Apollo.SubscriptionResult<ListPhraseSubscription>;
export const QueryPublciAnswersDocument = gql`
    query queryPublciAnswers($topicId: Int!) {
  englister_PublicAnswers(
    where: {topicId: {_eq: $topicId}}
    order_by: {createdAt: desc}
    limit: 10
  ) {
    id
    topicId
    answer
    japanese
    translation
    age
    createdBy
    createdAt
  }
}
    `;

/**
 * __useQueryPublciAnswersQuery__
 *
 * To run a query within a React component, call `useQueryPublciAnswersQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryPublciAnswersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryPublciAnswersQuery({
 *   variables: {
 *      topicId: // value for 'topicId'
 *   },
 * });
 */
export function useQueryPublciAnswersQuery(baseOptions: Apollo.QueryHookOptions<QueryPublciAnswersQuery, QueryPublciAnswersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryPublciAnswersQuery, QueryPublciAnswersQueryVariables>(QueryPublciAnswersDocument, options);
      }
export function useQueryPublciAnswersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryPublciAnswersQuery, QueryPublciAnswersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryPublciAnswersQuery, QueryPublciAnswersQueryVariables>(QueryPublciAnswersDocument, options);
        }
export type QueryPublciAnswersQueryHookResult = ReturnType<typeof useQueryPublciAnswersQuery>;
export type QueryPublciAnswersLazyQueryHookResult = ReturnType<typeof useQueryPublciAnswersLazyQuery>;
export type QueryPublciAnswersQueryResult = Apollo.QueryResult<QueryPublciAnswersQuery, QueryPublciAnswersQueryVariables>;
export const QueryTodayPublciAnswerRankingDocument = gql`
    query queryTodayPublciAnswerRanking($todayTopicId: String!) {
  englister_PublicAnswers(
    where: {todayTopicId: {_eq: $todayTopicId}}
    order_by: {age: desc}
    limit: 50
  ) {
    id
    topicId
    answer
    japanese
    translation
    age
    name
    createdBy
    createdAt
  }
}
    `;

/**
 * __useQueryTodayPublciAnswerRankingQuery__
 *
 * To run a query within a React component, call `useQueryTodayPublciAnswerRankingQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryTodayPublciAnswerRankingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryTodayPublciAnswerRankingQuery({
 *   variables: {
 *      todayTopicId: // value for 'todayTopicId'
 *   },
 * });
 */
export function useQueryTodayPublciAnswerRankingQuery(baseOptions: Apollo.QueryHookOptions<QueryTodayPublciAnswerRankingQuery, QueryTodayPublciAnswerRankingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryTodayPublciAnswerRankingQuery, QueryTodayPublciAnswerRankingQueryVariables>(QueryTodayPublciAnswerRankingDocument, options);
      }
export function useQueryTodayPublciAnswerRankingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryTodayPublciAnswerRankingQuery, QueryTodayPublciAnswerRankingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryTodayPublciAnswerRankingQuery, QueryTodayPublciAnswerRankingQueryVariables>(QueryTodayPublciAnswerRankingDocument, options);
        }
export type QueryTodayPublciAnswerRankingQueryHookResult = ReturnType<typeof useQueryTodayPublciAnswerRankingQuery>;
export type QueryTodayPublciAnswerRankingLazyQueryHookResult = ReturnType<typeof useQueryTodayPublciAnswerRankingLazyQuery>;
export type QueryTodayPublciAnswerRankingQueryResult = Apollo.QueryResult<QueryTodayPublciAnswerRankingQuery, QueryTodayPublciAnswerRankingQueryVariables>;
export const QueryPublicJapaneseDocument = gql`
    query queryPublicJapanese($topicId: Int!) {
  englister_PublicAnswers(
    where: {topicId: {_eq: $topicId}, japanese: {_neq: ""}}
    order_by: {createdAt: desc}
    limit: 5
  ) {
    id
    topicId
    japanese
    createdBy
    createdAt
  }
}
    `;

/**
 * __useQueryPublicJapaneseQuery__
 *
 * To run a query within a React component, call `useQueryPublicJapaneseQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryPublicJapaneseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryPublicJapaneseQuery({
 *   variables: {
 *      topicId: // value for 'topicId'
 *   },
 * });
 */
export function useQueryPublicJapaneseQuery(baseOptions: Apollo.QueryHookOptions<QueryPublicJapaneseQuery, QueryPublicJapaneseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryPublicJapaneseQuery, QueryPublicJapaneseQueryVariables>(QueryPublicJapaneseDocument, options);
      }
export function useQueryPublicJapaneseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryPublicJapaneseQuery, QueryPublicJapaneseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryPublicJapaneseQuery, QueryPublicJapaneseQueryVariables>(QueryPublicJapaneseDocument, options);
        }
export type QueryPublicJapaneseQueryHookResult = ReturnType<typeof useQueryPublicJapaneseQuery>;
export type QueryPublicJapaneseLazyQueryHookResult = ReturnType<typeof useQueryPublicJapaneseLazyQuery>;
export type QueryPublicJapaneseQueryResult = Apollo.QueryResult<QueryPublicJapaneseQuery, QueryPublicJapaneseQueryVariables>;
export const SubmitPublicAnswerDocument = gql`
    mutation SubmitPublicAnswer($topicId: Int!, $answer: String!, $japanese: String!, $translation: String!, $age: Int!) {
  insert_englister_PublicAnswers_one(
    object: {topicId: $topicId, answer: $answer, japanese: $japanese, translation: $translation, age: $age}
  ) {
    id
    topicId
    answer
    createdAt
    createdBy
  }
}
    `;
export type SubmitPublicAnswerMutationFn = Apollo.MutationFunction<SubmitPublicAnswerMutation, SubmitPublicAnswerMutationVariables>;

/**
 * __useSubmitPublicAnswerMutation__
 *
 * To run a mutation, you first call `useSubmitPublicAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitPublicAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitPublicAnswerMutation, { data, loading, error }] = useSubmitPublicAnswerMutation({
 *   variables: {
 *      topicId: // value for 'topicId'
 *      answer: // value for 'answer'
 *      japanese: // value for 'japanese'
 *      translation: // value for 'translation'
 *      age: // value for 'age'
 *   },
 * });
 */
export function useSubmitPublicAnswerMutation(baseOptions?: Apollo.MutationHookOptions<SubmitPublicAnswerMutation, SubmitPublicAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitPublicAnswerMutation, SubmitPublicAnswerMutationVariables>(SubmitPublicAnswerDocument, options);
      }
export type SubmitPublicAnswerMutationHookResult = ReturnType<typeof useSubmitPublicAnswerMutation>;
export type SubmitPublicAnswerMutationResult = Apollo.MutationResult<SubmitPublicAnswerMutation>;
export type SubmitPublicAnswerMutationOptions = Apollo.BaseMutationOptions<SubmitPublicAnswerMutation, SubmitPublicAnswerMutationVariables>;
export const SubmitTodayPublicAnswerDocument = gql`
    mutation SubmitTodayPublicAnswer($topicId: Int!, $answer: String!, $japanese: String!, $translation: String!, $age: Int!, $todayTopicId: String!, $name: String!) {
  insert_englister_PublicAnswers_one(
    object: {topicId: $topicId, answer: $answer, japanese: $japanese, translation: $translation, age: $age, todayTopicId: $todayTopicId, name: $name}
  ) {
    id
    topicId
    answer
    createdAt
    createdBy
  }
}
    `;
export type SubmitTodayPublicAnswerMutationFn = Apollo.MutationFunction<SubmitTodayPublicAnswerMutation, SubmitTodayPublicAnswerMutationVariables>;

/**
 * __useSubmitTodayPublicAnswerMutation__
 *
 * To run a mutation, you first call `useSubmitTodayPublicAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitTodayPublicAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitTodayPublicAnswerMutation, { data, loading, error }] = useSubmitTodayPublicAnswerMutation({
 *   variables: {
 *      topicId: // value for 'topicId'
 *      answer: // value for 'answer'
 *      japanese: // value for 'japanese'
 *      translation: // value for 'translation'
 *      age: // value for 'age'
 *      todayTopicId: // value for 'todayTopicId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSubmitTodayPublicAnswerMutation(baseOptions?: Apollo.MutationHookOptions<SubmitTodayPublicAnswerMutation, SubmitTodayPublicAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitTodayPublicAnswerMutation, SubmitTodayPublicAnswerMutationVariables>(SubmitTodayPublicAnswerDocument, options);
      }
export type SubmitTodayPublicAnswerMutationHookResult = ReturnType<typeof useSubmitTodayPublicAnswerMutation>;
export type SubmitTodayPublicAnswerMutationResult = Apollo.MutationResult<SubmitTodayPublicAnswerMutation>;
export type SubmitTodayPublicAnswerMutationOptions = Apollo.BaseMutationOptions<SubmitTodayPublicAnswerMutation, SubmitTodayPublicAnswerMutationVariables>;