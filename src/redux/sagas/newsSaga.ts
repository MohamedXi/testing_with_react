import axios, { AxiosResponse } from 'axios';
import { CallEffect, PutEffect, call, put, takeLatest } from 'redux-saga/effects';
import { NewsApiResponse } from '../../types';
import { FETCH_NEWS_REQUEST, fetchNewsFailure, fetchNewsSuccess } from '../actions/newsActions';

const API_KEY = '0140261b3594494599ccba077ed3ba83';
const fetchNews = () => axios.get<NewsApiResponse>(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`);

function* fetchNewsSaga(): Generator<
  CallEffect<AxiosResponse<NewsApiResponse>> | PutEffect<ReturnType<typeof fetchNewsSuccess>> | PutEffect<ReturnType<typeof fetchNewsFailure>>,
  void,
  AxiosResponse<NewsApiResponse>
> {
  try {
    const response: AxiosResponse<NewsApiResponse> = yield call(fetchNews);
    yield put(fetchNewsSuccess(response.data.articles));
  } catch (error: any) {
    yield put(fetchNewsFailure(error.message));
  }
}

function* newsSaga() {
  yield takeLatest(FETCH_NEWS_REQUEST, fetchNewsSaga);
}

export default newsSaga;
