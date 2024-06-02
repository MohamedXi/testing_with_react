import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { fetchNewsRequest } from '../redux/actions/newsActions';
import NewsList from './NewsList';

const mockStore = configureStore([]);
const initialState = {
  news: {
    loading: false,
    news: [
      {
        title: 'Test Article 1',
        description: 'Description 1',
        url: 'http://example.com/1',
        source: {
          id: '1',
          name: 'Source 1',
        },
        author: 'Author 1',
        urlToImage: 'http://example.com/1.jpg',
        publishedAt: '2021-01-01T00:00:00Z',
        content: 'Content 1',
      },
      {
        title: 'Test Article 2',
        description: 'Description 2',
        url: 'http://example.com/2',
        source: {
          id: '2',
          name: 'Source 2',
        },
        author: 'Author 2',
        urlToImage: 'http://example.com/2.jpg',
        publishedAt: '2021-01-01T00:00:00Z',
        content: 'Content 2',
      },
    ],
    error: null,
  },
};

const store = mockStore(initialState);

describe('NewsList', () => {
  test('renders news articles', () => {
    render(
      <Provider store={store}>
        <NewsList />
      </Provider>
    );

    expect(screen.getByText('Test Article 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Test Article 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });

  test('dispatches fetchNewsRequest on mount', () => {
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <NewsList />
      </Provider>
    );

    expect(store.dispatch).toHaveBeenCalledWith(fetchNewsRequest());
  });
});
