import React from 'react';
import { FaGithub, FaQuoteLeft } from 'react-icons/fa';
import useSWR from 'swr';

export default function App() {
  const fetcher = async (url) => await fetch(url).then((res) => res.json());

  const { data, error } = useSWR('/api/sample-endpoint', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">
              React/Tailwind PWA Starter Template
            </h1>
            <blockquote className="mx-auto text-3xl italic leading-normal text-center text-blue-200">
              {error ? `ERROR: ${error.message}` : ''}
              {data && !error ? (
                <>
                  <FaQuoteLeft className="inline mr-1 mb-2" />
                  {` ${data.joke}`}
                </>
              ) : (
                '... loading dad joke ...'
              )}
            </blockquote>
            <h2 className="my-12 text-2xl font-semibold leading-tight text-center">
              <small className="text-base font-normal text-center">
                <a
                  href="https://icanhazdadjoke.com/api"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  source: https://icanhazdadjoke.com/api
                </a>
              </small>
            </h2>
          </div>
        </div>
      </div>
      <div className="fixed min-w-full text-base text-center bottom-2">
        <a href="https://github.com/mikesprague/react-tailwindcss-vercel-starter">
          <FaGithub className="inline" />
          {' Back to repo'}
        </a>
      </div>
    </>
  );
}
