import { Article } from '../../types';

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

interface FetchNewsRequestAction {
  type: typeof FETCH_NEWS_REQUEST;
}

interface FetchNewsSuccessAction {
  type: typeof FETCH_NEWS_SUCCESS;
  payload: Article[];
}

interface FetchNewsFailureAction {
  type: typeof FETCH_NEWS_FAILURE;
  payload: string;
}

export type NewsActionTypes = FetchNewsRequestAction | FetchNewsSuccessAction | FetchNewsFailureAction;

export const fetchNewsRequest = () => ({
  type: FETCH_NEWS_REQUEST,
});

export const fetchNewsSuccess = (news: Article[]): FetchNewsSuccessAction => ({
  type: FETCH_NEWS_SUCCESS,
  payload: news,
});

export const fetchNewsFailure = (error: string): FetchNewsFailureAction => ({
  type: FETCH_NEWS_FAILURE,
  payload: error,
});
