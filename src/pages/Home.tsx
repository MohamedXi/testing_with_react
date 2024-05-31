import React from 'react';
import NewsList from '../components/NewsList';

const Home: React.FC = () => {
  return (
    <div className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Latest
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">A blog created with Next.js and Tailwind.css</p>
          </div>
          <NewsList />
        </div>
      </section>
    </div>
  );
};

export default Home;
