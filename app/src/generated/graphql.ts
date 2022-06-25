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
  bigint: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
};

/** columns and relationships of "Board" */
export type Board = {
  __typename?: 'Board';
  CreatedAt: Scalars['timestamptz'];
  Id: Scalars['Int'];
  UpdatedAt: Scalars['timestamptz'];
  /** An array relationship */
  board_notes: Array<Note>;
};


/** columns and relationships of "Board" */
export type BoardBoard_NotesArgs = {
  distinct_on?: InputMaybe<Array<Note_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Note_Order_By>>;
  where?: InputMaybe<Note_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "Board". All fields are combined with a logical 'AND'. */
export type Board_Bool_Exp = {
  CreatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  Id?: InputMaybe<Int_Comparison_Exp>;
  UpdatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  _and?: InputMaybe<Array<Board_Bool_Exp>>;
  _not?: InputMaybe<Board_Bool_Exp>;
  _or?: InputMaybe<Array<Board_Bool_Exp>>;
  board_notes?: InputMaybe<Note_Bool_Exp>;
};

/** Ordering options when selecting data from "Board". */
export type Board_Order_By = {
  CreatedAt?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
  board_notes_aggregate?: InputMaybe<Note_Aggregate_Order_By>;
};

/** select columns of table "Board" */
export enum Board_Select_Column {
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  Id = 'Id',
  /** column name */
  UpdatedAt = 'UpdatedAt'
}

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

/** columns and relationships of "Note" */
export type Note = {
  __typename?: 'Note';
  BoardId: Scalars['Int'];
  Color?: Maybe<Scalars['bigint']>;
  CreatedAt: Scalars['timestamp'];
  CreatedBy?: Maybe<Scalars['String']>;
  Id: Scalars['Int'];
  PostedBy: Scalars['String'];
  Text: Scalars['String'];
  UpdatedAt?: Maybe<Scalars['timestamptz']>;
  X?: Maybe<Scalars['numeric']>;
  Y?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  note_board?: Maybe<Board>;
};

/** order by aggregate values of table "Note" */
export type Note_Aggregate_Order_By = {
  avg?: InputMaybe<Note_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Note_Max_Order_By>;
  min?: InputMaybe<Note_Min_Order_By>;
  stddev?: InputMaybe<Note_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Note_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Note_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Note_Sum_Order_By>;
  var_pop?: InputMaybe<Note_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Note_Var_Samp_Order_By>;
  variance?: InputMaybe<Note_Variance_Order_By>;
};

/** order by avg() on columns of table "Note" */
export type Note_Avg_Order_By = {
  BoardId?: InputMaybe<Order_By>;
  Color?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  X?: InputMaybe<Order_By>;
  Y?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Note". All fields are combined with a logical 'AND'. */
export type Note_Bool_Exp = {
  BoardId?: InputMaybe<Int_Comparison_Exp>;
  Color?: InputMaybe<Bigint_Comparison_Exp>;
  CreatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  CreatedBy?: InputMaybe<String_Comparison_Exp>;
  Id?: InputMaybe<Int_Comparison_Exp>;
  PostedBy?: InputMaybe<String_Comparison_Exp>;
  Text?: InputMaybe<String_Comparison_Exp>;
  UpdatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  X?: InputMaybe<Numeric_Comparison_Exp>;
  Y?: InputMaybe<Numeric_Comparison_Exp>;
  _and?: InputMaybe<Array<Note_Bool_Exp>>;
  _not?: InputMaybe<Note_Bool_Exp>;
  _or?: InputMaybe<Array<Note_Bool_Exp>>;
  note_board?: InputMaybe<Board_Bool_Exp>;
};

/** unique or primary key constraints on table "Note" */
export enum Note_Constraint {
  /** unique or primary key constraint */
  NotePkey = 'Note_pkey'
}

/** input type for incrementing numeric columns in table "Note" */
export type Note_Inc_Input = {
  Color?: InputMaybe<Scalars['bigint']>;
  X?: InputMaybe<Scalars['numeric']>;
  Y?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "Note" */
export type Note_Insert_Input = {
  BoardId?: InputMaybe<Scalars['Int']>;
  Color?: InputMaybe<Scalars['bigint']>;
  PostedBy?: InputMaybe<Scalars['String']>;
  Text?: InputMaybe<Scalars['String']>;
  X?: InputMaybe<Scalars['numeric']>;
  Y?: InputMaybe<Scalars['numeric']>;
};

/** order by max() on columns of table "Note" */
export type Note_Max_Order_By = {
  BoardId?: InputMaybe<Order_By>;
  Color?: InputMaybe<Order_By>;
  CreatedAt?: InputMaybe<Order_By>;
  CreatedBy?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  PostedBy?: InputMaybe<Order_By>;
  Text?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
  X?: InputMaybe<Order_By>;
  Y?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Note" */
export type Note_Min_Order_By = {
  BoardId?: InputMaybe<Order_By>;
  Color?: InputMaybe<Order_By>;
  CreatedAt?: InputMaybe<Order_By>;
  CreatedBy?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  PostedBy?: InputMaybe<Order_By>;
  Text?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
  X?: InputMaybe<Order_By>;
  Y?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Note" */
export type Note_Mutation_Response = {
  __typename?: 'Note_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Note>;
};

/** on_conflict condition type for table "Note" */
export type Note_On_Conflict = {
  constraint: Note_Constraint;
  update_columns?: Array<Note_Update_Column>;
  where?: InputMaybe<Note_Bool_Exp>;
};

/** Ordering options when selecting data from "Note". */
export type Note_Order_By = {
  BoardId?: InputMaybe<Order_By>;
  Color?: InputMaybe<Order_By>;
  CreatedAt?: InputMaybe<Order_By>;
  CreatedBy?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  PostedBy?: InputMaybe<Order_By>;
  Text?: InputMaybe<Order_By>;
  UpdatedAt?: InputMaybe<Order_By>;
  X?: InputMaybe<Order_By>;
  Y?: InputMaybe<Order_By>;
  note_board?: InputMaybe<Board_Order_By>;
};

/** primary key columns input for table: Note */
export type Note_Pk_Columns_Input = {
  Id: Scalars['Int'];
};

/** select columns of table "Note" */
export enum Note_Select_Column {
  /** column name */
  BoardId = 'BoardId',
  /** column name */
  Color = 'Color',
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  CreatedBy = 'CreatedBy',
  /** column name */
  Id = 'Id',
  /** column name */
  PostedBy = 'PostedBy',
  /** column name */
  Text = 'Text',
  /** column name */
  UpdatedAt = 'UpdatedAt',
  /** column name */
  X = 'X',
  /** column name */
  Y = 'Y'
}

/** input type for updating data in table "Note" */
export type Note_Set_Input = {
  Color?: InputMaybe<Scalars['bigint']>;
  Text?: InputMaybe<Scalars['String']>;
  X?: InputMaybe<Scalars['numeric']>;
  Y?: InputMaybe<Scalars['numeric']>;
};

/** order by stddev() on columns of table "Note" */
export type Note_Stddev_Order_By = {
  BoardId?: InputMaybe<Order_By>;
  Color?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  X?: InputMaybe<Order_By>;
  Y?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Note" */
export type Note_Stddev_Pop_Order_By = {
  BoardId?: InputMaybe<Order_By>;
  Color?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  X?: InputMaybe<Order_By>;
  Y?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Note" */
export type Note_Stddev_Samp_Order_By = {
  BoardId?: InputMaybe<Order_By>;
  Color?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  X?: InputMaybe<Order_By>;
  Y?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "Note" */
export type Note_Sum_Order_By = {
  BoardId?: InputMaybe<Order_By>;
  Color?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  X?: InputMaybe<Order_By>;
  Y?: InputMaybe<Order_By>;
};

/** update columns of table "Note" */
export enum Note_Update_Column {
  /** column name */
  Color = 'Color',
  /** column name */
  Text = 'Text',
  /** column name */
  X = 'X',
  /** column name */
  Y = 'Y'
}

/** order by var_pop() on columns of table "Note" */
export type Note_Var_Pop_Order_By = {
  BoardId?: InputMaybe<Order_By>;
  Color?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  X?: InputMaybe<Order_By>;
  Y?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Note" */
export type Note_Var_Samp_Order_By = {
  BoardId?: InputMaybe<Order_By>;
  Color?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  X?: InputMaybe<Order_By>;
  Y?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Note" */
export type Note_Variance_Order_By = {
  BoardId?: InputMaybe<Order_By>;
  Color?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  X?: InputMaybe<Order_By>;
  Y?: InputMaybe<Order_By>;
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

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

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
  /** unique or primary key constraint */
  MyNotePkey = 'MyNote_pkey'
}

/** input type for inserting data into table "englister.MyNote" */
export type Englister_MyNote_Insert_Input = {
  categorySlug?: InputMaybe<Scalars['String']>;
  english?: InputMaybe<Scalars['String']>;
  japanese?: InputMaybe<Scalars['String']>;
  memo?: InputMaybe<Scalars['String']>;
  questionDescription?: InputMaybe<Scalars['String']>;
  questionTitle?: InputMaybe<Scalars['String']>;
  topicId?: InputMaybe<Scalars['String']>;
  translation?: InputMaybe<Scalars['String']>;
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
  memo?: InputMaybe<Scalars['String']>;
};

/** update columns of table "englister.MyNote" */
export enum Englister_MyNote_Update_Column {
  /** column name */
  Memo = 'memo'
}

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
  /** unique or primary key constraint */
  PhrasePkey = 'Phrase_pkey'
}

/** input type for inserting data into table "englister.Phrase" */
export type Englister_Phrase_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  phrase?: InputMaybe<Scalars['String']>;
  remembered?: InputMaybe<Scalars['Boolean']>;
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
  description?: InputMaybe<Scalars['String']>;
  phrase?: InputMaybe<Scalars['String']>;
  remembered?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "englister.Phrase" */
export enum Englister_Phrase_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Phrase = 'phrase',
  /** column name */
  Remembered = 'remembered'
}

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

/** input type for inserting data into table "englister.PublicAnswers" */
export type Englister_PublicAnswers_Insert_Input = {
  age?: InputMaybe<Scalars['Int']>;
  answer?: InputMaybe<Scalars['String']>;
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

/** columns and relationships of "englister.WordleRecord" */
export type Englister_WordleRecord = {
  __typename?: 'englister_WordleRecord';
  answer: Scalars['String'];
  created_at: Scalars['timestamptz'];
  roomSlug: Scalars['String'];
  userId: Scalars['String'];
  wind: Scalars['Boolean'];
};

/** aggregated selection of "englister.WordleRecord" */
export type Englister_WordleRecord_Aggregate = {
  __typename?: 'englister_WordleRecord_aggregate';
  aggregate?: Maybe<Englister_WordleRecord_Aggregate_Fields>;
  nodes: Array<Englister_WordleRecord>;
};

/** aggregate fields of "englister.WordleRecord" */
export type Englister_WordleRecord_Aggregate_Fields = {
  __typename?: 'englister_WordleRecord_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Englister_WordleRecord_Max_Fields>;
  min?: Maybe<Englister_WordleRecord_Min_Fields>;
};


/** aggregate fields of "englister.WordleRecord" */
export type Englister_WordleRecord_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Englister_WordleRecord_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "englister.WordleRecord". All fields are combined with a logical 'AND'. */
export type Englister_WordleRecord_Bool_Exp = {
  _and?: InputMaybe<Array<Englister_WordleRecord_Bool_Exp>>;
  _not?: InputMaybe<Englister_WordleRecord_Bool_Exp>;
  _or?: InputMaybe<Array<Englister_WordleRecord_Bool_Exp>>;
  answer?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  roomSlug?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
  wind?: InputMaybe<Boolean_Comparison_Exp>;
};

/** input type for inserting data into table "englister.WordleRecord" */
export type Englister_WordleRecord_Insert_Input = {
  answer?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  roomSlug?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  wind?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Englister_WordleRecord_Max_Fields = {
  __typename?: 'englister_WordleRecord_max_fields';
  answer?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  roomSlug?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Englister_WordleRecord_Min_Fields = {
  __typename?: 'englister_WordleRecord_min_fields';
  answer?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  roomSlug?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "englister.WordleRecord" */
export type Englister_WordleRecord_Mutation_Response = {
  __typename?: 'englister_WordleRecord_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Englister_WordleRecord>;
};

/** Ordering options when selecting data from "englister.WordleRecord". */
export type Englister_WordleRecord_Order_By = {
  answer?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  roomSlug?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  wind?: InputMaybe<Order_By>;
};

/** select columns of table "englister.WordleRecord" */
export enum Englister_WordleRecord_Select_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  RoomSlug = 'roomSlug',
  /** column name */
  UserId = 'userId',
  /** column name */
  Wind = 'wind'
}

/** columns and relationships of "englister.WordleRoom" */
export type Englister_WordleRoom = {
  __typename?: 'englister_WordleRoom';
  answer: Scalars['String'];
  created_at: Scalars['timestamptz'];
  five: Scalars['String'];
  four: Scalars['String'];
  one: Scalars['String'];
  player1: Scalars['String'];
  player1_name?: Maybe<Scalars['String']>;
  player2: Scalars['String'];
  player2_name?: Maybe<Scalars['String']>;
  six: Scalars['String'];
  slug: Scalars['String'];
  three: Scalars['String'];
  turn?: Maybe<Scalars['String']>;
  two: Scalars['String'];
};

/** Boolean expression to filter rows from the table "englister.WordleRoom". All fields are combined with a logical 'AND'. */
export type Englister_WordleRoom_Bool_Exp = {
  _and?: InputMaybe<Array<Englister_WordleRoom_Bool_Exp>>;
  _not?: InputMaybe<Englister_WordleRoom_Bool_Exp>;
  _or?: InputMaybe<Array<Englister_WordleRoom_Bool_Exp>>;
  answer?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  five?: InputMaybe<String_Comparison_Exp>;
  four?: InputMaybe<String_Comparison_Exp>;
  one?: InputMaybe<String_Comparison_Exp>;
  player1?: InputMaybe<String_Comparison_Exp>;
  player1_name?: InputMaybe<String_Comparison_Exp>;
  player2?: InputMaybe<String_Comparison_Exp>;
  player2_name?: InputMaybe<String_Comparison_Exp>;
  six?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  three?: InputMaybe<String_Comparison_Exp>;
  turn?: InputMaybe<String_Comparison_Exp>;
  two?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "englister.WordleRoom" */
export enum Englister_WordleRoom_Constraint {
  /** unique or primary key constraint */
  WordleRoomPkey = 'WordleRoom_pkey'
}

/** input type for inserting data into table "englister.WordleRoom" */
export type Englister_WordleRoom_Insert_Input = {
  answer?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  five?: InputMaybe<Scalars['String']>;
  four?: InputMaybe<Scalars['String']>;
  one?: InputMaybe<Scalars['String']>;
  player1?: InputMaybe<Scalars['String']>;
  player1_name?: InputMaybe<Scalars['String']>;
  player2?: InputMaybe<Scalars['String']>;
  player2_name?: InputMaybe<Scalars['String']>;
  six?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  three?: InputMaybe<Scalars['String']>;
  turn?: InputMaybe<Scalars['String']>;
  two?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "englister.WordleRoom" */
export type Englister_WordleRoom_Mutation_Response = {
  __typename?: 'englister_WordleRoom_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Englister_WordleRoom>;
};

/** on_conflict condition type for table "englister.WordleRoom" */
export type Englister_WordleRoom_On_Conflict = {
  constraint: Englister_WordleRoom_Constraint;
  update_columns?: Array<Englister_WordleRoom_Update_Column>;
  where?: InputMaybe<Englister_WordleRoom_Bool_Exp>;
};

/** Ordering options when selecting data from "englister.WordleRoom". */
export type Englister_WordleRoom_Order_By = {
  answer?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  five?: InputMaybe<Order_By>;
  four?: InputMaybe<Order_By>;
  one?: InputMaybe<Order_By>;
  player1?: InputMaybe<Order_By>;
  player1_name?: InputMaybe<Order_By>;
  player2?: InputMaybe<Order_By>;
  player2_name?: InputMaybe<Order_By>;
  six?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  three?: InputMaybe<Order_By>;
  turn?: InputMaybe<Order_By>;
  two?: InputMaybe<Order_By>;
};

/** primary key columns input for table: englister_WordleRoom */
export type Englister_WordleRoom_Pk_Columns_Input = {
  slug: Scalars['String'];
};

/** select columns of table "englister.WordleRoom" */
export enum Englister_WordleRoom_Select_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Five = 'five',
  /** column name */
  Four = 'four',
  /** column name */
  One = 'one',
  /** column name */
  Player1 = 'player1',
  /** column name */
  Player1Name = 'player1_name',
  /** column name */
  Player2 = 'player2',
  /** column name */
  Player2Name = 'player2_name',
  /** column name */
  Six = 'six',
  /** column name */
  Slug = 'slug',
  /** column name */
  Three = 'three',
  /** column name */
  Turn = 'turn',
  /** column name */
  Two = 'two'
}

/** input type for updating data in table "englister.WordleRoom" */
export type Englister_WordleRoom_Set_Input = {
  answer?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  five?: InputMaybe<Scalars['String']>;
  four?: InputMaybe<Scalars['String']>;
  one?: InputMaybe<Scalars['String']>;
  player1?: InputMaybe<Scalars['String']>;
  player1_name?: InputMaybe<Scalars['String']>;
  player2?: InputMaybe<Scalars['String']>;
  player2_name?: InputMaybe<Scalars['String']>;
  six?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  three?: InputMaybe<Scalars['String']>;
  turn?: InputMaybe<Scalars['String']>;
  two?: InputMaybe<Scalars['String']>;
};

/** update columns of table "englister.WordleRoom" */
export enum Englister_WordleRoom_Update_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Five = 'five',
  /** column name */
  Four = 'four',
  /** column name */
  One = 'one',
  /** column name */
  Player1 = 'player1',
  /** column name */
  Player1Name = 'player1_name',
  /** column name */
  Player2 = 'player2',
  /** column name */
  Player2Name = 'player2_name',
  /** column name */
  Six = 'six',
  /** column name */
  Slug = 'slug',
  /** column name */
  Three = 'three',
  /** column name */
  Turn = 'turn',
  /** column name */
  Two = 'two'
}

/** columns and relationships of "englister.WordleSkippedWords" */
export type Englister_WordleSkippedWords = {
  __typename?: 'englister_WordleSkippedWords';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  roomId: Scalars['String'];
  word: Scalars['String'];
};

/** Boolean expression to filter rows from the table "englister.WordleSkippedWords". All fields are combined with a logical 'AND'. */
export type Englister_WordleSkippedWords_Bool_Exp = {
  _and?: InputMaybe<Array<Englister_WordleSkippedWords_Bool_Exp>>;
  _not?: InputMaybe<Englister_WordleSkippedWords_Bool_Exp>;
  _or?: InputMaybe<Array<Englister_WordleSkippedWords_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  roomId?: InputMaybe<String_Comparison_Exp>;
  word?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "englister.WordleSkippedWords" */
export type Englister_WordleSkippedWords_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  roomId?: InputMaybe<Scalars['String']>;
  word?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "englister.WordleSkippedWords" */
export type Englister_WordleSkippedWords_Mutation_Response = {
  __typename?: 'englister_WordleSkippedWords_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Englister_WordleSkippedWords>;
};

/** Ordering options when selecting data from "englister.WordleSkippedWords". */
export type Englister_WordleSkippedWords_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  roomId?: InputMaybe<Order_By>;
  word?: InputMaybe<Order_By>;
};

/** select columns of table "englister.WordleSkippedWords" */
export enum Englister_WordleSkippedWords_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RoomId = 'roomId',
  /** column name */
  Word = 'word'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  GenerateAgoraToken?: Maybe<GenerateAgoraTokenOutput>;
  actionName?: Maybe<SampleOutput>;
  /** delete data from the table: "Note" */
  delete_Note?: Maybe<Note_Mutation_Response>;
  /** delete single row from the table: "Note" */
  delete_Note_by_pk?: Maybe<Note>;
  /** delete data from the table: "englister.MyNote" */
  delete_englister_MyNote?: Maybe<Englister_MyNote_Mutation_Response>;
  /** delete single row from the table: "englister.MyNote" */
  delete_englister_MyNote_by_pk?: Maybe<Englister_MyNote>;
  /** delete data from the table: "englister.Phrase" */
  delete_englister_Phrase?: Maybe<Englister_Phrase_Mutation_Response>;
  /** delete single row from the table: "englister.Phrase" */
  delete_englister_Phrase_by_pk?: Maybe<Englister_Phrase>;
  /** delete data from the table: "englister.PublicAnswers" */
  delete_englister_PublicAnswers?: Maybe<Englister_PublicAnswers_Mutation_Response>;
  /** delete single row from the table: "englister.PublicAnswers" */
  delete_englister_PublicAnswers_by_pk?: Maybe<Englister_PublicAnswers>;
  /** delete data from the table: "englister.WordleRoom" */
  delete_englister_WordleRoom?: Maybe<Englister_WordleRoom_Mutation_Response>;
  /** delete single row from the table: "englister.WordleRoom" */
  delete_englister_WordleRoom_by_pk?: Maybe<Englister_WordleRoom>;
  /** delete data from the table: "slideshare.Bookmark" */
  delete_slideshare_Bookmark?: Maybe<Slideshare_Bookmark_Mutation_Response>;
  /** delete single row from the table: "slideshare.Bookmark" */
  delete_slideshare_Bookmark_by_pk?: Maybe<Slideshare_Bookmark>;
  /** delete data from the table: "slideshare.Comment" */
  delete_slideshare_Comment?: Maybe<Slideshare_Comment_Mutation_Response>;
  /** delete single row from the table: "slideshare.Comment" */
  delete_slideshare_Comment_by_pk?: Maybe<Slideshare_Comment>;
  /** delete data from the table: "slideshare.Conference" */
  delete_slideshare_Conference?: Maybe<Slideshare_Conference_Mutation_Response>;
  /** delete single row from the table: "slideshare.Conference" */
  delete_slideshare_Conference_by_pk?: Maybe<Slideshare_Conference>;
  /** delete data from the table: "slideshare.File" */
  delete_slideshare_File?: Maybe<Slideshare_File_Mutation_Response>;
  /** delete single row from the table: "slideshare.File" */
  delete_slideshare_File_by_pk?: Maybe<Slideshare_File>;
  /** delete data from the table: "slideshare.Follower" */
  delete_slideshare_Follower?: Maybe<Slideshare_Follower_Mutation_Response>;
  /** delete single row from the table: "slideshare.Follower" */
  delete_slideshare_Follower_by_pk?: Maybe<Slideshare_Follower>;
  /** delete data from the table: "slideshare.Page" */
  delete_slideshare_Page?: Maybe<Slideshare_Page_Mutation_Response>;
  /** delete single row from the table: "slideshare.Page" */
  delete_slideshare_Page_by_pk?: Maybe<Slideshare_Page>;
  /** delete data from the table: "slideshare.Poll" */
  delete_slideshare_Poll?: Maybe<Slideshare_Poll_Mutation_Response>;
  /** delete single row from the table: "slideshare.Poll" */
  delete_slideshare_Poll_by_pk?: Maybe<Slideshare_Poll>;
  /** delete data from the table: "slideshare.Room" */
  delete_slideshare_Room?: Maybe<Slideshare_Room_Mutation_Response>;
  /** delete data from the table: "slideshare.RoomParticipant" */
  delete_slideshare_RoomParticipant?: Maybe<Slideshare_RoomParticipant_Mutation_Response>;
  /** delete single row from the table: "slideshare.RoomParticipant" */
  delete_slideshare_RoomParticipant_by_pk?: Maybe<Slideshare_RoomParticipant>;
  /** delete single row from the table: "slideshare.Room" */
  delete_slideshare_Room_by_pk?: Maybe<Slideshare_Room>;
  /** delete data from the table: "slideshare.Slide" */
  delete_slideshare_Slide?: Maybe<Slideshare_Slide_Mutation_Response>;
  /** delete data from the table: "slideshare.SlideRecord" */
  delete_slideshare_SlideRecord?: Maybe<Slideshare_SlideRecord_Mutation_Response>;
  /** delete single row from the table: "slideshare.SlideRecord" */
  delete_slideshare_SlideRecord_by_pk?: Maybe<Slideshare_SlideRecord>;
  /** delete single row from the table: "slideshare.Slide" */
  delete_slideshare_Slide_by_pk?: Maybe<Slideshare_Slide>;
  /** insert data into the table: "Note" */
  insert_Note?: Maybe<Note_Mutation_Response>;
  /** insert a single row into the table: "Note" */
  insert_Note_one?: Maybe<Note>;
  /** insert data into the table: "englister.MyNote" */
  insert_englister_MyNote?: Maybe<Englister_MyNote_Mutation_Response>;
  /** insert a single row into the table: "englister.MyNote" */
  insert_englister_MyNote_one?: Maybe<Englister_MyNote>;
  /** insert data into the table: "englister.Phrase" */
  insert_englister_Phrase?: Maybe<Englister_Phrase_Mutation_Response>;
  /** insert a single row into the table: "englister.Phrase" */
  insert_englister_Phrase_one?: Maybe<Englister_Phrase>;
  /** insert data into the table: "englister.PublicAnswers" */
  insert_englister_PublicAnswers?: Maybe<Englister_PublicAnswers_Mutation_Response>;
  /** insert a single row into the table: "englister.PublicAnswers" */
  insert_englister_PublicAnswers_one?: Maybe<Englister_PublicAnswers>;
  /** insert data into the table: "englister.WordleRecord" */
  insert_englister_WordleRecord?: Maybe<Englister_WordleRecord_Mutation_Response>;
  /** insert a single row into the table: "englister.WordleRecord" */
  insert_englister_WordleRecord_one?: Maybe<Englister_WordleRecord>;
  /** insert data into the table: "englister.WordleRoom" */
  insert_englister_WordleRoom?: Maybe<Englister_WordleRoom_Mutation_Response>;
  /** insert a single row into the table: "englister.WordleRoom" */
  insert_englister_WordleRoom_one?: Maybe<Englister_WordleRoom>;
  /** insert data into the table: "englister.WordleSkippedWords" */
  insert_englister_WordleSkippedWords?: Maybe<Englister_WordleSkippedWords_Mutation_Response>;
  /** insert a single row into the table: "englister.WordleSkippedWords" */
  insert_englister_WordleSkippedWords_one?: Maybe<Englister_WordleSkippedWords>;
  /** insert data into the table: "slideshare.Bookmark" */
  insert_slideshare_Bookmark?: Maybe<Slideshare_Bookmark_Mutation_Response>;
  /** insert a single row into the table: "slideshare.Bookmark" */
  insert_slideshare_Bookmark_one?: Maybe<Slideshare_Bookmark>;
  /** insert data into the table: "slideshare.Comment" */
  insert_slideshare_Comment?: Maybe<Slideshare_Comment_Mutation_Response>;
  /** insert a single row into the table: "slideshare.Comment" */
  insert_slideshare_Comment_one?: Maybe<Slideshare_Comment>;
  /** insert data into the table: "slideshare.Conference" */
  insert_slideshare_Conference?: Maybe<Slideshare_Conference_Mutation_Response>;
  /** insert data into the table: "slideshare.ConferenceSubscriber" */
  insert_slideshare_ConferenceSubscriber?: Maybe<Slideshare_ConferenceSubscriber_Mutation_Response>;
  /** insert a single row into the table: "slideshare.ConferenceSubscriber" */
  insert_slideshare_ConferenceSubscriber_one?: Maybe<Slideshare_ConferenceSubscriber>;
  /** insert a single row into the table: "slideshare.Conference" */
  insert_slideshare_Conference_one?: Maybe<Slideshare_Conference>;
  /** insert data into the table: "slideshare.File" */
  insert_slideshare_File?: Maybe<Slideshare_File_Mutation_Response>;
  /** insert a single row into the table: "slideshare.File" */
  insert_slideshare_File_one?: Maybe<Slideshare_File>;
  /** insert data into the table: "slideshare.Follower" */
  insert_slideshare_Follower?: Maybe<Slideshare_Follower_Mutation_Response>;
  /** insert a single row into the table: "slideshare.Follower" */
  insert_slideshare_Follower_one?: Maybe<Slideshare_Follower>;
  /** insert data into the table: "slideshare.Page" */
  insert_slideshare_Page?: Maybe<Slideshare_Page_Mutation_Response>;
  /** insert a single row into the table: "slideshare.Page" */
  insert_slideshare_Page_one?: Maybe<Slideshare_Page>;
  /** insert data into the table: "slideshare.Poll" */
  insert_slideshare_Poll?: Maybe<Slideshare_Poll_Mutation_Response>;
  /** insert data into the table: "slideshare.PollResult" */
  insert_slideshare_PollResult?: Maybe<Slideshare_PollResult_Mutation_Response>;
  /** insert a single row into the table: "slideshare.PollResult" */
  insert_slideshare_PollResult_one?: Maybe<Slideshare_PollResult>;
  /** insert a single row into the table: "slideshare.Poll" */
  insert_slideshare_Poll_one?: Maybe<Slideshare_Poll>;
  /** insert data into the table: "slideshare.Profile" */
  insert_slideshare_Profile?: Maybe<Slideshare_Profile_Mutation_Response>;
  /** insert a single row into the table: "slideshare.Profile" */
  insert_slideshare_Profile_one?: Maybe<Slideshare_Profile>;
  /** insert data into the table: "slideshare.Room" */
  insert_slideshare_Room?: Maybe<Slideshare_Room_Mutation_Response>;
  /** insert data into the table: "slideshare.RoomParticipant" */
  insert_slideshare_RoomParticipant?: Maybe<Slideshare_RoomParticipant_Mutation_Response>;
  /** insert a single row into the table: "slideshare.RoomParticipant" */
  insert_slideshare_RoomParticipant_one?: Maybe<Slideshare_RoomParticipant>;
  /** insert a single row into the table: "slideshare.Room" */
  insert_slideshare_Room_one?: Maybe<Slideshare_Room>;
  /** insert data into the table: "slideshare.Slide" */
  insert_slideshare_Slide?: Maybe<Slideshare_Slide_Mutation_Response>;
  /** insert data into the table: "slideshare.SlideRecord" */
  insert_slideshare_SlideRecord?: Maybe<Slideshare_SlideRecord_Mutation_Response>;
  /** insert data into the table: "slideshare.SlideRecordPiece" */
  insert_slideshare_SlideRecordPiece?: Maybe<Slideshare_SlideRecordPiece_Mutation_Response>;
  /** insert a single row into the table: "slideshare.SlideRecordPiece" */
  insert_slideshare_SlideRecordPiece_one?: Maybe<Slideshare_SlideRecordPiece>;
  /** insert a single row into the table: "slideshare.SlideRecord" */
  insert_slideshare_SlideRecord_one?: Maybe<Slideshare_SlideRecord>;
  /** insert a single row into the table: "slideshare.Slide" */
  insert_slideshare_Slide_one?: Maybe<Slideshare_Slide>;
  subscribe?: Maybe<Message>;
  /** update data of the table: "Note" */
  update_Note?: Maybe<Note_Mutation_Response>;
  /** update single row of the table: "Note" */
  update_Note_by_pk?: Maybe<Note>;
  /** update data of the table: "englister.MyNote" */
  update_englister_MyNote?: Maybe<Englister_MyNote_Mutation_Response>;
  /** update single row of the table: "englister.MyNote" */
  update_englister_MyNote_by_pk?: Maybe<Englister_MyNote>;
  /** update data of the table: "englister.Phrase" */
  update_englister_Phrase?: Maybe<Englister_Phrase_Mutation_Response>;
  /** update single row of the table: "englister.Phrase" */
  update_englister_Phrase_by_pk?: Maybe<Englister_Phrase>;
  /** update data of the table: "englister.WordleRoom" */
  update_englister_WordleRoom?: Maybe<Englister_WordleRoom_Mutation_Response>;
  /** update single row of the table: "englister.WordleRoom" */
  update_englister_WordleRoom_by_pk?: Maybe<Englister_WordleRoom>;
  /** update data of the table: "slideshare.Bookmark" */
  update_slideshare_Bookmark?: Maybe<Slideshare_Bookmark_Mutation_Response>;
  /** update single row of the table: "slideshare.Bookmark" */
  update_slideshare_Bookmark_by_pk?: Maybe<Slideshare_Bookmark>;
  /** update data of the table: "slideshare.Conference" */
  update_slideshare_Conference?: Maybe<Slideshare_Conference_Mutation_Response>;
  /** update single row of the table: "slideshare.Conference" */
  update_slideshare_Conference_by_pk?: Maybe<Slideshare_Conference>;
  /** update data of the table: "slideshare.Page" */
  update_slideshare_Page?: Maybe<Slideshare_Page_Mutation_Response>;
  /** update single row of the table: "slideshare.Page" */
  update_slideshare_Page_by_pk?: Maybe<Slideshare_Page>;
  /** update data of the table: "slideshare.Poll" */
  update_slideshare_Poll?: Maybe<Slideshare_Poll_Mutation_Response>;
  /** update data of the table: "slideshare.PollResult" */
  update_slideshare_PollResult?: Maybe<Slideshare_PollResult_Mutation_Response>;
  /** update single row of the table: "slideshare.PollResult" */
  update_slideshare_PollResult_by_pk?: Maybe<Slideshare_PollResult>;
  /** update single row of the table: "slideshare.Poll" */
  update_slideshare_Poll_by_pk?: Maybe<Slideshare_Poll>;
  /** update data of the table: "slideshare.Profile" */
  update_slideshare_Profile?: Maybe<Slideshare_Profile_Mutation_Response>;
  /** update single row of the table: "slideshare.Profile" */
  update_slideshare_Profile_by_pk?: Maybe<Slideshare_Profile>;
  /** update data of the table: "slideshare.Room" */
  update_slideshare_Room?: Maybe<Slideshare_Room_Mutation_Response>;
  /** update data of the table: "slideshare.RoomParticipant" */
  update_slideshare_RoomParticipant?: Maybe<Slideshare_RoomParticipant_Mutation_Response>;
  /** update single row of the table: "slideshare.RoomParticipant" */
  update_slideshare_RoomParticipant_by_pk?: Maybe<Slideshare_RoomParticipant>;
  /** update single row of the table: "slideshare.Room" */
  update_slideshare_Room_by_pk?: Maybe<Slideshare_Room>;
  /** update data of the table: "slideshare.Slide" */
  update_slideshare_Slide?: Maybe<Slideshare_Slide_Mutation_Response>;
  /** update data of the table: "slideshare.SlideRecord" */
  update_slideshare_SlideRecord?: Maybe<Slideshare_SlideRecord_Mutation_Response>;
  /** update single row of the table: "slideshare.SlideRecord" */
  update_slideshare_SlideRecord_by_pk?: Maybe<Slideshare_SlideRecord>;
  /** update single row of the table: "slideshare.Slide" */
  update_slideshare_Slide_by_pk?: Maybe<Slideshare_Slide>;
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
export type Mutation_RootDelete_NoteArgs = {
  where: Note_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Note_By_PkArgs = {
  Id: Scalars['Int'];
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
export type Mutation_RootDelete_Englister_PublicAnswersArgs = {
  where: Englister_PublicAnswers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Englister_PublicAnswers_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Englister_WordleRoomArgs = {
  where: Englister_WordleRoom_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Englister_WordleRoom_By_PkArgs = {
  slug: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_BookmarkArgs = {
  where: Slideshare_Bookmark_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_Bookmark_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_CommentArgs = {
  where: Slideshare_Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_Comment_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_ConferenceArgs = {
  where: Slideshare_Conference_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_Conference_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_FileArgs = {
  where: Slideshare_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_File_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_FollowerArgs = {
  where: Slideshare_Follower_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_Follower_By_PkArgs = {
  follow_user_id: Scalars['String'];
  follower_user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_PageArgs = {
  where: Slideshare_Page_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_Page_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_PollArgs = {
  where: Slideshare_Poll_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_Poll_By_PkArgs = {
  pageId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_RoomArgs = {
  where: Slideshare_Room_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_RoomParticipantArgs = {
  where: Slideshare_RoomParticipant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_RoomParticipant_By_PkArgs = {
  userId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_Room_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_SlideArgs = {
  where: Slideshare_Slide_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_SlideRecordArgs = {
  where: Slideshare_SlideRecord_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_SlideRecord_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_Slide_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_NoteArgs = {
  objects: Array<Note_Insert_Input>;
  on_conflict?: InputMaybe<Note_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Note_OneArgs = {
  object: Note_Insert_Input;
  on_conflict?: InputMaybe<Note_On_Conflict>;
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
export type Mutation_RootInsert_Englister_PublicAnswersArgs = {
  objects: Array<Englister_PublicAnswers_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Englister_PublicAnswers_OneArgs = {
  object: Englister_PublicAnswers_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Englister_WordleRecordArgs = {
  objects: Array<Englister_WordleRecord_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Englister_WordleRecord_OneArgs = {
  object: Englister_WordleRecord_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Englister_WordleRoomArgs = {
  objects: Array<Englister_WordleRoom_Insert_Input>;
  on_conflict?: InputMaybe<Englister_WordleRoom_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Englister_WordleRoom_OneArgs = {
  object: Englister_WordleRoom_Insert_Input;
  on_conflict?: InputMaybe<Englister_WordleRoom_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Englister_WordleSkippedWordsArgs = {
  objects: Array<Englister_WordleSkippedWords_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Englister_WordleSkippedWords_OneArgs = {
  object: Englister_WordleSkippedWords_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_BookmarkArgs = {
  objects: Array<Slideshare_Bookmark_Insert_Input>;
  on_conflict?: InputMaybe<Slideshare_Bookmark_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Bookmark_OneArgs = {
  object: Slideshare_Bookmark_Insert_Input;
  on_conflict?: InputMaybe<Slideshare_Bookmark_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_CommentArgs = {
  objects: Array<Slideshare_Comment_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Comment_OneArgs = {
  object: Slideshare_Comment_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_ConferenceArgs = {
  objects: Array<Slideshare_Conference_Insert_Input>;
  on_conflict?: InputMaybe<Slideshare_Conference_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_ConferenceSubscriberArgs = {
  objects: Array<Slideshare_ConferenceSubscriber_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_ConferenceSubscriber_OneArgs = {
  object: Slideshare_ConferenceSubscriber_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Conference_OneArgs = {
  object: Slideshare_Conference_Insert_Input;
  on_conflict?: InputMaybe<Slideshare_Conference_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_FileArgs = {
  objects: Array<Slideshare_File_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_File_OneArgs = {
  object: Slideshare_File_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_FollowerArgs = {
  objects: Array<Slideshare_Follower_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Follower_OneArgs = {
  object: Slideshare_Follower_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_PageArgs = {
  objects: Array<Slideshare_Page_Insert_Input>;
  on_conflict?: InputMaybe<Slideshare_Page_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Page_OneArgs = {
  object: Slideshare_Page_Insert_Input;
  on_conflict?: InputMaybe<Slideshare_Page_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_PollArgs = {
  objects: Array<Slideshare_Poll_Insert_Input>;
  on_conflict?: InputMaybe<Slideshare_Poll_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_PollResultArgs = {
  objects: Array<Slideshare_PollResult_Insert_Input>;
  on_conflict?: InputMaybe<Slideshare_PollResult_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_PollResult_OneArgs = {
  object: Slideshare_PollResult_Insert_Input;
  on_conflict?: InputMaybe<Slideshare_PollResult_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Poll_OneArgs = {
  object: Slideshare_Poll_Insert_Input;
  on_conflict?: InputMaybe<Slideshare_Poll_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_ProfileArgs = {
  objects: Array<Slideshare_Profile_Insert_Input>;
  on_conflict?: InputMaybe<Slideshare_Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Profile_OneArgs = {
  object: Slideshare_Profile_Insert_Input;
  on_conflict?: InputMaybe<Slideshare_Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_RoomArgs = {
  objects: Array<Slideshare_Room_Insert_Input>;
  on_conflict?: InputMaybe<Slideshare_Room_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_RoomParticipantArgs = {
  objects: Array<Slideshare_RoomParticipant_Insert_Input>;
  on_conflict?: InputMaybe<Slideshare_RoomParticipant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_RoomParticipant_OneArgs = {
  object: Slideshare_RoomParticipant_Insert_Input;
  on_conflict?: InputMaybe<Slideshare_RoomParticipant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Room_OneArgs = {
  object: Slideshare_Room_Insert_Input;
  on_conflict?: InputMaybe<Slideshare_Room_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_SlideArgs = {
  objects: Array<Slideshare_Slide_Insert_Input>;
  on_conflict?: InputMaybe<Slideshare_Slide_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_SlideRecordArgs = {
  objects: Array<Slideshare_SlideRecord_Insert_Input>;
  on_conflict?: InputMaybe<Slideshare_SlideRecord_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_SlideRecordPieceArgs = {
  objects: Array<Slideshare_SlideRecordPiece_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_SlideRecordPiece_OneArgs = {
  object: Slideshare_SlideRecordPiece_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_SlideRecord_OneArgs = {
  object: Slideshare_SlideRecord_Insert_Input;
  on_conflict?: InputMaybe<Slideshare_SlideRecord_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Slide_OneArgs = {
  object: Slideshare_Slide_Insert_Input;
  on_conflict?: InputMaybe<Slideshare_Slide_On_Conflict>;
};


/** mutation root */
export type Mutation_RootSubscribeArgs = {
  conferenceId?: InputMaybe<Scalars['Int']>;
};


/** mutation root */
export type Mutation_RootUpdate_NoteArgs = {
  _inc?: InputMaybe<Note_Inc_Input>;
  _set?: InputMaybe<Note_Set_Input>;
  where: Note_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Note_By_PkArgs = {
  _inc?: InputMaybe<Note_Inc_Input>;
  _set?: InputMaybe<Note_Set_Input>;
  pk_columns: Note_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Englister_MyNoteArgs = {
  _set?: InputMaybe<Englister_MyNote_Set_Input>;
  where: Englister_MyNote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Englister_MyNote_By_PkArgs = {
  _set?: InputMaybe<Englister_MyNote_Set_Input>;
  pk_columns: Englister_MyNote_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Englister_PhraseArgs = {
  _set?: InputMaybe<Englister_Phrase_Set_Input>;
  where: Englister_Phrase_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Englister_Phrase_By_PkArgs = {
  _set?: InputMaybe<Englister_Phrase_Set_Input>;
  pk_columns: Englister_Phrase_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Englister_WordleRoomArgs = {
  _set?: InputMaybe<Englister_WordleRoom_Set_Input>;
  where: Englister_WordleRoom_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Englister_WordleRoom_By_PkArgs = {
  _set?: InputMaybe<Englister_WordleRoom_Set_Input>;
  pk_columns: Englister_WordleRoom_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_BookmarkArgs = {
  _inc?: InputMaybe<Slideshare_Bookmark_Inc_Input>;
  _set?: InputMaybe<Slideshare_Bookmark_Set_Input>;
  where: Slideshare_Bookmark_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_Bookmark_By_PkArgs = {
  _inc?: InputMaybe<Slideshare_Bookmark_Inc_Input>;
  _set?: InputMaybe<Slideshare_Bookmark_Set_Input>;
  pk_columns: Slideshare_Bookmark_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_ConferenceArgs = {
  _inc?: InputMaybe<Slideshare_Conference_Inc_Input>;
  _set?: InputMaybe<Slideshare_Conference_Set_Input>;
  where: Slideshare_Conference_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_Conference_By_PkArgs = {
  _inc?: InputMaybe<Slideshare_Conference_Inc_Input>;
  _set?: InputMaybe<Slideshare_Conference_Set_Input>;
  pk_columns: Slideshare_Conference_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_PageArgs = {
  _inc?: InputMaybe<Slideshare_Page_Inc_Input>;
  _set?: InputMaybe<Slideshare_Page_Set_Input>;
  where: Slideshare_Page_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_Page_By_PkArgs = {
  _inc?: InputMaybe<Slideshare_Page_Inc_Input>;
  _set?: InputMaybe<Slideshare_Page_Set_Input>;
  pk_columns: Slideshare_Page_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_PollArgs = {
  _set?: InputMaybe<Slideshare_Poll_Set_Input>;
  where: Slideshare_Poll_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_PollResultArgs = {
  _inc?: InputMaybe<Slideshare_PollResult_Inc_Input>;
  _set?: InputMaybe<Slideshare_PollResult_Set_Input>;
  where: Slideshare_PollResult_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_PollResult_By_PkArgs = {
  _inc?: InputMaybe<Slideshare_PollResult_Inc_Input>;
  _set?: InputMaybe<Slideshare_PollResult_Set_Input>;
  pk_columns: Slideshare_PollResult_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_Poll_By_PkArgs = {
  _set?: InputMaybe<Slideshare_Poll_Set_Input>;
  pk_columns: Slideshare_Poll_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_ProfileArgs = {
  _set?: InputMaybe<Slideshare_Profile_Set_Input>;
  where: Slideshare_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_Profile_By_PkArgs = {
  _set?: InputMaybe<Slideshare_Profile_Set_Input>;
  pk_columns: Slideshare_Profile_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_RoomArgs = {
  _inc?: InputMaybe<Slideshare_Room_Inc_Input>;
  _set?: InputMaybe<Slideshare_Room_Set_Input>;
  where: Slideshare_Room_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_RoomParticipantArgs = {
  _inc?: InputMaybe<Slideshare_RoomParticipant_Inc_Input>;
  _set?: InputMaybe<Slideshare_RoomParticipant_Set_Input>;
  where: Slideshare_RoomParticipant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_RoomParticipant_By_PkArgs = {
  _inc?: InputMaybe<Slideshare_RoomParticipant_Inc_Input>;
  _set?: InputMaybe<Slideshare_RoomParticipant_Set_Input>;
  pk_columns: Slideshare_RoomParticipant_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_Room_By_PkArgs = {
  _inc?: InputMaybe<Slideshare_Room_Inc_Input>;
  _set?: InputMaybe<Slideshare_Room_Set_Input>;
  pk_columns: Slideshare_Room_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_SlideArgs = {
  _set?: InputMaybe<Slideshare_Slide_Set_Input>;
  where: Slideshare_Slide_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_SlideRecordArgs = {
  _inc?: InputMaybe<Slideshare_SlideRecord_Inc_Input>;
  _set?: InputMaybe<Slideshare_SlideRecord_Set_Input>;
  where: Slideshare_SlideRecord_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_SlideRecord_By_PkArgs = {
  _inc?: InputMaybe<Slideshare_SlideRecord_Inc_Input>;
  _set?: InputMaybe<Slideshare_SlideRecord_Set_Input>;
  pk_columns: Slideshare_SlideRecord_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_Slide_By_PkArgs = {
  _set?: InputMaybe<Slideshare_Slide_Set_Input>;
  pk_columns: Slideshare_Slide_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUploadPdfArgs = {
  pdfName: Scalars['String'];
  slideId: Scalars['Int'];
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
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
  /** fetch data from the table: "Board" */
  Board: Array<Board>;
  /** fetch data from the table: "Board" using primary key columns */
  Board_by_pk?: Maybe<Board>;
  /** fetch data from the table: "Note" */
  Note: Array<Note>;
  /** fetch data from the table: "Note" using primary key columns */
  Note_by_pk?: Maybe<Note>;
  /** fetch data from the table: "englister.MyNote" */
  englister_MyNote: Array<Englister_MyNote>;
  /** fetch data from the table: "englister.MyNote" using primary key columns */
  englister_MyNote_by_pk?: Maybe<Englister_MyNote>;
  /** fetch data from the table: "englister.Phrase" */
  englister_Phrase: Array<Englister_Phrase>;
  /** fetch data from the table: "englister.Phrase" using primary key columns */
  englister_Phrase_by_pk?: Maybe<Englister_Phrase>;
  /** fetch data from the table: "englister.PublicAnswers" */
  englister_PublicAnswers: Array<Englister_PublicAnswers>;
  /** fetch data from the table: "englister.PublicAnswers" using primary key columns */
  englister_PublicAnswers_by_pk?: Maybe<Englister_PublicAnswers>;
  /** fetch data from the table: "englister.WordleRecord" */
  englister_WordleRecord: Array<Englister_WordleRecord>;
  /** fetch aggregated fields from the table: "englister.WordleRecord" */
  englister_WordleRecord_aggregate: Englister_WordleRecord_Aggregate;
  /** fetch data from the table: "englister.WordleRecord" using primary key columns */
  englister_WordleRecord_by_pk?: Maybe<Englister_WordleRecord>;
  /** fetch data from the table: "englister.WordleRoom" */
  englister_WordleRoom: Array<Englister_WordleRoom>;
  /** fetch data from the table: "englister.WordleRoom" using primary key columns */
  englister_WordleRoom_by_pk?: Maybe<Englister_WordleRoom>;
  /** fetch data from the table: "englister.WordleSkippedWords" */
  englister_WordleSkippedWords: Array<Englister_WordleSkippedWords>;
  /** fetch data from the table: "englister.WordleSkippedWords" using primary key columns */
  englister_WordleSkippedWords_by_pk?: Maybe<Englister_WordleSkippedWords>;
  /** fetch data from the table: "slideshare.Bookmark" */
  slideshare_Bookmark: Array<Slideshare_Bookmark>;
  /** fetch data from the table: "slideshare.Bookmark" using primary key columns */
  slideshare_Bookmark_by_pk?: Maybe<Slideshare_Bookmark>;
  /** fetch data from the table: "slideshare.Comment" */
  slideshare_Comment: Array<Slideshare_Comment>;
  /** fetch data from the table: "slideshare.Comment" using primary key columns */
  slideshare_Comment_by_pk?: Maybe<Slideshare_Comment>;
  /** fetch data from the table: "slideshare.Conference" */
  slideshare_Conference: Array<Slideshare_Conference>;
  /** fetch data from the table: "slideshare.ConferenceSubscriber" */
  slideshare_ConferenceSubscriber: Array<Slideshare_ConferenceSubscriber>;
  /** fetch data from the table: "slideshare.ConferenceSubscriber" using primary key columns */
  slideshare_ConferenceSubscriber_by_pk?: Maybe<Slideshare_ConferenceSubscriber>;
  /** fetch data from the table: "slideshare.Conference" using primary key columns */
  slideshare_Conference_by_pk?: Maybe<Slideshare_Conference>;
  /** fetch data from the table: "slideshare.File" */
  slideshare_File: Array<Slideshare_File>;
  /** fetch data from the table: "slideshare.File" using primary key columns */
  slideshare_File_by_pk?: Maybe<Slideshare_File>;
  /** fetch data from the table: "slideshare.Follower" */
  slideshare_Follower: Array<Slideshare_Follower>;
  /** fetch data from the table: "slideshare.Follower" using primary key columns */
  slideshare_Follower_by_pk?: Maybe<Slideshare_Follower>;
  /** fetch data from the table: "slideshare.Page" */
  slideshare_Page: Array<Slideshare_Page>;
  /** fetch data from the table: "slideshare.PageType" */
  slideshare_PageType: Array<Slideshare_PageType>;
  /** fetch data from the table: "slideshare.PageType" using primary key columns */
  slideshare_PageType_by_pk?: Maybe<Slideshare_PageType>;
  /** fetch data from the table: "slideshare.Page" using primary key columns */
  slideshare_Page_by_pk?: Maybe<Slideshare_Page>;
  /** fetch data from the table: "slideshare.Poll" */
  slideshare_Poll: Array<Slideshare_Poll>;
  /** fetch data from the table: "slideshare.PollResult" */
  slideshare_PollResult: Array<Slideshare_PollResult>;
  /** fetch data from the table: "slideshare.PollResult" using primary key columns */
  slideshare_PollResult_by_pk?: Maybe<Slideshare_PollResult>;
  /** fetch data from the table: "slideshare.Poll" using primary key columns */
  slideshare_Poll_by_pk?: Maybe<Slideshare_Poll>;
  /** fetch data from the table: "slideshare.Profile" */
  slideshare_Profile: Array<Slideshare_Profile>;
  /** fetch data from the table: "slideshare.Profile" using primary key columns */
  slideshare_Profile_by_pk?: Maybe<Slideshare_Profile>;
  /** fetch data from the table: "slideshare.Room" */
  slideshare_Room: Array<Slideshare_Room>;
  /** fetch data from the table: "slideshare.RoomParticipant" */
  slideshare_RoomParticipant: Array<Slideshare_RoomParticipant>;
  /** fetch data from the table: "slideshare.RoomParticipant" using primary key columns */
  slideshare_RoomParticipant_by_pk?: Maybe<Slideshare_RoomParticipant>;
  /** fetch data from the table: "slideshare.Room" using primary key columns */
  slideshare_Room_by_pk?: Maybe<Slideshare_Room>;
  /** fetch data from the table: "slideshare.Slide" */
  slideshare_Slide: Array<Slideshare_Slide>;
  /** fetch data from the table: "slideshare.SlideRecord" */
  slideshare_SlideRecord: Array<Slideshare_SlideRecord>;
  /** fetch data from the table: "slideshare.SlideRecordPiece" */
  slideshare_SlideRecordPiece: Array<Slideshare_SlideRecordPiece>;
  /** fetch data from the table: "slideshare.SlideRecordPiece" using primary key columns */
  slideshare_SlideRecordPiece_by_pk?: Maybe<Slideshare_SlideRecordPiece>;
  /** fetch data from the table: "slideshare.SlideRecord" using primary key columns */
  slideshare_SlideRecord_by_pk?: Maybe<Slideshare_SlideRecord>;
  /** fetch data from the table: "slideshare.Slide" using primary key columns */
  slideshare_Slide_by_pk?: Maybe<Slideshare_Slide>;
};


export type Query_RootBoardArgs = {
  distinct_on?: InputMaybe<Array<Board_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Board_Order_By>>;
  where?: InputMaybe<Board_Bool_Exp>;
};


export type Query_RootBoard_By_PkArgs = {
  Id: Scalars['Int'];
};


export type Query_RootNoteArgs = {
  distinct_on?: InputMaybe<Array<Note_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Note_Order_By>>;
  where?: InputMaybe<Note_Bool_Exp>;
};


export type Query_RootNote_By_PkArgs = {
  Id: Scalars['Int'];
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


export type Query_RootEnglister_WordleRecordArgs = {
  distinct_on?: InputMaybe<Array<Englister_WordleRecord_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_WordleRecord_Order_By>>;
  where?: InputMaybe<Englister_WordleRecord_Bool_Exp>;
};


export type Query_RootEnglister_WordleRecord_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Englister_WordleRecord_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_WordleRecord_Order_By>>;
  where?: InputMaybe<Englister_WordleRecord_Bool_Exp>;
};


export type Query_RootEnglister_WordleRecord_By_PkArgs = {
  roomSlug: Scalars['String'];
  userId: Scalars['String'];
};


export type Query_RootEnglister_WordleRoomArgs = {
  distinct_on?: InputMaybe<Array<Englister_WordleRoom_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_WordleRoom_Order_By>>;
  where?: InputMaybe<Englister_WordleRoom_Bool_Exp>;
};


export type Query_RootEnglister_WordleRoom_By_PkArgs = {
  slug: Scalars['String'];
};


export type Query_RootEnglister_WordleSkippedWordsArgs = {
  distinct_on?: InputMaybe<Array<Englister_WordleSkippedWords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_WordleSkippedWords_Order_By>>;
  where?: InputMaybe<Englister_WordleSkippedWords_Bool_Exp>;
};


export type Query_RootEnglister_WordleSkippedWords_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSlideshare_BookmarkArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Bookmark_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Bookmark_Order_By>>;
  where?: InputMaybe<Slideshare_Bookmark_Bool_Exp>;
};


export type Query_RootSlideshare_Bookmark_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSlideshare_CommentArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Comment_Order_By>>;
  where?: InputMaybe<Slideshare_Comment_Bool_Exp>;
};


export type Query_RootSlideshare_Comment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSlideshare_ConferenceArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Conference_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Conference_Order_By>>;
  where?: InputMaybe<Slideshare_Conference_Bool_Exp>;
};


export type Query_RootSlideshare_ConferenceSubscriberArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_ConferenceSubscriber_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_ConferenceSubscriber_Order_By>>;
  where?: InputMaybe<Slideshare_ConferenceSubscriber_Bool_Exp>;
};


export type Query_RootSlideshare_ConferenceSubscriber_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSlideshare_Conference_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSlideshare_FileArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_File_Order_By>>;
  where?: InputMaybe<Slideshare_File_Bool_Exp>;
};


export type Query_RootSlideshare_File_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSlideshare_FollowerArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Follower_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Follower_Order_By>>;
  where?: InputMaybe<Slideshare_Follower_Bool_Exp>;
};


export type Query_RootSlideshare_Follower_By_PkArgs = {
  follow_user_id: Scalars['String'];
  follower_user_id: Scalars['String'];
};


export type Query_RootSlideshare_PageArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Page_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Page_Order_By>>;
  where?: InputMaybe<Slideshare_Page_Bool_Exp>;
};


export type Query_RootSlideshare_PageTypeArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_PageType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_PageType_Order_By>>;
  where?: InputMaybe<Slideshare_PageType_Bool_Exp>;
};


export type Query_RootSlideshare_PageType_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootSlideshare_Page_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootSlideshare_PollArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Poll_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Poll_Order_By>>;
  where?: InputMaybe<Slideshare_Poll_Bool_Exp>;
};


export type Query_RootSlideshare_PollResultArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_PollResult_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_PollResult_Order_By>>;
  where?: InputMaybe<Slideshare_PollResult_Bool_Exp>;
};


export type Query_RootSlideshare_PollResult_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSlideshare_Poll_By_PkArgs = {
  pageId: Scalars['String'];
};


export type Query_RootSlideshare_ProfileArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Profile_Order_By>>;
  where?: InputMaybe<Slideshare_Profile_Bool_Exp>;
};


export type Query_RootSlideshare_Profile_By_PkArgs = {
  userId: Scalars['String'];
};


export type Query_RootSlideshare_RoomArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Room_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Room_Order_By>>;
  where?: InputMaybe<Slideshare_Room_Bool_Exp>;
};


export type Query_RootSlideshare_RoomParticipantArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_RoomParticipant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_RoomParticipant_Order_By>>;
  where?: InputMaybe<Slideshare_RoomParticipant_Bool_Exp>;
};


export type Query_RootSlideshare_RoomParticipant_By_PkArgs = {
  userId: Scalars['String'];
};


export type Query_RootSlideshare_Room_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSlideshare_SlideArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Slide_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Slide_Order_By>>;
  where?: InputMaybe<Slideshare_Slide_Bool_Exp>;
};


export type Query_RootSlideshare_SlideRecordArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_SlideRecord_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_SlideRecord_Order_By>>;
  where?: InputMaybe<Slideshare_SlideRecord_Bool_Exp>;
};


export type Query_RootSlideshare_SlideRecordPieceArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_SlideRecordPiece_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_SlideRecordPiece_Order_By>>;
  where?: InputMaybe<Slideshare_SlideRecordPiece_Bool_Exp>;
};


export type Query_RootSlideshare_SlideRecordPiece_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSlideshare_SlideRecord_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSlideshare_Slide_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "slideshare.Bookmark" */
export type Slideshare_Bookmark = {
  __typename?: 'slideshare_Bookmark';
  id: Scalars['Int'];
  pageId: Scalars['String'];
  url: Scalars['String'];
};

/** order by aggregate values of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Aggregate_Order_By = {
  avg?: InputMaybe<Slideshare_Bookmark_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Slideshare_Bookmark_Max_Order_By>;
  min?: InputMaybe<Slideshare_Bookmark_Min_Order_By>;
  stddev?: InputMaybe<Slideshare_Bookmark_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Slideshare_Bookmark_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Slideshare_Bookmark_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Slideshare_Bookmark_Sum_Order_By>;
  var_pop?: InputMaybe<Slideshare_Bookmark_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Slideshare_Bookmark_Var_Samp_Order_By>;
  variance?: InputMaybe<Slideshare_Bookmark_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Arr_Rel_Insert_Input = {
  data: Array<Slideshare_Bookmark_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Slideshare_Bookmark_On_Conflict>;
};

/** order by avg() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.Bookmark". All fields are combined with a logical 'AND'. */
export type Slideshare_Bookmark_Bool_Exp = {
  _and?: InputMaybe<Array<Slideshare_Bookmark_Bool_Exp>>;
  _not?: InputMaybe<Slideshare_Bookmark_Bool_Exp>;
  _or?: InputMaybe<Array<Slideshare_Bookmark_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  pageId?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.Bookmark" */
export enum Slideshare_Bookmark_Constraint {
  /** unique or primary key constraint */
  BookmarkPkey = 'Bookmark_pkey'
}

/** input type for incrementing numeric columns in table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  pageId?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** order by max() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Mutation_Response = {
  __typename?: 'slideshare_Bookmark_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Bookmark>;
};

/** on_conflict condition type for table "slideshare.Bookmark" */
export type Slideshare_Bookmark_On_Conflict = {
  constraint: Slideshare_Bookmark_Constraint;
  update_columns?: Array<Slideshare_Bookmark_Update_Column>;
  where?: InputMaybe<Slideshare_Bookmark_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.Bookmark". */
export type Slideshare_Bookmark_Order_By = {
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: slideshare_Bookmark */
export type Slideshare_Bookmark_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "slideshare.Bookmark" */
export enum Slideshare_Bookmark_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PageId = 'pageId',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  pageId?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** order by stddev() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "slideshare.Bookmark" */
export enum Slideshare_Bookmark_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PageId = 'pageId',
  /** column name */
  Url = 'url'
}

/** order by var_pop() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "slideshare.Comment" */
export type Slideshare_Comment = {
  __typename?: 'slideshare_Comment';
  /** An object relationship */
  Page: Slideshare_Page;
  /** An object relationship */
  Profile?: Maybe<Slideshare_Profile>;
  /** An object relationship */
  Slide: Slideshare_Slide;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy: Scalars['String'];
  id: Scalars['Int'];
  pageId: Scalars['String'];
  slideId: Scalars['Int'];
  text: Scalars['String'];
};

/** order by aggregate values of table "slideshare.Comment" */
export type Slideshare_Comment_Aggregate_Order_By = {
  avg?: InputMaybe<Slideshare_Comment_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Slideshare_Comment_Max_Order_By>;
  min?: InputMaybe<Slideshare_Comment_Min_Order_By>;
  stddev?: InputMaybe<Slideshare_Comment_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Slideshare_Comment_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Slideshare_Comment_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Slideshare_Comment_Sum_Order_By>;
  var_pop?: InputMaybe<Slideshare_Comment_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Slideshare_Comment_Var_Samp_Order_By>;
  variance?: InputMaybe<Slideshare_Comment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "slideshare.Comment" */
export type Slideshare_Comment_Arr_Rel_Insert_Input = {
  data: Array<Slideshare_Comment_Insert_Input>;
};

/** order by avg() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.Comment". All fields are combined with a logical 'AND'. */
export type Slideshare_Comment_Bool_Exp = {
  Page?: InputMaybe<Slideshare_Page_Bool_Exp>;
  Profile?: InputMaybe<Slideshare_Profile_Bool_Exp>;
  Slide?: InputMaybe<Slideshare_Slide_Bool_Exp>;
  _and?: InputMaybe<Array<Slideshare_Comment_Bool_Exp>>;
  _not?: InputMaybe<Slideshare_Comment_Bool_Exp>;
  _or?: InputMaybe<Array<Slideshare_Comment_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  createdBy?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  pageId?: InputMaybe<String_Comparison_Exp>;
  slideId?: InputMaybe<Int_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "slideshare.Comment" */
export type Slideshare_Comment_Insert_Input = {
  Page?: InputMaybe<Slideshare_Page_Obj_Rel_Insert_Input>;
  Profile?: InputMaybe<Slideshare_Profile_Obj_Rel_Insert_Input>;
  Slide?: InputMaybe<Slideshare_Slide_Obj_Rel_Insert_Input>;
  pageId?: InputMaybe<Scalars['String']>;
  slideId?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
};

/** order by max() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "slideshare.Comment" */
export type Slideshare_Comment_Mutation_Response = {
  __typename?: 'slideshare_Comment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Comment>;
};

/** Ordering options when selecting data from "slideshare.Comment". */
export type Slideshare_Comment_Order_By = {
  Page?: InputMaybe<Slideshare_Page_Order_By>;
  Profile?: InputMaybe<Slideshare_Profile_Order_By>;
  Slide?: InputMaybe<Slideshare_Slide_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** select columns of table "slideshare.Comment" */
export enum Slideshare_Comment_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  PageId = 'pageId',
  /** column name */
  SlideId = 'slideId',
  /** column name */
  Text = 'text'
}

/** order by stddev() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** columns and relationships of "slideshare.Conference" */
export type Slideshare_Conference = {
  __typename?: 'slideshare_Conference';
  /** An object relationship */
  Slide: Slideshare_Slide;
  createdAt: Scalars['timestamptz'];
  createdBy: Scalars['String'];
  endDate: Scalars['numeric'];
  id: Scalars['Int'];
  slideId: Scalars['Int'];
  startDate: Scalars['numeric'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};

/** columns and relationships of "slideshare.ConferenceSubscriber" */
export type Slideshare_ConferenceSubscriber = {
  __typename?: 'slideshare_ConferenceSubscriber';
  /** An object relationship */
  Conference: Slideshare_Conference;
  conferenceId: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
  userId: Scalars['String'];
};

/** Boolean expression to filter rows from the table "slideshare.ConferenceSubscriber". All fields are combined with a logical 'AND'. */
export type Slideshare_ConferenceSubscriber_Bool_Exp = {
  Conference?: InputMaybe<Slideshare_Conference_Bool_Exp>;
  _and?: InputMaybe<Array<Slideshare_ConferenceSubscriber_Bool_Exp>>;
  _not?: InputMaybe<Slideshare_ConferenceSubscriber_Bool_Exp>;
  _or?: InputMaybe<Array<Slideshare_ConferenceSubscriber_Bool_Exp>>;
  conferenceId?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "slideshare.ConferenceSubscriber" */
export type Slideshare_ConferenceSubscriber_Insert_Input = {
  Conference?: InputMaybe<Slideshare_Conference_Obj_Rel_Insert_Input>;
  conferenceId?: InputMaybe<Scalars['Int']>;
};

/** response of any mutation on the table "slideshare.ConferenceSubscriber" */
export type Slideshare_ConferenceSubscriber_Mutation_Response = {
  __typename?: 'slideshare_ConferenceSubscriber_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_ConferenceSubscriber>;
};

/** Ordering options when selecting data from "slideshare.ConferenceSubscriber". */
export type Slideshare_ConferenceSubscriber_Order_By = {
  Conference?: InputMaybe<Slideshare_Conference_Order_By>;
  conferenceId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** select columns of table "slideshare.ConferenceSubscriber" */
export enum Slideshare_ConferenceSubscriber_Select_Column {
  /** column name */
  ConferenceId = 'conferenceId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** Boolean expression to filter rows from the table "slideshare.Conference". All fields are combined with a logical 'AND'. */
export type Slideshare_Conference_Bool_Exp = {
  Slide?: InputMaybe<Slideshare_Slide_Bool_Exp>;
  _and?: InputMaybe<Array<Slideshare_Conference_Bool_Exp>>;
  _not?: InputMaybe<Slideshare_Conference_Bool_Exp>;
  _or?: InputMaybe<Array<Slideshare_Conference_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  createdBy?: InputMaybe<String_Comparison_Exp>;
  endDate?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  slideId?: InputMaybe<Int_Comparison_Exp>;
  startDate?: InputMaybe<Numeric_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.Conference" */
export enum Slideshare_Conference_Constraint {
  /** unique or primary key constraint */
  ConferencePkey = 'Conference_pkey'
}

/** input type for incrementing numeric columns in table "slideshare.Conference" */
export type Slideshare_Conference_Inc_Input = {
  endDate?: InputMaybe<Scalars['numeric']>;
  startDate?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "slideshare.Conference" */
export type Slideshare_Conference_Insert_Input = {
  Slide?: InputMaybe<Slideshare_Slide_Obj_Rel_Insert_Input>;
  endDate?: InputMaybe<Scalars['numeric']>;
  slideId?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['numeric']>;
  title?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "slideshare.Conference" */
export type Slideshare_Conference_Mutation_Response = {
  __typename?: 'slideshare_Conference_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Conference>;
};

/** input type for inserting object relation for remote table "slideshare.Conference" */
export type Slideshare_Conference_Obj_Rel_Insert_Input = {
  data: Slideshare_Conference_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Slideshare_Conference_On_Conflict>;
};

/** on_conflict condition type for table "slideshare.Conference" */
export type Slideshare_Conference_On_Conflict = {
  constraint: Slideshare_Conference_Constraint;
  update_columns?: Array<Slideshare_Conference_Update_Column>;
  where?: InputMaybe<Slideshare_Conference_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.Conference". */
export type Slideshare_Conference_Order_By = {
  Slide?: InputMaybe<Slideshare_Slide_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  endDate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
  startDate?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: slideshare_Conference */
export type Slideshare_Conference_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "slideshare.Conference" */
export enum Slideshare_Conference_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  EndDate = 'endDate',
  /** column name */
  Id = 'id',
  /** column name */
  SlideId = 'slideId',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "slideshare.Conference" */
export type Slideshare_Conference_Set_Input = {
  endDate?: InputMaybe<Scalars['numeric']>;
  startDate?: InputMaybe<Scalars['numeric']>;
  title?: InputMaybe<Scalars['String']>;
};

/** update columns of table "slideshare.Conference" */
export enum Slideshare_Conference_Update_Column {
  /** column name */
  EndDate = 'endDate',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  Title = 'title'
}

/** columns and relationships of "slideshare.File" */
export type Slideshare_File = {
  __typename?: 'slideshare_File';
  createdBy: Scalars['String'];
  filename: Scalars['String'];
  id: Scalars['Int'];
  pageId: Scalars['String'];
  path: Scalars['String'];
};

/** order by aggregate values of table "slideshare.File" */
export type Slideshare_File_Aggregate_Order_By = {
  avg?: InputMaybe<Slideshare_File_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Slideshare_File_Max_Order_By>;
  min?: InputMaybe<Slideshare_File_Min_Order_By>;
  stddev?: InputMaybe<Slideshare_File_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Slideshare_File_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Slideshare_File_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Slideshare_File_Sum_Order_By>;
  var_pop?: InputMaybe<Slideshare_File_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Slideshare_File_Var_Samp_Order_By>;
  variance?: InputMaybe<Slideshare_File_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "slideshare.File" */
export type Slideshare_File_Arr_Rel_Insert_Input = {
  data: Array<Slideshare_File_Insert_Input>;
};

/** order by avg() on columns of table "slideshare.File" */
export type Slideshare_File_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.File". All fields are combined with a logical 'AND'. */
export type Slideshare_File_Bool_Exp = {
  _and?: InputMaybe<Array<Slideshare_File_Bool_Exp>>;
  _not?: InputMaybe<Slideshare_File_Bool_Exp>;
  _or?: InputMaybe<Array<Slideshare_File_Bool_Exp>>;
  createdBy?: InputMaybe<String_Comparison_Exp>;
  filename?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  pageId?: InputMaybe<String_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "slideshare.File" */
export type Slideshare_File_Insert_Input = {
  filename?: InputMaybe<Scalars['String']>;
  pageId?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
};

/** order by max() on columns of table "slideshare.File" */
export type Slideshare_File_Max_Order_By = {
  createdBy?: InputMaybe<Order_By>;
  filename?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "slideshare.File" */
export type Slideshare_File_Min_Order_By = {
  createdBy?: InputMaybe<Order_By>;
  filename?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "slideshare.File" */
export type Slideshare_File_Mutation_Response = {
  __typename?: 'slideshare_File_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_File>;
};

/** Ordering options when selecting data from "slideshare.File". */
export type Slideshare_File_Order_By = {
  createdBy?: InputMaybe<Order_By>;
  filename?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
};

/** select columns of table "slideshare.File" */
export enum Slideshare_File_Select_Column {
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Filename = 'filename',
  /** column name */
  Id = 'id',
  /** column name */
  PageId = 'pageId',
  /** column name */
  Path = 'path'
}

/** order by stddev() on columns of table "slideshare.File" */
export type Slideshare_File_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "slideshare.File" */
export type Slideshare_File_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "slideshare.File" */
export type Slideshare_File_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "slideshare.File" */
export type Slideshare_File_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "slideshare.File" */
export type Slideshare_File_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "slideshare.File" */
export type Slideshare_File_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "slideshare.File" */
export type Slideshare_File_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "slideshare.Follower" */
export type Slideshare_Follower = {
  __typename?: 'slideshare_Follower';
  follow_user_id: Scalars['String'];
  follower_user_id: Scalars['String'];
};

/** Boolean expression to filter rows from the table "slideshare.Follower". All fields are combined with a logical 'AND'. */
export type Slideshare_Follower_Bool_Exp = {
  _and?: InputMaybe<Array<Slideshare_Follower_Bool_Exp>>;
  _not?: InputMaybe<Slideshare_Follower_Bool_Exp>;
  _or?: InputMaybe<Array<Slideshare_Follower_Bool_Exp>>;
  follow_user_id?: InputMaybe<String_Comparison_Exp>;
  follower_user_id?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "slideshare.Follower" */
export type Slideshare_Follower_Insert_Input = {
  follow_user_id?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "slideshare.Follower" */
export type Slideshare_Follower_Mutation_Response = {
  __typename?: 'slideshare_Follower_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Follower>;
};

/** Ordering options when selecting data from "slideshare.Follower". */
export type Slideshare_Follower_Order_By = {
  follow_user_id?: InputMaybe<Order_By>;
  follower_user_id?: InputMaybe<Order_By>;
};

/** select columns of table "slideshare.Follower" */
export enum Slideshare_Follower_Select_Column {
  /** column name */
  FollowUserId = 'follow_user_id',
  /** column name */
  FollowerUserId = 'follower_user_id'
}

/** columns and relationships of "slideshare.Page" */
export type Slideshare_Page = {
  __typename?: 'slideshare_Page';
  /** An array relationship */
  Bookmarks: Array<Slideshare_Bookmark>;
  /** An array relationship */
  Comments: Array<Slideshare_Comment>;
  /** An array relationship */
  Files: Array<Slideshare_File>;
  /** An object relationship */
  PageType: Slideshare_PageType;
  /** An object relationship */
  Poll?: Maybe<Slideshare_Poll>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy: Scalars['String'];
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  isVisible: Scalars['Boolean'];
  pageNumber: Scalars['Int'];
  slideId: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: Slideshare_PageType_Enum;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  videoUrl?: Maybe<Scalars['String']>;
};


/** columns and relationships of "slideshare.Page" */
export type Slideshare_PageBookmarksArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Bookmark_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Bookmark_Order_By>>;
  where?: InputMaybe<Slideshare_Bookmark_Bool_Exp>;
};


/** columns and relationships of "slideshare.Page" */
export type Slideshare_PageCommentsArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Comment_Order_By>>;
  where?: InputMaybe<Slideshare_Comment_Bool_Exp>;
};


/** columns and relationships of "slideshare.Page" */
export type Slideshare_PageFilesArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_File_Order_By>>;
  where?: InputMaybe<Slideshare_File_Bool_Exp>;
};

/** columns and relationships of "slideshare.PageType" */
export type Slideshare_PageType = {
  __typename?: 'slideshare_PageType';
  comment?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** Boolean expression to filter rows from the table "slideshare.PageType". All fields are combined with a logical 'AND'. */
export type Slideshare_PageType_Bool_Exp = {
  _and?: InputMaybe<Array<Slideshare_PageType_Bool_Exp>>;
  _not?: InputMaybe<Slideshare_PageType_Bool_Exp>;
  _or?: InputMaybe<Array<Slideshare_PageType_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

export enum Slideshare_PageType_Enum {
  FreeImage = 'FreeImage',
  GoogleForm = 'GoogleForm',
  Bookmark = 'bookmark',
  Codepen = 'codepen',
  File = 'file',
  Image = 'image',
  Notion = 'notion',
  Poll = 'poll',
  Temp = 'temp',
  Text = 'text',
  Typeform = 'typeform',
  Video = 'video'
}

/** Boolean expression to compare columns of type "slideshare_PageType_enum". All fields are combined with logical 'AND'. */
export type Slideshare_PageType_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Slideshare_PageType_Enum>;
  _in?: InputMaybe<Array<Slideshare_PageType_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Slideshare_PageType_Enum>;
  _nin?: InputMaybe<Array<Slideshare_PageType_Enum>>;
};

/** Ordering options when selecting data from "slideshare.PageType". */
export type Slideshare_PageType_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "slideshare.PageType" */
export enum Slideshare_PageType_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** order by aggregate values of table "slideshare.Page" */
export type Slideshare_Page_Aggregate_Order_By = {
  avg?: InputMaybe<Slideshare_Page_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Slideshare_Page_Max_Order_By>;
  min?: InputMaybe<Slideshare_Page_Min_Order_By>;
  stddev?: InputMaybe<Slideshare_Page_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Slideshare_Page_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Slideshare_Page_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Slideshare_Page_Sum_Order_By>;
  var_pop?: InputMaybe<Slideshare_Page_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Slideshare_Page_Var_Samp_Order_By>;
  variance?: InputMaybe<Slideshare_Page_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "slideshare.Page" */
export type Slideshare_Page_Arr_Rel_Insert_Input = {
  data: Array<Slideshare_Page_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Slideshare_Page_On_Conflict>;
};

/** order by avg() on columns of table "slideshare.Page" */
export type Slideshare_Page_Avg_Order_By = {
  pageNumber?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.Page". All fields are combined with a logical 'AND'. */
export type Slideshare_Page_Bool_Exp = {
  Bookmarks?: InputMaybe<Slideshare_Bookmark_Bool_Exp>;
  Comments?: InputMaybe<Slideshare_Comment_Bool_Exp>;
  Files?: InputMaybe<Slideshare_File_Bool_Exp>;
  PageType?: InputMaybe<Slideshare_PageType_Bool_Exp>;
  Poll?: InputMaybe<Slideshare_Poll_Bool_Exp>;
  _and?: InputMaybe<Array<Slideshare_Page_Bool_Exp>>;
  _not?: InputMaybe<Slideshare_Page_Bool_Exp>;
  _or?: InputMaybe<Array<Slideshare_Page_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  createdBy?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  imageUrl?: InputMaybe<String_Comparison_Exp>;
  isVisible?: InputMaybe<Boolean_Comparison_Exp>;
  pageNumber?: InputMaybe<Int_Comparison_Exp>;
  slideId?: InputMaybe<Int_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Slideshare_PageType_Enum_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  videoUrl?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.Page" */
export enum Slideshare_Page_Constraint {
  /** unique or primary key constraint */
  PagePkey = 'Page_pkey'
}

/** input type for incrementing numeric columns in table "slideshare.Page" */
export type Slideshare_Page_Inc_Input = {
  pageNumber?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "slideshare.Page" */
export type Slideshare_Page_Insert_Input = {
  Bookmarks?: InputMaybe<Slideshare_Bookmark_Arr_Rel_Insert_Input>;
  Comments?: InputMaybe<Slideshare_Comment_Arr_Rel_Insert_Input>;
  Files?: InputMaybe<Slideshare_File_Arr_Rel_Insert_Input>;
  Poll?: InputMaybe<Slideshare_Poll_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  isVisible?: InputMaybe<Scalars['Boolean']>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  slideId?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Slideshare_PageType_Enum>;
  videoUrl?: InputMaybe<Scalars['String']>;
};

/** order by max() on columns of table "slideshare.Page" */
export type Slideshare_Page_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageUrl?: InputMaybe<Order_By>;
  pageNumber?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  videoUrl?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "slideshare.Page" */
export type Slideshare_Page_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageUrl?: InputMaybe<Order_By>;
  pageNumber?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  videoUrl?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "slideshare.Page" */
export type Slideshare_Page_Mutation_Response = {
  __typename?: 'slideshare_Page_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Page>;
};

/** input type for inserting object relation for remote table "slideshare.Page" */
export type Slideshare_Page_Obj_Rel_Insert_Input = {
  data: Slideshare_Page_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Slideshare_Page_On_Conflict>;
};

/** on_conflict condition type for table "slideshare.Page" */
export type Slideshare_Page_On_Conflict = {
  constraint: Slideshare_Page_Constraint;
  update_columns?: Array<Slideshare_Page_Update_Column>;
  where?: InputMaybe<Slideshare_Page_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.Page". */
export type Slideshare_Page_Order_By = {
  Bookmarks_aggregate?: InputMaybe<Slideshare_Bookmark_Aggregate_Order_By>;
  Comments_aggregate?: InputMaybe<Slideshare_Comment_Aggregate_Order_By>;
  Files_aggregate?: InputMaybe<Slideshare_File_Aggregate_Order_By>;
  PageType?: InputMaybe<Slideshare_PageType_Order_By>;
  Poll?: InputMaybe<Slideshare_Poll_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageUrl?: InputMaybe<Order_By>;
  isVisible?: InputMaybe<Order_By>;
  pageNumber?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  videoUrl?: InputMaybe<Order_By>;
};

/** primary key columns input for table: slideshare_Page */
export type Slideshare_Page_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "slideshare.Page" */
export enum Slideshare_Page_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  IsVisible = 'isVisible',
  /** column name */
  PageNumber = 'pageNumber',
  /** column name */
  SlideId = 'slideId',
  /** column name */
  Text = 'text',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VideoUrl = 'videoUrl'
}

/** input type for updating data in table "slideshare.Page" */
export type Slideshare_Page_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  isVisible?: InputMaybe<Scalars['Boolean']>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Slideshare_PageType_Enum>;
  videoUrl?: InputMaybe<Scalars['String']>;
};

/** order by stddev() on columns of table "slideshare.Page" */
export type Slideshare_Page_Stddev_Order_By = {
  pageNumber?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "slideshare.Page" */
export type Slideshare_Page_Stddev_Pop_Order_By = {
  pageNumber?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "slideshare.Page" */
export type Slideshare_Page_Stddev_Samp_Order_By = {
  pageNumber?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "slideshare.Page" */
export type Slideshare_Page_Sum_Order_By = {
  pageNumber?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** update columns of table "slideshare.Page" */
export enum Slideshare_Page_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  IsVisible = 'isVisible',
  /** column name */
  PageNumber = 'pageNumber',
  /** column name */
  Text = 'text',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  VideoUrl = 'videoUrl'
}

/** order by var_pop() on columns of table "slideshare.Page" */
export type Slideshare_Page_Var_Pop_Order_By = {
  pageNumber?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "slideshare.Page" */
export type Slideshare_Page_Var_Samp_Order_By = {
  pageNumber?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "slideshare.Page" */
export type Slideshare_Page_Variance_Order_By = {
  pageNumber?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** columns and relationships of "slideshare.Poll" */
export type Slideshare_Poll = {
  __typename?: 'slideshare_Poll';
  /** An object relationship */
  Page: Slideshare_Page;
  /** An array relationship */
  PollResults: Array<Slideshare_PollResult>;
  option1: Scalars['String'];
  option2: Scalars['String'];
  option3?: Maybe<Scalars['String']>;
  option4?: Maybe<Scalars['String']>;
  pageId: Scalars['String'];
  question: Scalars['String'];
};


/** columns and relationships of "slideshare.Poll" */
export type Slideshare_PollPollResultsArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_PollResult_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_PollResult_Order_By>>;
  where?: InputMaybe<Slideshare_PollResult_Bool_Exp>;
};

/** columns and relationships of "slideshare.PollResult" */
export type Slideshare_PollResult = {
  __typename?: 'slideshare_PollResult';
  createdBy: Scalars['String'];
  id: Scalars['Int'];
  optionNumber: Scalars['Int'];
  pageId: Scalars['String'];
};

/** order by aggregate values of table "slideshare.PollResult" */
export type Slideshare_PollResult_Aggregate_Order_By = {
  avg?: InputMaybe<Slideshare_PollResult_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Slideshare_PollResult_Max_Order_By>;
  min?: InputMaybe<Slideshare_PollResult_Min_Order_By>;
  stddev?: InputMaybe<Slideshare_PollResult_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Slideshare_PollResult_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Slideshare_PollResult_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Slideshare_PollResult_Sum_Order_By>;
  var_pop?: InputMaybe<Slideshare_PollResult_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Slideshare_PollResult_Var_Samp_Order_By>;
  variance?: InputMaybe<Slideshare_PollResult_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "slideshare.PollResult" */
export type Slideshare_PollResult_Arr_Rel_Insert_Input = {
  data: Array<Slideshare_PollResult_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Slideshare_PollResult_On_Conflict>;
};

/** order by avg() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  optionNumber?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.PollResult". All fields are combined with a logical 'AND'. */
export type Slideshare_PollResult_Bool_Exp = {
  _and?: InputMaybe<Array<Slideshare_PollResult_Bool_Exp>>;
  _not?: InputMaybe<Slideshare_PollResult_Bool_Exp>;
  _or?: InputMaybe<Array<Slideshare_PollResult_Bool_Exp>>;
  createdBy?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  optionNumber?: InputMaybe<Int_Comparison_Exp>;
  pageId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.PollResult" */
export enum Slideshare_PollResult_Constraint {
  /** unique or primary key constraint */
  PollResultPageIdCreatedByKey = 'PollResult_pageId_createdBy_key',
  /** unique or primary key constraint */
  PollResultPkey = 'PollResult_pkey'
}

/** input type for incrementing numeric columns in table "slideshare.PollResult" */
export type Slideshare_PollResult_Inc_Input = {
  optionNumber?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "slideshare.PollResult" */
export type Slideshare_PollResult_Insert_Input = {
  createdBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  optionNumber?: InputMaybe<Scalars['Int']>;
  pageId?: InputMaybe<Scalars['String']>;
};

/** order by max() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Max_Order_By = {
  createdBy?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  optionNumber?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Min_Order_By = {
  createdBy?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  optionNumber?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "slideshare.PollResult" */
export type Slideshare_PollResult_Mutation_Response = {
  __typename?: 'slideshare_PollResult_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_PollResult>;
};

/** on_conflict condition type for table "slideshare.PollResult" */
export type Slideshare_PollResult_On_Conflict = {
  constraint: Slideshare_PollResult_Constraint;
  update_columns?: Array<Slideshare_PollResult_Update_Column>;
  where?: InputMaybe<Slideshare_PollResult_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.PollResult". */
export type Slideshare_PollResult_Order_By = {
  createdBy?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  optionNumber?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: slideshare_PollResult */
export type Slideshare_PollResult_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "slideshare.PollResult" */
export enum Slideshare_PollResult_Select_Column {
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  OptionNumber = 'optionNumber',
  /** column name */
  PageId = 'pageId'
}

/** input type for updating data in table "slideshare.PollResult" */
export type Slideshare_PollResult_Set_Input = {
  optionNumber?: InputMaybe<Scalars['Int']>;
};

/** order by stddev() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  optionNumber?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  optionNumber?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  optionNumber?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  optionNumber?: InputMaybe<Order_By>;
};

/** update columns of table "slideshare.PollResult" */
export enum Slideshare_PollResult_Update_Column {
  /** column name */
  OptionNumber = 'optionNumber'
}

/** order by var_pop() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  optionNumber?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  optionNumber?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  optionNumber?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.Poll". All fields are combined with a logical 'AND'. */
export type Slideshare_Poll_Bool_Exp = {
  Page?: InputMaybe<Slideshare_Page_Bool_Exp>;
  PollResults?: InputMaybe<Slideshare_PollResult_Bool_Exp>;
  _and?: InputMaybe<Array<Slideshare_Poll_Bool_Exp>>;
  _not?: InputMaybe<Slideshare_Poll_Bool_Exp>;
  _or?: InputMaybe<Array<Slideshare_Poll_Bool_Exp>>;
  option1?: InputMaybe<String_Comparison_Exp>;
  option2?: InputMaybe<String_Comparison_Exp>;
  option3?: InputMaybe<String_Comparison_Exp>;
  option4?: InputMaybe<String_Comparison_Exp>;
  pageId?: InputMaybe<String_Comparison_Exp>;
  question?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.Poll" */
export enum Slideshare_Poll_Constraint {
  /** unique or primary key constraint */
  PollPkey = 'Poll_pkey'
}

/** input type for inserting data into table "slideshare.Poll" */
export type Slideshare_Poll_Insert_Input = {
  Page?: InputMaybe<Slideshare_Page_Obj_Rel_Insert_Input>;
  PollResults?: InputMaybe<Slideshare_PollResult_Arr_Rel_Insert_Input>;
  option1?: InputMaybe<Scalars['String']>;
  option2?: InputMaybe<Scalars['String']>;
  option3?: InputMaybe<Scalars['String']>;
  option4?: InputMaybe<Scalars['String']>;
  pageId?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "slideshare.Poll" */
export type Slideshare_Poll_Mutation_Response = {
  __typename?: 'slideshare_Poll_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Poll>;
};

/** input type for inserting object relation for remote table "slideshare.Poll" */
export type Slideshare_Poll_Obj_Rel_Insert_Input = {
  data: Slideshare_Poll_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Slideshare_Poll_On_Conflict>;
};

/** on_conflict condition type for table "slideshare.Poll" */
export type Slideshare_Poll_On_Conflict = {
  constraint: Slideshare_Poll_Constraint;
  update_columns?: Array<Slideshare_Poll_Update_Column>;
  where?: InputMaybe<Slideshare_Poll_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.Poll". */
export type Slideshare_Poll_Order_By = {
  Page?: InputMaybe<Slideshare_Page_Order_By>;
  PollResults_aggregate?: InputMaybe<Slideshare_PollResult_Aggregate_Order_By>;
  option1?: InputMaybe<Order_By>;
  option2?: InputMaybe<Order_By>;
  option3?: InputMaybe<Order_By>;
  option4?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  question?: InputMaybe<Order_By>;
};

/** primary key columns input for table: slideshare_Poll */
export type Slideshare_Poll_Pk_Columns_Input = {
  pageId: Scalars['String'];
};

/** select columns of table "slideshare.Poll" */
export enum Slideshare_Poll_Select_Column {
  /** column name */
  Option1 = 'option1',
  /** column name */
  Option2 = 'option2',
  /** column name */
  Option3 = 'option3',
  /** column name */
  Option4 = 'option4',
  /** column name */
  PageId = 'pageId',
  /** column name */
  Question = 'question'
}

/** input type for updating data in table "slideshare.Poll" */
export type Slideshare_Poll_Set_Input = {
  option1?: InputMaybe<Scalars['String']>;
  option2?: InputMaybe<Scalars['String']>;
  option3?: InputMaybe<Scalars['String']>;
  option4?: InputMaybe<Scalars['String']>;
  pageId?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<Scalars['String']>;
};

/** update columns of table "slideshare.Poll" */
export enum Slideshare_Poll_Update_Column {
  /** column name */
  Option1 = 'option1',
  /** column name */
  Option2 = 'option2',
  /** column name */
  Option3 = 'option3',
  /** column name */
  Option4 = 'option4',
  /** column name */
  PageId = 'pageId',
  /** column name */
  Question = 'question'
}

/** columns and relationships of "slideshare.Profile" */
export type Slideshare_Profile = {
  __typename?: 'slideshare_Profile';
  contribution: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};

/** Boolean expression to filter rows from the table "slideshare.Profile". All fields are combined with a logical 'AND'. */
export type Slideshare_Profile_Bool_Exp = {
  _and?: InputMaybe<Array<Slideshare_Profile_Bool_Exp>>;
  _not?: InputMaybe<Slideshare_Profile_Bool_Exp>;
  _or?: InputMaybe<Array<Slideshare_Profile_Bool_Exp>>;
  contribution?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  profile?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.Profile" */
export enum Slideshare_Profile_Constraint {
  /** unique or primary key constraint */
  ProfilePkey = 'Profile_pkey'
}

/** input type for inserting data into table "slideshare.Profile" */
export type Slideshare_Profile_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "slideshare.Profile" */
export type Slideshare_Profile_Mutation_Response = {
  __typename?: 'slideshare_Profile_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Profile>;
};

/** input type for inserting object relation for remote table "slideshare.Profile" */
export type Slideshare_Profile_Obj_Rel_Insert_Input = {
  data: Slideshare_Profile_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Slideshare_Profile_On_Conflict>;
};

/** on_conflict condition type for table "slideshare.Profile" */
export type Slideshare_Profile_On_Conflict = {
  constraint: Slideshare_Profile_Constraint;
  update_columns?: Array<Slideshare_Profile_Update_Column>;
  where?: InputMaybe<Slideshare_Profile_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.Profile". */
export type Slideshare_Profile_Order_By = {
  contribution?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  profile?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: slideshare_Profile */
export type Slideshare_Profile_Pk_Columns_Input = {
  userId: Scalars['String'];
};

/** select columns of table "slideshare.Profile" */
export enum Slideshare_Profile_Select_Column {
  /** column name */
  Contribution = 'contribution',
  /** column name */
  Name = 'name',
  /** column name */
  Profile = 'profile',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "slideshare.Profile" */
export type Slideshare_Profile_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
};

/** update columns of table "slideshare.Profile" */
export enum Slideshare_Profile_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  Profile = 'profile'
}

/** columns and relationships of "slideshare.Room" */
export type Slideshare_Room = {
  __typename?: 'slideshare_Room';
  /** An array relationship */
  RoomParticipants: Array<Slideshare_RoomParticipant>;
  /** An object relationship */
  Slide?: Maybe<Slideshare_Slide>;
  createdAt: Scalars['timestamptz'];
  createdBy: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  presentingSlide?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "slideshare.Room" */
export type Slideshare_RoomRoomParticipantsArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_RoomParticipant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_RoomParticipant_Order_By>>;
  where?: InputMaybe<Slideshare_RoomParticipant_Bool_Exp>;
};

/** columns and relationships of "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant = {
  __typename?: 'slideshare_RoomParticipant';
  /** An object relationship */
  Profile: Slideshare_Profile;
  /** An object relationship */
  Room?: Maybe<Slideshare_Room>;
  /** An object relationship */
  Slide?: Maybe<Slideshare_Slide>;
  createdAt: Scalars['timestamptz'];
  roomId?: Maybe<Scalars['Int']>;
  slideId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  userId: Scalars['String'];
};

/** order by aggregate values of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Aggregate_Order_By = {
  avg?: InputMaybe<Slideshare_RoomParticipant_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Slideshare_RoomParticipant_Max_Order_By>;
  min?: InputMaybe<Slideshare_RoomParticipant_Min_Order_By>;
  stddev?: InputMaybe<Slideshare_RoomParticipant_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Slideshare_RoomParticipant_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Slideshare_RoomParticipant_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Slideshare_RoomParticipant_Sum_Order_By>;
  var_pop?: InputMaybe<Slideshare_RoomParticipant_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Slideshare_RoomParticipant_Var_Samp_Order_By>;
  variance?: InputMaybe<Slideshare_RoomParticipant_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Arr_Rel_Insert_Input = {
  data: Array<Slideshare_RoomParticipant_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Slideshare_RoomParticipant_On_Conflict>;
};

/** order by avg() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Avg_Order_By = {
  roomId?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.RoomParticipant". All fields are combined with a logical 'AND'. */
export type Slideshare_RoomParticipant_Bool_Exp = {
  Profile?: InputMaybe<Slideshare_Profile_Bool_Exp>;
  Room?: InputMaybe<Slideshare_Room_Bool_Exp>;
  Slide?: InputMaybe<Slideshare_Slide_Bool_Exp>;
  _and?: InputMaybe<Array<Slideshare_RoomParticipant_Bool_Exp>>;
  _not?: InputMaybe<Slideshare_RoomParticipant_Bool_Exp>;
  _or?: InputMaybe<Array<Slideshare_RoomParticipant_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  roomId?: InputMaybe<Int_Comparison_Exp>;
  slideId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.RoomParticipant" */
export enum Slideshare_RoomParticipant_Constraint {
  /** unique or primary key constraint */
  RoomParticipantPkey = 'RoomParticipant_pkey'
}

/** input type for incrementing numeric columns in table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Inc_Input = {
  roomId?: InputMaybe<Scalars['Int']>;
  slideId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Insert_Input = {
  Profile?: InputMaybe<Slideshare_Profile_Obj_Rel_Insert_Input>;
  Room?: InputMaybe<Slideshare_Room_Obj_Rel_Insert_Input>;
  Slide?: InputMaybe<Slideshare_Slide_Obj_Rel_Insert_Input>;
  roomId?: InputMaybe<Scalars['Int']>;
  slideId?: InputMaybe<Scalars['Int']>;
};

/** order by max() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  roomId?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  roomId?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Mutation_Response = {
  __typename?: 'slideshare_RoomParticipant_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_RoomParticipant>;
};

/** on_conflict condition type for table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_On_Conflict = {
  constraint: Slideshare_RoomParticipant_Constraint;
  update_columns?: Array<Slideshare_RoomParticipant_Update_Column>;
  where?: InputMaybe<Slideshare_RoomParticipant_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.RoomParticipant". */
export type Slideshare_RoomParticipant_Order_By = {
  Profile?: InputMaybe<Slideshare_Profile_Order_By>;
  Room?: InputMaybe<Slideshare_Room_Order_By>;
  Slide?: InputMaybe<Slideshare_Slide_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  roomId?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: slideshare_RoomParticipant */
export type Slideshare_RoomParticipant_Pk_Columns_Input = {
  userId: Scalars['String'];
};

/** select columns of table "slideshare.RoomParticipant" */
export enum Slideshare_RoomParticipant_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  RoomId = 'roomId',
  /** column name */
  SlideId = 'slideId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Set_Input = {
  roomId?: InputMaybe<Scalars['Int']>;
  slideId?: InputMaybe<Scalars['Int']>;
};

/** order by stddev() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Stddev_Order_By = {
  roomId?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Stddev_Pop_Order_By = {
  roomId?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Stddev_Samp_Order_By = {
  roomId?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Sum_Order_By = {
  roomId?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** update columns of table "slideshare.RoomParticipant" */
export enum Slideshare_RoomParticipant_Update_Column {
  /** column name */
  RoomId = 'roomId',
  /** column name */
  SlideId = 'slideId'
}

/** order by var_pop() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Var_Pop_Order_By = {
  roomId?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Var_Samp_Order_By = {
  roomId?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Variance_Order_By = {
  roomId?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.Room". All fields are combined with a logical 'AND'. */
export type Slideshare_Room_Bool_Exp = {
  RoomParticipants?: InputMaybe<Slideshare_RoomParticipant_Bool_Exp>;
  Slide?: InputMaybe<Slideshare_Slide_Bool_Exp>;
  _and?: InputMaybe<Array<Slideshare_Room_Bool_Exp>>;
  _not?: InputMaybe<Slideshare_Room_Bool_Exp>;
  _or?: InputMaybe<Array<Slideshare_Room_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  createdBy?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  presentingSlide?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.Room" */
export enum Slideshare_Room_Constraint {
  /** unique or primary key constraint */
  RoomPkey = 'Room_pkey'
}

/** input type for incrementing numeric columns in table "slideshare.Room" */
export type Slideshare_Room_Inc_Input = {
  presentingSlide?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "slideshare.Room" */
export type Slideshare_Room_Insert_Input = {
  RoomParticipants?: InputMaybe<Slideshare_RoomParticipant_Arr_Rel_Insert_Input>;
  Slide?: InputMaybe<Slideshare_Slide_Obj_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  presentingSlide?: InputMaybe<Scalars['Int']>;
};

/** response of any mutation on the table "slideshare.Room" */
export type Slideshare_Room_Mutation_Response = {
  __typename?: 'slideshare_Room_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Room>;
};

/** input type for inserting object relation for remote table "slideshare.Room" */
export type Slideshare_Room_Obj_Rel_Insert_Input = {
  data: Slideshare_Room_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Slideshare_Room_On_Conflict>;
};

/** on_conflict condition type for table "slideshare.Room" */
export type Slideshare_Room_On_Conflict = {
  constraint: Slideshare_Room_Constraint;
  update_columns?: Array<Slideshare_Room_Update_Column>;
  where?: InputMaybe<Slideshare_Room_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.Room". */
export type Slideshare_Room_Order_By = {
  RoomParticipants_aggregate?: InputMaybe<Slideshare_RoomParticipant_Aggregate_Order_By>;
  Slide?: InputMaybe<Slideshare_Slide_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  presentingSlide?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: slideshare_Room */
export type Slideshare_Room_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "slideshare.Room" */
export enum Slideshare_Room_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PresentingSlide = 'presentingSlide',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "slideshare.Room" */
export type Slideshare_Room_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  presentingSlide?: InputMaybe<Scalars['Int']>;
};

/** update columns of table "slideshare.Room" */
export enum Slideshare_Room_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name',
  /** column name */
  PresentingSlide = 'presentingSlide'
}

/** columns and relationships of "slideshare.Slide" */
export type Slideshare_Slide = {
  __typename?: 'slideshare_Slide';
  /** An array relationship */
  Pages: Array<Slideshare_Page>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy: Scalars['String'];
  id: Scalars['Int'];
  status: Scalars['String'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "slideshare.Slide" */
export type Slideshare_SlidePagesArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Page_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Page_Order_By>>;
  where?: InputMaybe<Slideshare_Page_Bool_Exp>;
};

/** columns and relationships of "slideshare.SlideRecord" */
export type Slideshare_SlideRecord = {
  __typename?: 'slideshare_SlideRecord';
  /** An array relationship */
  SlideRecordPieces: Array<Slideshare_SlideRecordPiece>;
  audioUrl: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  duration: Scalars['Int'];
  id: Scalars['Int'];
  slideId: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "slideshare.SlideRecord" */
export type Slideshare_SlideRecordSlideRecordPiecesArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_SlideRecordPiece_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_SlideRecordPiece_Order_By>>;
  where?: InputMaybe<Slideshare_SlideRecordPiece_Bool_Exp>;
};

/** columns and relationships of "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece = {
  __typename?: 'slideshare_SlideRecordPiece';
  id: Scalars['Int'];
  pageId: Scalars['String'];
  slideRecordId: Scalars['Int'];
  startTime: Scalars['Int'];
};

/** order by aggregate values of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Aggregate_Order_By = {
  avg?: InputMaybe<Slideshare_SlideRecordPiece_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Slideshare_SlideRecordPiece_Max_Order_By>;
  min?: InputMaybe<Slideshare_SlideRecordPiece_Min_Order_By>;
  stddev?: InputMaybe<Slideshare_SlideRecordPiece_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Slideshare_SlideRecordPiece_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Slideshare_SlideRecordPiece_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Slideshare_SlideRecordPiece_Sum_Order_By>;
  var_pop?: InputMaybe<Slideshare_SlideRecordPiece_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Slideshare_SlideRecordPiece_Var_Samp_Order_By>;
  variance?: InputMaybe<Slideshare_SlideRecordPiece_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Arr_Rel_Insert_Input = {
  data: Array<Slideshare_SlideRecordPiece_Insert_Input>;
};

/** order by avg() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  slideRecordId?: InputMaybe<Order_By>;
  startTime?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.SlideRecordPiece". All fields are combined with a logical 'AND'. */
export type Slideshare_SlideRecordPiece_Bool_Exp = {
  _and?: InputMaybe<Array<Slideshare_SlideRecordPiece_Bool_Exp>>;
  _not?: InputMaybe<Slideshare_SlideRecordPiece_Bool_Exp>;
  _or?: InputMaybe<Array<Slideshare_SlideRecordPiece_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  pageId?: InputMaybe<String_Comparison_Exp>;
  slideRecordId?: InputMaybe<Int_Comparison_Exp>;
  startTime?: InputMaybe<Int_Comparison_Exp>;
};

/** input type for inserting data into table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Insert_Input = {
  pageId?: InputMaybe<Scalars['String']>;
  slideRecordId?: InputMaybe<Scalars['Int']>;
  startTime?: InputMaybe<Scalars['Int']>;
};

/** order by max() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  slideRecordId?: InputMaybe<Order_By>;
  startTime?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  slideRecordId?: InputMaybe<Order_By>;
  startTime?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Mutation_Response = {
  __typename?: 'slideshare_SlideRecordPiece_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_SlideRecordPiece>;
};

/** Ordering options when selecting data from "slideshare.SlideRecordPiece". */
export type Slideshare_SlideRecordPiece_Order_By = {
  id?: InputMaybe<Order_By>;
  pageId?: InputMaybe<Order_By>;
  slideRecordId?: InputMaybe<Order_By>;
  startTime?: InputMaybe<Order_By>;
};

/** select columns of table "slideshare.SlideRecordPiece" */
export enum Slideshare_SlideRecordPiece_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PageId = 'pageId',
  /** column name */
  SlideRecordId = 'slideRecordId',
  /** column name */
  StartTime = 'startTime'
}

/** order by stddev() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  slideRecordId?: InputMaybe<Order_By>;
  startTime?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  slideRecordId?: InputMaybe<Order_By>;
  startTime?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  slideRecordId?: InputMaybe<Order_By>;
  startTime?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  slideRecordId?: InputMaybe<Order_By>;
  startTime?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  slideRecordId?: InputMaybe<Order_By>;
  startTime?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  slideRecordId?: InputMaybe<Order_By>;
  startTime?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  slideRecordId?: InputMaybe<Order_By>;
  startTime?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.SlideRecord". All fields are combined with a logical 'AND'. */
export type Slideshare_SlideRecord_Bool_Exp = {
  SlideRecordPieces?: InputMaybe<Slideshare_SlideRecordPiece_Bool_Exp>;
  _and?: InputMaybe<Array<Slideshare_SlideRecord_Bool_Exp>>;
  _not?: InputMaybe<Slideshare_SlideRecord_Bool_Exp>;
  _or?: InputMaybe<Array<Slideshare_SlideRecord_Bool_Exp>>;
  audioUrl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  duration?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  slideId?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.SlideRecord" */
export enum Slideshare_SlideRecord_Constraint {
  /** unique or primary key constraint */
  SlideRecordAudioUrlKey = 'SlideRecord_audioUrl_key',
  /** unique or primary key constraint */
  SlideRecordPkey = 'SlideRecord_pkey'
}

/** input type for incrementing numeric columns in table "slideshare.SlideRecord" */
export type Slideshare_SlideRecord_Inc_Input = {
  duration?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "slideshare.SlideRecord" */
export type Slideshare_SlideRecord_Insert_Input = {
  SlideRecordPieces?: InputMaybe<Slideshare_SlideRecordPiece_Arr_Rel_Insert_Input>;
  audioUrl?: InputMaybe<Scalars['String']>;
  slideId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "slideshare.SlideRecord" */
export type Slideshare_SlideRecord_Mutation_Response = {
  __typename?: 'slideshare_SlideRecord_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_SlideRecord>;
};

/** on_conflict condition type for table "slideshare.SlideRecord" */
export type Slideshare_SlideRecord_On_Conflict = {
  constraint: Slideshare_SlideRecord_Constraint;
  update_columns?: Array<Slideshare_SlideRecord_Update_Column>;
  where?: InputMaybe<Slideshare_SlideRecord_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.SlideRecord". */
export type Slideshare_SlideRecord_Order_By = {
  SlideRecordPieces_aggregate?: InputMaybe<Slideshare_SlideRecordPiece_Aggregate_Order_By>;
  audioUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  slideId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: slideshare_SlideRecord */
export type Slideshare_SlideRecord_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "slideshare.SlideRecord" */
export enum Slideshare_SlideRecord_Select_Column {
  /** column name */
  AudioUrl = 'audioUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  SlideId = 'slideId',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "slideshare.SlideRecord" */
export type Slideshare_SlideRecord_Set_Input = {
  audioUrl?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** update columns of table "slideshare.SlideRecord" */
export enum Slideshare_SlideRecord_Update_Column {
  /** column name */
  AudioUrl = 'audioUrl',
  /** column name */
  Duration = 'duration',
  /** column name */
  Title = 'title'
}

/** Boolean expression to filter rows from the table "slideshare.Slide". All fields are combined with a logical 'AND'. */
export type Slideshare_Slide_Bool_Exp = {
  Pages?: InputMaybe<Slideshare_Page_Bool_Exp>;
  _and?: InputMaybe<Array<Slideshare_Slide_Bool_Exp>>;
  _not?: InputMaybe<Slideshare_Slide_Bool_Exp>;
  _or?: InputMaybe<Array<Slideshare_Slide_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  createdBy?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.Slide" */
export enum Slideshare_Slide_Constraint {
  /** unique or primary key constraint */
  SlidePkey = 'Slide_pkey'
}

/** input type for inserting data into table "slideshare.Slide" */
export type Slideshare_Slide_Insert_Input = {
  Pages?: InputMaybe<Slideshare_Page_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "slideshare.Slide" */
export type Slideshare_Slide_Mutation_Response = {
  __typename?: 'slideshare_Slide_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Slide>;
};

/** input type for inserting object relation for remote table "slideshare.Slide" */
export type Slideshare_Slide_Obj_Rel_Insert_Input = {
  data: Slideshare_Slide_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Slideshare_Slide_On_Conflict>;
};

/** on_conflict condition type for table "slideshare.Slide" */
export type Slideshare_Slide_On_Conflict = {
  constraint: Slideshare_Slide_Constraint;
  update_columns?: Array<Slideshare_Slide_Update_Column>;
  where?: InputMaybe<Slideshare_Slide_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.Slide". */
export type Slideshare_Slide_Order_By = {
  Pages_aggregate?: InputMaybe<Slideshare_Page_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: slideshare_Slide */
export type Slideshare_Slide_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "slideshare.Slide" */
export enum Slideshare_Slide_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "slideshare.Slide" */
export type Slideshare_Slide_Set_Input = {
  status?: InputMaybe<Scalars['String']>;
};

/** update columns of table "slideshare.Slide" */
export enum Slideshare_Slide_Update_Column {
  /** column name */
  Status = 'status'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Board" */
  Board: Array<Board>;
  /** fetch data from the table: "Board" using primary key columns */
  Board_by_pk?: Maybe<Board>;
  /** fetch data from the table: "Note" */
  Note: Array<Note>;
  /** fetch data from the table: "Note" using primary key columns */
  Note_by_pk?: Maybe<Note>;
  /** fetch data from the table: "englister.MyNote" */
  englister_MyNote: Array<Englister_MyNote>;
  /** fetch data from the table: "englister.MyNote" using primary key columns */
  englister_MyNote_by_pk?: Maybe<Englister_MyNote>;
  /** fetch data from the table: "englister.Phrase" */
  englister_Phrase: Array<Englister_Phrase>;
  /** fetch data from the table: "englister.Phrase" using primary key columns */
  englister_Phrase_by_pk?: Maybe<Englister_Phrase>;
  /** fetch data from the table: "englister.PublicAnswers" */
  englister_PublicAnswers: Array<Englister_PublicAnswers>;
  /** fetch data from the table: "englister.PublicAnswers" using primary key columns */
  englister_PublicAnswers_by_pk?: Maybe<Englister_PublicAnswers>;
  /** fetch data from the table: "englister.WordleRecord" */
  englister_WordleRecord: Array<Englister_WordleRecord>;
  /** fetch aggregated fields from the table: "englister.WordleRecord" */
  englister_WordleRecord_aggregate: Englister_WordleRecord_Aggregate;
  /** fetch data from the table: "englister.WordleRecord" using primary key columns */
  englister_WordleRecord_by_pk?: Maybe<Englister_WordleRecord>;
  /** fetch data from the table: "englister.WordleRoom" */
  englister_WordleRoom: Array<Englister_WordleRoom>;
  /** fetch data from the table: "englister.WordleRoom" using primary key columns */
  englister_WordleRoom_by_pk?: Maybe<Englister_WordleRoom>;
  /** fetch data from the table: "englister.WordleSkippedWords" */
  englister_WordleSkippedWords: Array<Englister_WordleSkippedWords>;
  /** fetch data from the table: "englister.WordleSkippedWords" using primary key columns */
  englister_WordleSkippedWords_by_pk?: Maybe<Englister_WordleSkippedWords>;
  /** fetch data from the table: "slideshare.Bookmark" */
  slideshare_Bookmark: Array<Slideshare_Bookmark>;
  /** fetch data from the table: "slideshare.Bookmark" using primary key columns */
  slideshare_Bookmark_by_pk?: Maybe<Slideshare_Bookmark>;
  /** fetch data from the table: "slideshare.Comment" */
  slideshare_Comment: Array<Slideshare_Comment>;
  /** fetch data from the table: "slideshare.Comment" using primary key columns */
  slideshare_Comment_by_pk?: Maybe<Slideshare_Comment>;
  /** fetch data from the table: "slideshare.Conference" */
  slideshare_Conference: Array<Slideshare_Conference>;
  /** fetch data from the table: "slideshare.ConferenceSubscriber" */
  slideshare_ConferenceSubscriber: Array<Slideshare_ConferenceSubscriber>;
  /** fetch data from the table: "slideshare.ConferenceSubscriber" using primary key columns */
  slideshare_ConferenceSubscriber_by_pk?: Maybe<Slideshare_ConferenceSubscriber>;
  /** fetch data from the table: "slideshare.Conference" using primary key columns */
  slideshare_Conference_by_pk?: Maybe<Slideshare_Conference>;
  /** fetch data from the table: "slideshare.File" */
  slideshare_File: Array<Slideshare_File>;
  /** fetch data from the table: "slideshare.File" using primary key columns */
  slideshare_File_by_pk?: Maybe<Slideshare_File>;
  /** fetch data from the table: "slideshare.Follower" */
  slideshare_Follower: Array<Slideshare_Follower>;
  /** fetch data from the table: "slideshare.Follower" using primary key columns */
  slideshare_Follower_by_pk?: Maybe<Slideshare_Follower>;
  /** fetch data from the table: "slideshare.Page" */
  slideshare_Page: Array<Slideshare_Page>;
  /** fetch data from the table: "slideshare.PageType" */
  slideshare_PageType: Array<Slideshare_PageType>;
  /** fetch data from the table: "slideshare.PageType" using primary key columns */
  slideshare_PageType_by_pk?: Maybe<Slideshare_PageType>;
  /** fetch data from the table: "slideshare.Page" using primary key columns */
  slideshare_Page_by_pk?: Maybe<Slideshare_Page>;
  /** fetch data from the table: "slideshare.Poll" */
  slideshare_Poll: Array<Slideshare_Poll>;
  /** fetch data from the table: "slideshare.PollResult" */
  slideshare_PollResult: Array<Slideshare_PollResult>;
  /** fetch data from the table: "slideshare.PollResult" using primary key columns */
  slideshare_PollResult_by_pk?: Maybe<Slideshare_PollResult>;
  /** fetch data from the table: "slideshare.Poll" using primary key columns */
  slideshare_Poll_by_pk?: Maybe<Slideshare_Poll>;
  /** fetch data from the table: "slideshare.Profile" */
  slideshare_Profile: Array<Slideshare_Profile>;
  /** fetch data from the table: "slideshare.Profile" using primary key columns */
  slideshare_Profile_by_pk?: Maybe<Slideshare_Profile>;
  /** fetch data from the table: "slideshare.Room" */
  slideshare_Room: Array<Slideshare_Room>;
  /** fetch data from the table: "slideshare.RoomParticipant" */
  slideshare_RoomParticipant: Array<Slideshare_RoomParticipant>;
  /** fetch data from the table: "slideshare.RoomParticipant" using primary key columns */
  slideshare_RoomParticipant_by_pk?: Maybe<Slideshare_RoomParticipant>;
  /** fetch data from the table: "slideshare.Room" using primary key columns */
  slideshare_Room_by_pk?: Maybe<Slideshare_Room>;
  /** fetch data from the table: "slideshare.Slide" */
  slideshare_Slide: Array<Slideshare_Slide>;
  /** fetch data from the table: "slideshare.SlideRecord" */
  slideshare_SlideRecord: Array<Slideshare_SlideRecord>;
  /** fetch data from the table: "slideshare.SlideRecordPiece" */
  slideshare_SlideRecordPiece: Array<Slideshare_SlideRecordPiece>;
  /** fetch data from the table: "slideshare.SlideRecordPiece" using primary key columns */
  slideshare_SlideRecordPiece_by_pk?: Maybe<Slideshare_SlideRecordPiece>;
  /** fetch data from the table: "slideshare.SlideRecord" using primary key columns */
  slideshare_SlideRecord_by_pk?: Maybe<Slideshare_SlideRecord>;
  /** fetch data from the table: "slideshare.Slide" using primary key columns */
  slideshare_Slide_by_pk?: Maybe<Slideshare_Slide>;
};


export type Subscription_RootBoardArgs = {
  distinct_on?: InputMaybe<Array<Board_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Board_Order_By>>;
  where?: InputMaybe<Board_Bool_Exp>;
};


export type Subscription_RootBoard_By_PkArgs = {
  Id: Scalars['Int'];
};


export type Subscription_RootNoteArgs = {
  distinct_on?: InputMaybe<Array<Note_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Note_Order_By>>;
  where?: InputMaybe<Note_Bool_Exp>;
};


export type Subscription_RootNote_By_PkArgs = {
  Id: Scalars['Int'];
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


export type Subscription_RootEnglister_WordleRecordArgs = {
  distinct_on?: InputMaybe<Array<Englister_WordleRecord_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_WordleRecord_Order_By>>;
  where?: InputMaybe<Englister_WordleRecord_Bool_Exp>;
};


export type Subscription_RootEnglister_WordleRecord_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Englister_WordleRecord_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_WordleRecord_Order_By>>;
  where?: InputMaybe<Englister_WordleRecord_Bool_Exp>;
};


export type Subscription_RootEnglister_WordleRecord_By_PkArgs = {
  roomSlug: Scalars['String'];
  userId: Scalars['String'];
};


export type Subscription_RootEnglister_WordleRoomArgs = {
  distinct_on?: InputMaybe<Array<Englister_WordleRoom_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_WordleRoom_Order_By>>;
  where?: InputMaybe<Englister_WordleRoom_Bool_Exp>;
};


export type Subscription_RootEnglister_WordleRoom_By_PkArgs = {
  slug: Scalars['String'];
};


export type Subscription_RootEnglister_WordleSkippedWordsArgs = {
  distinct_on?: InputMaybe<Array<Englister_WordleSkippedWords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Englister_WordleSkippedWords_Order_By>>;
  where?: InputMaybe<Englister_WordleSkippedWords_Bool_Exp>;
};


export type Subscription_RootEnglister_WordleSkippedWords_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSlideshare_BookmarkArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Bookmark_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Bookmark_Order_By>>;
  where?: InputMaybe<Slideshare_Bookmark_Bool_Exp>;
};


export type Subscription_RootSlideshare_Bookmark_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSlideshare_CommentArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Comment_Order_By>>;
  where?: InputMaybe<Slideshare_Comment_Bool_Exp>;
};


export type Subscription_RootSlideshare_Comment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSlideshare_ConferenceArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Conference_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Conference_Order_By>>;
  where?: InputMaybe<Slideshare_Conference_Bool_Exp>;
};


export type Subscription_RootSlideshare_ConferenceSubscriberArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_ConferenceSubscriber_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_ConferenceSubscriber_Order_By>>;
  where?: InputMaybe<Slideshare_ConferenceSubscriber_Bool_Exp>;
};


export type Subscription_RootSlideshare_ConferenceSubscriber_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSlideshare_Conference_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSlideshare_FileArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_File_Order_By>>;
  where?: InputMaybe<Slideshare_File_Bool_Exp>;
};


export type Subscription_RootSlideshare_File_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSlideshare_FollowerArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Follower_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Follower_Order_By>>;
  where?: InputMaybe<Slideshare_Follower_Bool_Exp>;
};


export type Subscription_RootSlideshare_Follower_By_PkArgs = {
  follow_user_id: Scalars['String'];
  follower_user_id: Scalars['String'];
};


export type Subscription_RootSlideshare_PageArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Page_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Page_Order_By>>;
  where?: InputMaybe<Slideshare_Page_Bool_Exp>;
};


export type Subscription_RootSlideshare_PageTypeArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_PageType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_PageType_Order_By>>;
  where?: InputMaybe<Slideshare_PageType_Bool_Exp>;
};


export type Subscription_RootSlideshare_PageType_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootSlideshare_Page_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootSlideshare_PollArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Poll_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Poll_Order_By>>;
  where?: InputMaybe<Slideshare_Poll_Bool_Exp>;
};


export type Subscription_RootSlideshare_PollResultArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_PollResult_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_PollResult_Order_By>>;
  where?: InputMaybe<Slideshare_PollResult_Bool_Exp>;
};


export type Subscription_RootSlideshare_PollResult_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSlideshare_Poll_By_PkArgs = {
  pageId: Scalars['String'];
};


export type Subscription_RootSlideshare_ProfileArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Profile_Order_By>>;
  where?: InputMaybe<Slideshare_Profile_Bool_Exp>;
};


export type Subscription_RootSlideshare_Profile_By_PkArgs = {
  userId: Scalars['String'];
};


export type Subscription_RootSlideshare_RoomArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Room_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Room_Order_By>>;
  where?: InputMaybe<Slideshare_Room_Bool_Exp>;
};


export type Subscription_RootSlideshare_RoomParticipantArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_RoomParticipant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_RoomParticipant_Order_By>>;
  where?: InputMaybe<Slideshare_RoomParticipant_Bool_Exp>;
};


export type Subscription_RootSlideshare_RoomParticipant_By_PkArgs = {
  userId: Scalars['String'];
};


export type Subscription_RootSlideshare_Room_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSlideshare_SlideArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_Slide_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_Slide_Order_By>>;
  where?: InputMaybe<Slideshare_Slide_Bool_Exp>;
};


export type Subscription_RootSlideshare_SlideRecordArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_SlideRecord_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_SlideRecord_Order_By>>;
  where?: InputMaybe<Slideshare_SlideRecord_Bool_Exp>;
};


export type Subscription_RootSlideshare_SlideRecordPieceArgs = {
  distinct_on?: InputMaybe<Array<Slideshare_SlideRecordPiece_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slideshare_SlideRecordPiece_Order_By>>;
  where?: InputMaybe<Slideshare_SlideRecordPiece_Bool_Exp>;
};


export type Subscription_RootSlideshare_SlideRecordPiece_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSlideshare_SlideRecord_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSlideshare_Slide_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
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


export type SaveMyNoteMutation = { __typename?: 'mutation_root', insert_englister_MyNote_one?: { __typename?: 'englister_MyNote', id: number } | null | undefined };

export type UpdateMyNoteMutationVariables = Exact<{
  id: Scalars['Int'];
  memo: Scalars['String'];
}>;


export type UpdateMyNoteMutation = { __typename?: 'mutation_root', update_englister_MyNote_by_pk?: { __typename?: 'englister_MyNote', id: number } | null | undefined };

export type GetMyNoteQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetMyNoteQuery = { __typename?: 'query_root', englister_MyNote_by_pk?: { __typename?: 'englister_MyNote', id: number, english: string, questionTitle: string, memo: string, japanese: string, questionDescription: string, topicId: string, categorySlug?: string | null | undefined, createdAt: any, translation: string, updatedAt: any } | null | undefined };

export type ListMyNoteQueryVariables = Exact<{ [key: string]: never; }>;


export type ListMyNoteQuery = { __typename?: 'query_root', englister_MyNote: Array<{ __typename?: 'englister_MyNote', id: number, english: string, questionTitle: string, memo: string, japanese: string, questionDescription: string, topicId: string, categorySlug?: string | null | undefined, createdAt: any, translation: string, updatedAt: any }> };

export type DeleteMyNoteMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteMyNoteMutation = { __typename?: 'mutation_root', delete_englister_MyNote_by_pk?: { __typename?: 'englister_MyNote', id: number } | null | undefined };

export type SavePhraseMutationVariables = Exact<{
  phrase: Scalars['String'];
  description: Scalars['String'];
}>;


export type SavePhraseMutation = { __typename?: 'mutation_root', insert_englister_Phrase_one?: { __typename?: 'englister_Phrase', id: number, phrase: string, description: string, created_at?: any | null | undefined, updated_at?: any | null | undefined } | null | undefined };

export type UpdatePhraseMutationVariables = Exact<{
  id: Scalars['Int'];
  phrase: Scalars['String'];
  description: Scalars['String'];
}>;


export type UpdatePhraseMutation = { __typename?: 'mutation_root', update_englister_Phrase_by_pk?: { __typename?: 'englister_Phrase', id: number, phrase: string, description: string, created_at?: any | null | undefined, updated_at?: any | null | undefined } | null | undefined };

export type DeletePhraseMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePhraseMutation = { __typename?: 'mutation_root', delete_englister_Phrase_by_pk?: { __typename?: 'englister_Phrase', id: number, phrase: string, description: string, created_at?: any | null | undefined, updated_at?: any | null | undefined } | null | undefined };

export type ListPhraseQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPhraseQueryQuery = { __typename?: 'query_root', englister_Phrase: Array<{ __typename?: 'englister_Phrase', id: number, phrase: string, description: string, created_at?: any | null | undefined, updated_at?: any | null | undefined }> };

export type ListPhraseSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ListPhraseSubscription = { __typename?: 'subscription_root', englister_Phrase: Array<{ __typename?: 'englister_Phrase', id: number, phrase: string, description: string, created_at?: any | null | undefined, updated_at?: any | null | undefined }> };

export type QueryPublciAnswersQueryVariables = Exact<{
  topicId: Scalars['Int'];
}>;


export type QueryPublciAnswersQuery = { __typename?: 'query_root', englister_PublicAnswers: Array<{ __typename?: 'englister_PublicAnswers', id: number, topicId: number, answer: string, japanese?: string | null | undefined, translation?: string | null | undefined, age?: number | null | undefined, createdBy: string, createdAt: any }> };

export type QueryTodayPublciAnswerRankingQueryVariables = Exact<{
  todayTopicId: Scalars['String'];
}>;


export type QueryTodayPublciAnswerRankingQuery = { __typename?: 'query_root', englister_PublicAnswers: Array<{ __typename?: 'englister_PublicAnswers', id: number, topicId: number, answer: string, japanese?: string | null | undefined, translation?: string | null | undefined, age?: number | null | undefined, name?: string | null | undefined, createdBy: string, createdAt: any }> };

export type QueryPublicJapaneseQueryVariables = Exact<{
  topicId: Scalars['Int'];
}>;


export type QueryPublicJapaneseQuery = { __typename?: 'query_root', englister_PublicAnswers: Array<{ __typename?: 'englister_PublicAnswers', id: number, topicId: number, japanese?: string | null | undefined, createdBy: string, createdAt: any }> };

export type SubmitPublicAnswerMutationVariables = Exact<{
  topicId: Scalars['Int'];
  answer: Scalars['String'];
  japanese: Scalars['String'];
  translation: Scalars['String'];
  age: Scalars['Int'];
}>;


export type SubmitPublicAnswerMutation = { __typename?: 'mutation_root', insert_englister_PublicAnswers_one?: { __typename?: 'englister_PublicAnswers', id: number, topicId: number, answer: string, createdAt: any, createdBy: string } | null | undefined };

export type SubmitTodayPublicAnswerMutationVariables = Exact<{
  topicId: Scalars['Int'];
  answer: Scalars['String'];
  japanese: Scalars['String'];
  translation: Scalars['String'];
  age: Scalars['Int'];
  todayTopicId: Scalars['String'];
  name: Scalars['String'];
}>;


export type SubmitTodayPublicAnswerMutation = { __typename?: 'mutation_root', insert_englister_PublicAnswers_one?: { __typename?: 'englister_PublicAnswers', id: number, topicId: number, answer: string, createdAt: any, createdBy: string } | null | undefined };

export type DeletePublicAnswerMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePublicAnswerMutation = { __typename?: 'mutation_root', delete_englister_PublicAnswers_by_pk?: { __typename?: 'englister_PublicAnswers', id: number, topicId: number, answer: string, createdAt: any, createdBy: string } | null | undefined };

export type CreateRoomMutationVariables = Exact<{
  slug: Scalars['String'];
  answer: Scalars['String'];
  player1?: InputMaybe<Scalars['String']>;
  player1_name?: InputMaybe<Scalars['String']>;
}>;


export type CreateRoomMutation = { __typename?: 'mutation_root', insert_englister_WordleRoom_one?: { __typename?: 'englister_WordleRoom', slug: string } | null | undefined };

export type JoinRoomMutationVariables = Exact<{
  slug: Scalars['String'];
  player2?: InputMaybe<Scalars['String']>;
  player2_name?: InputMaybe<Scalars['String']>;
}>;


export type JoinRoomMutation = { __typename?: 'mutation_root', update_englister_WordleRoom_by_pk?: { __typename?: 'englister_WordleRoom', slug: string } | null | undefined };

export type WordleRoomsSubscriptionVariables = Exact<{
  date: Scalars['timestamptz'];
}>;


export type WordleRoomsSubscription = { __typename?: 'subscription_root', englister_WordleRoom: Array<{ __typename?: 'englister_WordleRoom', slug: string, player1_name?: string | null | undefined, created_at: any }> };

export type SkippedWordsSubscriptionVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type SkippedWordsSubscription = { __typename?: 'subscription_root', englister_WordleSkippedWords: Array<{ __typename?: 'englister_WordleSkippedWords', id: number, word: string, created_at: any }> };

export type WordleRoomSubscriptionVariables = Exact<{
  slug: Scalars['String'];
}>;


export type WordleRoomSubscription = { __typename?: 'subscription_root', englister_WordleRoom_by_pk?: { __typename?: 'englister_WordleRoom', answer: string, created_at: any, player1: string, player2: string, player1_name?: string | null | undefined, player2_name?: string | null | undefined, turn?: string | null | undefined, slug: string, five: string, four: string, one: string, six: string, three: string, two: string } | null | undefined };

export type DeleteRoomMutationVariables = Exact<{
  roomSlug: Scalars['String'];
}>;


export type DeleteRoomMutation = { __typename?: 'mutation_root', delete_englister_WordleRoom_by_pk?: { __typename?: 'englister_WordleRoom', slug: string } | null | undefined };

export type SkipMutationVariables = Exact<{
  roomSlug: Scalars['String'];
  turn: Scalars['String'];
}>;


export type SkipMutation = { __typename?: 'mutation_root', update_englister_WordleRoom_by_pk?: { __typename?: 'englister_WordleRoom', slug: string } | null | undefined };

export type UpdateOneRowMutationVariables = Exact<{
  roomSlug: Scalars['String'];
  text: Scalars['String'];
  turn: Scalars['String'];
}>;


export type UpdateOneRowMutation = { __typename?: 'mutation_root', update_englister_WordleRoom_by_pk?: { __typename?: 'englister_WordleRoom', slug: string } | null | undefined };

export type UpdateTwoRowMutationVariables = Exact<{
  roomSlug: Scalars['String'];
  text: Scalars['String'];
  turn: Scalars['String'];
}>;


export type UpdateTwoRowMutation = { __typename?: 'mutation_root', update_englister_WordleRoom_by_pk?: { __typename?: 'englister_WordleRoom', slug: string } | null | undefined };

export type UpdateThreeRowMutationVariables = Exact<{
  roomSlug: Scalars['String'];
  text: Scalars['String'];
  turn: Scalars['String'];
}>;


export type UpdateThreeRowMutation = { __typename?: 'mutation_root', update_englister_WordleRoom_by_pk?: { __typename?: 'englister_WordleRoom', slug: string } | null | undefined };

export type UpdateFourRowMutationVariables = Exact<{
  roomSlug: Scalars['String'];
  text: Scalars['String'];
  turn: Scalars['String'];
}>;


export type UpdateFourRowMutation = { __typename?: 'mutation_root', update_englister_WordleRoom_by_pk?: { __typename?: 'englister_WordleRoom', slug: string } | null | undefined };

export type UpdateFiveRowMutationVariables = Exact<{
  roomSlug: Scalars['String'];
  text: Scalars['String'];
  turn: Scalars['String'];
}>;


export type UpdateFiveRowMutation = { __typename?: 'mutation_root', update_englister_WordleRoom_by_pk?: { __typename?: 'englister_WordleRoom', slug: string } | null | undefined };

export type UpdateSixRowMutationVariables = Exact<{
  roomSlug: Scalars['String'];
  text: Scalars['String'];
  turn: Scalars['String'];
}>;


export type UpdateSixRowMutation = { __typename?: 'mutation_root', update_englister_WordleRoom_by_pk?: { __typename?: 'englister_WordleRoom', slug: string } | null | undefined };

export type AddSkippedWordMutationVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
  word?: InputMaybe<Scalars['String']>;
}>;


export type AddSkippedWordMutation = { __typename?: 'mutation_root', insert_englister_WordleSkippedWords_one?: { __typename?: 'englister_WordleSkippedWords', id: number } | null | undefined };

export type SetWordleRecordMutationVariables = Exact<{
  slug: Scalars['String'];
  userId: Scalars['String'];
  answer: Scalars['String'];
  win: Scalars['Boolean'];
}>;


export type SetWordleRecordMutation = { __typename?: 'mutation_root', insert_englister_WordleRecord_one?: { __typename?: 'englister_WordleRecord', userId: string } | null | undefined };

export type WordleWinQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']>;
}>;


export type WordleWinQuery = { __typename?: 'query_root', englister_WordleRecord: Array<{ __typename?: 'englister_WordleRecord', wind: boolean }> };


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
    limit: 8
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
export const DeletePublicAnswerDocument = gql`
    mutation deletePublicAnswer($id: Int!) {
  delete_englister_PublicAnswers_by_pk(id: $id) {
    id
    topicId
    answer
    createdAt
    createdBy
  }
}
    `;
export type DeletePublicAnswerMutationFn = Apollo.MutationFunction<DeletePublicAnswerMutation, DeletePublicAnswerMutationVariables>;

/**
 * __useDeletePublicAnswerMutation__
 *
 * To run a mutation, you first call `useDeletePublicAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePublicAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePublicAnswerMutation, { data, loading, error }] = useDeletePublicAnswerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePublicAnswerMutation(baseOptions?: Apollo.MutationHookOptions<DeletePublicAnswerMutation, DeletePublicAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePublicAnswerMutation, DeletePublicAnswerMutationVariables>(DeletePublicAnswerDocument, options);
      }
export type DeletePublicAnswerMutationHookResult = ReturnType<typeof useDeletePublicAnswerMutation>;
export type DeletePublicAnswerMutationResult = Apollo.MutationResult<DeletePublicAnswerMutation>;
export type DeletePublicAnswerMutationOptions = Apollo.BaseMutationOptions<DeletePublicAnswerMutation, DeletePublicAnswerMutationVariables>;
export const CreateRoomDocument = gql`
    mutation CreateRoom($slug: String!, $answer: String!, $player1: String, $player1_name: String) {
  insert_englister_WordleRoom_one(
    object: {answer: $answer, player1: $player1, player1_name: $player1_name, player2: "", turn: $player1, slug: $slug, five: "", four: "", one: "", six: "", three: "", two: ""}
  ) {
    slug
  }
}
    `;
export type CreateRoomMutationFn = Apollo.MutationFunction<CreateRoomMutation, CreateRoomMutationVariables>;

/**
 * __useCreateRoomMutation__
 *
 * To run a mutation, you first call `useCreateRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoomMutation, { data, loading, error }] = useCreateRoomMutation({
 *   variables: {
 *      slug: // value for 'slug'
 *      answer: // value for 'answer'
 *      player1: // value for 'player1'
 *      player1_name: // value for 'player1_name'
 *   },
 * });
 */
export function useCreateRoomMutation(baseOptions?: Apollo.MutationHookOptions<CreateRoomMutation, CreateRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRoomMutation, CreateRoomMutationVariables>(CreateRoomDocument, options);
      }
export type CreateRoomMutationHookResult = ReturnType<typeof useCreateRoomMutation>;
export type CreateRoomMutationResult = Apollo.MutationResult<CreateRoomMutation>;
export type CreateRoomMutationOptions = Apollo.BaseMutationOptions<CreateRoomMutation, CreateRoomMutationVariables>;
export const JoinRoomDocument = gql`
    mutation JoinRoom($slug: String!, $player2: String, $player2_name: String) {
  update_englister_WordleRoom_by_pk(
    pk_columns: {slug: $slug}
    _set: {player2: $player2, player2_name: $player2_name}
  ) {
    slug
  }
}
    `;
export type JoinRoomMutationFn = Apollo.MutationFunction<JoinRoomMutation, JoinRoomMutationVariables>;

/**
 * __useJoinRoomMutation__
 *
 * To run a mutation, you first call `useJoinRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinRoomMutation, { data, loading, error }] = useJoinRoomMutation({
 *   variables: {
 *      slug: // value for 'slug'
 *      player2: // value for 'player2'
 *      player2_name: // value for 'player2_name'
 *   },
 * });
 */
export function useJoinRoomMutation(baseOptions?: Apollo.MutationHookOptions<JoinRoomMutation, JoinRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinRoomMutation, JoinRoomMutationVariables>(JoinRoomDocument, options);
      }
export type JoinRoomMutationHookResult = ReturnType<typeof useJoinRoomMutation>;
export type JoinRoomMutationResult = Apollo.MutationResult<JoinRoomMutation>;
export type JoinRoomMutationOptions = Apollo.BaseMutationOptions<JoinRoomMutation, JoinRoomMutationVariables>;
export const WordleRoomsDocument = gql`
    subscription WordleRooms($date: timestamptz!) {
  englister_WordleRoom(
    where: {created_at: {_gte: $date}, player2: {_eq: ""}}
    order_by: {created_at: desc}
  ) {
    slug
    player1_name
    created_at
  }
}
    `;

/**
 * __useWordleRoomsSubscription__
 *
 * To run a query within a React component, call `useWordleRoomsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWordleRoomsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWordleRoomsSubscription({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useWordleRoomsSubscription(baseOptions: Apollo.SubscriptionHookOptions<WordleRoomsSubscription, WordleRoomsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<WordleRoomsSubscription, WordleRoomsSubscriptionVariables>(WordleRoomsDocument, options);
      }
export type WordleRoomsSubscriptionHookResult = ReturnType<typeof useWordleRoomsSubscription>;
export type WordleRoomsSubscriptionResult = Apollo.SubscriptionResult<WordleRoomsSubscription>;
export const SkippedWordsDocument = gql`
    subscription SkippedWords($slug: String) {
  englister_WordleSkippedWords(where: {roomId: {_eq: $slug}}) {
    id
    word
    created_at
  }
}
    `;

/**
 * __useSkippedWordsSubscription__
 *
 * To run a query within a React component, call `useSkippedWordsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSkippedWordsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSkippedWordsSubscription({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useSkippedWordsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SkippedWordsSubscription, SkippedWordsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SkippedWordsSubscription, SkippedWordsSubscriptionVariables>(SkippedWordsDocument, options);
      }
export type SkippedWordsSubscriptionHookResult = ReturnType<typeof useSkippedWordsSubscription>;
export type SkippedWordsSubscriptionResult = Apollo.SubscriptionResult<SkippedWordsSubscription>;
export const WordleRoomDocument = gql`
    subscription WordleRoom($slug: String!) {
  englister_WordleRoom_by_pk(slug: $slug) {
    answer
    created_at
    player1
    player2
    player1_name
    player2_name
    turn
    slug
    five
    four
    one
    six
    three
    two
  }
}
    `;

/**
 * __useWordleRoomSubscription__
 *
 * To run a query within a React component, call `useWordleRoomSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWordleRoomSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWordleRoomSubscription({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useWordleRoomSubscription(baseOptions: Apollo.SubscriptionHookOptions<WordleRoomSubscription, WordleRoomSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<WordleRoomSubscription, WordleRoomSubscriptionVariables>(WordleRoomDocument, options);
      }
export type WordleRoomSubscriptionHookResult = ReturnType<typeof useWordleRoomSubscription>;
export type WordleRoomSubscriptionResult = Apollo.SubscriptionResult<WordleRoomSubscription>;
export const DeleteRoomDocument = gql`
    mutation deleteRoom($roomSlug: String!) {
  delete_englister_WordleRoom_by_pk(slug: $roomSlug) {
    slug
  }
}
    `;
export type DeleteRoomMutationFn = Apollo.MutationFunction<DeleteRoomMutation, DeleteRoomMutationVariables>;

/**
 * __useDeleteRoomMutation__
 *
 * To run a mutation, you first call `useDeleteRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoomMutation, { data, loading, error }] = useDeleteRoomMutation({
 *   variables: {
 *      roomSlug: // value for 'roomSlug'
 *   },
 * });
 */
export function useDeleteRoomMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRoomMutation, DeleteRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRoomMutation, DeleteRoomMutationVariables>(DeleteRoomDocument, options);
      }
export type DeleteRoomMutationHookResult = ReturnType<typeof useDeleteRoomMutation>;
export type DeleteRoomMutationResult = Apollo.MutationResult<DeleteRoomMutation>;
export type DeleteRoomMutationOptions = Apollo.BaseMutationOptions<DeleteRoomMutation, DeleteRoomMutationVariables>;
export const SkipDocument = gql`
    mutation skip($roomSlug: String!, $turn: String!) {
  update_englister_WordleRoom_by_pk(
    pk_columns: {slug: $roomSlug}
    _set: {turn: $turn}
  ) {
    slug
  }
}
    `;
export type SkipMutationFn = Apollo.MutationFunction<SkipMutation, SkipMutationVariables>;

/**
 * __useSkipMutation__
 *
 * To run a mutation, you first call `useSkipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSkipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [skipMutation, { data, loading, error }] = useSkipMutation({
 *   variables: {
 *      roomSlug: // value for 'roomSlug'
 *      turn: // value for 'turn'
 *   },
 * });
 */
export function useSkipMutation(baseOptions?: Apollo.MutationHookOptions<SkipMutation, SkipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SkipMutation, SkipMutationVariables>(SkipDocument, options);
      }
export type SkipMutationHookResult = ReturnType<typeof useSkipMutation>;
export type SkipMutationResult = Apollo.MutationResult<SkipMutation>;
export type SkipMutationOptions = Apollo.BaseMutationOptions<SkipMutation, SkipMutationVariables>;
export const UpdateOneRowDocument = gql`
    mutation updateOneRow($roomSlug: String!, $text: String!, $turn: String!) {
  update_englister_WordleRoom_by_pk(
    pk_columns: {slug: $roomSlug}
    _set: {one: $text, turn: $turn}
  ) {
    slug
  }
}
    `;
export type UpdateOneRowMutationFn = Apollo.MutationFunction<UpdateOneRowMutation, UpdateOneRowMutationVariables>;

/**
 * __useUpdateOneRowMutation__
 *
 * To run a mutation, you first call `useUpdateOneRowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneRowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneRowMutation, { data, loading, error }] = useUpdateOneRowMutation({
 *   variables: {
 *      roomSlug: // value for 'roomSlug'
 *      text: // value for 'text'
 *      turn: // value for 'turn'
 *   },
 * });
 */
export function useUpdateOneRowMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneRowMutation, UpdateOneRowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneRowMutation, UpdateOneRowMutationVariables>(UpdateOneRowDocument, options);
      }
export type UpdateOneRowMutationHookResult = ReturnType<typeof useUpdateOneRowMutation>;
export type UpdateOneRowMutationResult = Apollo.MutationResult<UpdateOneRowMutation>;
export type UpdateOneRowMutationOptions = Apollo.BaseMutationOptions<UpdateOneRowMutation, UpdateOneRowMutationVariables>;
export const UpdateTwoRowDocument = gql`
    mutation updateTwoRow($roomSlug: String!, $text: String!, $turn: String!) {
  update_englister_WordleRoom_by_pk(
    pk_columns: {slug: $roomSlug}
    _set: {two: $text, turn: $turn}
  ) {
    slug
  }
}
    `;
export type UpdateTwoRowMutationFn = Apollo.MutationFunction<UpdateTwoRowMutation, UpdateTwoRowMutationVariables>;

/**
 * __useUpdateTwoRowMutation__
 *
 * To run a mutation, you first call `useUpdateTwoRowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTwoRowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTwoRowMutation, { data, loading, error }] = useUpdateTwoRowMutation({
 *   variables: {
 *      roomSlug: // value for 'roomSlug'
 *      text: // value for 'text'
 *      turn: // value for 'turn'
 *   },
 * });
 */
export function useUpdateTwoRowMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTwoRowMutation, UpdateTwoRowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTwoRowMutation, UpdateTwoRowMutationVariables>(UpdateTwoRowDocument, options);
      }
export type UpdateTwoRowMutationHookResult = ReturnType<typeof useUpdateTwoRowMutation>;
export type UpdateTwoRowMutationResult = Apollo.MutationResult<UpdateTwoRowMutation>;
export type UpdateTwoRowMutationOptions = Apollo.BaseMutationOptions<UpdateTwoRowMutation, UpdateTwoRowMutationVariables>;
export const UpdateThreeRowDocument = gql`
    mutation updateThreeRow($roomSlug: String!, $text: String!, $turn: String!) {
  update_englister_WordleRoom_by_pk(
    pk_columns: {slug: $roomSlug}
    _set: {three: $text, turn: $turn}
  ) {
    slug
  }
}
    `;
export type UpdateThreeRowMutationFn = Apollo.MutationFunction<UpdateThreeRowMutation, UpdateThreeRowMutationVariables>;

/**
 * __useUpdateThreeRowMutation__
 *
 * To run a mutation, you first call `useUpdateThreeRowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateThreeRowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateThreeRowMutation, { data, loading, error }] = useUpdateThreeRowMutation({
 *   variables: {
 *      roomSlug: // value for 'roomSlug'
 *      text: // value for 'text'
 *      turn: // value for 'turn'
 *   },
 * });
 */
export function useUpdateThreeRowMutation(baseOptions?: Apollo.MutationHookOptions<UpdateThreeRowMutation, UpdateThreeRowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateThreeRowMutation, UpdateThreeRowMutationVariables>(UpdateThreeRowDocument, options);
      }
export type UpdateThreeRowMutationHookResult = ReturnType<typeof useUpdateThreeRowMutation>;
export type UpdateThreeRowMutationResult = Apollo.MutationResult<UpdateThreeRowMutation>;
export type UpdateThreeRowMutationOptions = Apollo.BaseMutationOptions<UpdateThreeRowMutation, UpdateThreeRowMutationVariables>;
export const UpdateFourRowDocument = gql`
    mutation updateFourRow($roomSlug: String!, $text: String!, $turn: String!) {
  update_englister_WordleRoom_by_pk(
    pk_columns: {slug: $roomSlug}
    _set: {four: $text, turn: $turn}
  ) {
    slug
  }
}
    `;
export type UpdateFourRowMutationFn = Apollo.MutationFunction<UpdateFourRowMutation, UpdateFourRowMutationVariables>;

/**
 * __useUpdateFourRowMutation__
 *
 * To run a mutation, you first call `useUpdateFourRowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFourRowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFourRowMutation, { data, loading, error }] = useUpdateFourRowMutation({
 *   variables: {
 *      roomSlug: // value for 'roomSlug'
 *      text: // value for 'text'
 *      turn: // value for 'turn'
 *   },
 * });
 */
export function useUpdateFourRowMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFourRowMutation, UpdateFourRowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFourRowMutation, UpdateFourRowMutationVariables>(UpdateFourRowDocument, options);
      }
export type UpdateFourRowMutationHookResult = ReturnType<typeof useUpdateFourRowMutation>;
export type UpdateFourRowMutationResult = Apollo.MutationResult<UpdateFourRowMutation>;
export type UpdateFourRowMutationOptions = Apollo.BaseMutationOptions<UpdateFourRowMutation, UpdateFourRowMutationVariables>;
export const UpdateFiveRowDocument = gql`
    mutation updateFiveRow($roomSlug: String!, $text: String!, $turn: String!) {
  update_englister_WordleRoom_by_pk(
    pk_columns: {slug: $roomSlug}
    _set: {five: $text, turn: $turn}
  ) {
    slug
  }
}
    `;
export type UpdateFiveRowMutationFn = Apollo.MutationFunction<UpdateFiveRowMutation, UpdateFiveRowMutationVariables>;

/**
 * __useUpdateFiveRowMutation__
 *
 * To run a mutation, you first call `useUpdateFiveRowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFiveRowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFiveRowMutation, { data, loading, error }] = useUpdateFiveRowMutation({
 *   variables: {
 *      roomSlug: // value for 'roomSlug'
 *      text: // value for 'text'
 *      turn: // value for 'turn'
 *   },
 * });
 */
export function useUpdateFiveRowMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFiveRowMutation, UpdateFiveRowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFiveRowMutation, UpdateFiveRowMutationVariables>(UpdateFiveRowDocument, options);
      }
export type UpdateFiveRowMutationHookResult = ReturnType<typeof useUpdateFiveRowMutation>;
export type UpdateFiveRowMutationResult = Apollo.MutationResult<UpdateFiveRowMutation>;
export type UpdateFiveRowMutationOptions = Apollo.BaseMutationOptions<UpdateFiveRowMutation, UpdateFiveRowMutationVariables>;
export const UpdateSixRowDocument = gql`
    mutation updateSixRow($roomSlug: String!, $text: String!, $turn: String!) {
  update_englister_WordleRoom_by_pk(
    pk_columns: {slug: $roomSlug}
    _set: {six: $text, turn: $turn}
  ) {
    slug
  }
}
    `;
export type UpdateSixRowMutationFn = Apollo.MutationFunction<UpdateSixRowMutation, UpdateSixRowMutationVariables>;

/**
 * __useUpdateSixRowMutation__
 *
 * To run a mutation, you first call `useUpdateSixRowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSixRowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSixRowMutation, { data, loading, error }] = useUpdateSixRowMutation({
 *   variables: {
 *      roomSlug: // value for 'roomSlug'
 *      text: // value for 'text'
 *      turn: // value for 'turn'
 *   },
 * });
 */
export function useUpdateSixRowMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSixRowMutation, UpdateSixRowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSixRowMutation, UpdateSixRowMutationVariables>(UpdateSixRowDocument, options);
      }
export type UpdateSixRowMutationHookResult = ReturnType<typeof useUpdateSixRowMutation>;
export type UpdateSixRowMutationResult = Apollo.MutationResult<UpdateSixRowMutation>;
export type UpdateSixRowMutationOptions = Apollo.BaseMutationOptions<UpdateSixRowMutation, UpdateSixRowMutationVariables>;
export const AddSkippedWordDocument = gql`
    mutation addSkippedWord($slug: String, $word: String) {
  insert_englister_WordleSkippedWords_one(object: {roomId: $slug, word: $word}) {
    id
  }
}
    `;
export type AddSkippedWordMutationFn = Apollo.MutationFunction<AddSkippedWordMutation, AddSkippedWordMutationVariables>;

/**
 * __useAddSkippedWordMutation__
 *
 * To run a mutation, you first call `useAddSkippedWordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSkippedWordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSkippedWordMutation, { data, loading, error }] = useAddSkippedWordMutation({
 *   variables: {
 *      slug: // value for 'slug'
 *      word: // value for 'word'
 *   },
 * });
 */
export function useAddSkippedWordMutation(baseOptions?: Apollo.MutationHookOptions<AddSkippedWordMutation, AddSkippedWordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddSkippedWordMutation, AddSkippedWordMutationVariables>(AddSkippedWordDocument, options);
      }
export type AddSkippedWordMutationHookResult = ReturnType<typeof useAddSkippedWordMutation>;
export type AddSkippedWordMutationResult = Apollo.MutationResult<AddSkippedWordMutation>;
export type AddSkippedWordMutationOptions = Apollo.BaseMutationOptions<AddSkippedWordMutation, AddSkippedWordMutationVariables>;
export const SetWordleRecordDocument = gql`
    mutation setWordleRecord($slug: String!, $userId: String!, $answer: String!, $win: Boolean!) {
  insert_englister_WordleRecord_one(
    object: {answer: $answer, roomSlug: $slug, userId: $userId, wind: $win}
  ) {
    userId
  }
}
    `;
export type SetWordleRecordMutationFn = Apollo.MutationFunction<SetWordleRecordMutation, SetWordleRecordMutationVariables>;

/**
 * __useSetWordleRecordMutation__
 *
 * To run a mutation, you first call `useSetWordleRecordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetWordleRecordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setWordleRecordMutation, { data, loading, error }] = useSetWordleRecordMutation({
 *   variables: {
 *      slug: // value for 'slug'
 *      userId: // value for 'userId'
 *      answer: // value for 'answer'
 *      win: // value for 'win'
 *   },
 * });
 */
export function useSetWordleRecordMutation(baseOptions?: Apollo.MutationHookOptions<SetWordleRecordMutation, SetWordleRecordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetWordleRecordMutation, SetWordleRecordMutationVariables>(SetWordleRecordDocument, options);
      }
export type SetWordleRecordMutationHookResult = ReturnType<typeof useSetWordleRecordMutation>;
export type SetWordleRecordMutationResult = Apollo.MutationResult<SetWordleRecordMutation>;
export type SetWordleRecordMutationOptions = Apollo.BaseMutationOptions<SetWordleRecordMutation, SetWordleRecordMutationVariables>;
export const WordleWinDocument = gql`
    query wordleWin($userId: String) {
  englister_WordleRecord(where: {userId: {_eq: $userId}, wind: {_eq: true}}) {
    wind
  }
}
    `;

/**
 * __useWordleWinQuery__
 *
 * To run a query within a React component, call `useWordleWinQuery` and pass it any options that fit your needs.
 * When your component renders, `useWordleWinQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWordleWinQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useWordleWinQuery(baseOptions?: Apollo.QueryHookOptions<WordleWinQuery, WordleWinQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WordleWinQuery, WordleWinQueryVariables>(WordleWinDocument, options);
      }
export function useWordleWinLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WordleWinQuery, WordleWinQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WordleWinQuery, WordleWinQueryVariables>(WordleWinDocument, options);
        }
export type WordleWinQueryHookResult = ReturnType<typeof useWordleWinQuery>;
export type WordleWinLazyQueryHookResult = ReturnType<typeof useWordleWinLazyQuery>;
export type WordleWinQueryResult = Apollo.QueryResult<WordleWinQuery, WordleWinQueryVariables>;