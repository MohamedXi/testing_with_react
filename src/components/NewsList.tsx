import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsRequest } from '../redux/actions/newsActions';
import { AppState } from '../redux/reducers';

const NewsList: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, news, error } = useSelector((state: AppState) => state.news);

  useEffect(() => {
    dispatch(fetchNewsRequest());
  }, [dispatch]);

  if (loading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">Latest News</h1>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {news.map((article) => {
          return (
            <li key={article.title} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={article.publishedAt}>{new Date(article.publishedAt).toDateString()}</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-100">
                          {article.title}
                        </a>
                      </h2>
                      <p className="prose max-w-none text-gray-500 dark:text-gray-400">{article.description}</p>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        Read more &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewsList;
