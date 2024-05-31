import { Article } from '../../types';
import { FETCH_NEWS_FAILURE, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, NewsActionTypes } from '../actions/newsActions';

interface NewsState {
  loading: boolean;
  news: Article[];
  error: string | null;
}

const initialState: NewsState = {
  loading: false,
  news: [],
  error: null,
};

const newsReducer = (state = initialState, action: NewsActionTypes): NewsState => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      console.log('FETCH_NEWS_REQUEST');
      return { ...state, loading: true };
    case FETCH_NEWS_SUCCESS:
      console.log('FETCH_NEWS_SUCCESS');
      return { loading: false, news: action.payload, error: null };
    case FETCH_NEWS_FAILURE:
      console.log('FETCH_NEWS_FAILURE');
      return { loading: false, news: [], error: action.payload };
    default:
      return state;
  }
};

export default newsReducer;
