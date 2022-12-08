# react-tailwindcss-vercel-starter

[![Vercel Deployment Status](https://img.shields.io/github/deployments/mikesprague/react-tailwindcss-vercel-starter/production?label=Vercel%20%28build%20%26%20deploy%29&logo=Vercel&logoColor=white)](https://vercel.com/m5ls5e/react-tailwindcss-vercel-starter/deployments)

My basic project starter for [Vercel](https://vercel.com) hosted projects.

Sets up a barebones React/Tailwind CSS PWA front-end with a serverless function that can be used as an API on the back-end.

- React
- Tailwind CSS
- Vite

Lighthouse scores (rebuilt every 6 hours): <https://mikesprague.github.io/react-tailwindcss-vercel-starter/lighthouse-report.html>

## Getting started

### Quickstart

Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fmikesprague%2Freact-tailwindcss-vercel-starter&env=FONT_AWESOME_TOKEN)

### Manual Setup

1. Clone this repo into a new directory:<br>
   `git clone https://github.com/mikesprague/react-tailwindcss-vercel-starter.git your-project-name`
2. Go into the new directory:<br>
   `cd your-project-name`
3. Remove the `.git` folder from this source repo:<br>
   `rm -rf .git`
4. Inistantiate a new git repo for your project and these files:<br>
   `git init && git add . && git commit -m "Initial commit"`

### Local Development

1. Install project dependencies:<br>
   `npm install`
1. Run the project locally (build React front-end and serverless functions and serves them at `http://localhost:3000`):<br>
   `npm start`

## License

MIT License

Copyright (c) 2021 Michael Sprague

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
