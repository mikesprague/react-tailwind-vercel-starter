import axios from 'axios';
import React from 'react';
import useSWR from 'swr';
import { FaQuoteLeft, FaGithub } from 'react-icons/fa';
import './App.scss';

export default function App() {
  const fetcher = async (url) => await axios.get(url).then((response) => response.data);
  const { data, error } = useSWR('/api/sample-endpoint', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return (
    <>
      <div className="container max-w-screen-xl min-h-screen p-8 text-center page-wrapper">
        <h1 className="mb-8 text-4xl font-bold text-center underline">
          My React/Tailwind CSS Starter for a Vercel Hosted Project
          <br />
        </h1>
        <h2 className="mb-12 text-2xl font-semibold leading-tight text-center">
          Example data below fetched from API powered by serverless function
          <br />
          <small className="text-base font-normal text-center">
            <a href="https://icanhazdadjoke.com/api" rel="noopener noreferrer" target="_blank">
              (datasource: https://icanhazdadjoke.com/api)
            </a>
          </small>
        </h2>
        <blockquote className="mx-auto text-3xl italic leading-normal text-center text-blue-200">
          {error ? `ERROR: ${error.message}` : ''}
          {data && !error ? (
            <>
              <FaQuoteLeft />
              {` ${data.joke}`}
            </>
          ) : (
            '... loading dad joke ...'
          )}
        </blockquote>
      </div>
      <div className="fixed min-w-full text-base text-center bottom-2">
        <a href="https://github.com/mikesprague/react-tailwindcss-vercel-starter">
          <FaGithub />
          {` Back to repo`}
        </a>
      </div>
    </>
  );
}
