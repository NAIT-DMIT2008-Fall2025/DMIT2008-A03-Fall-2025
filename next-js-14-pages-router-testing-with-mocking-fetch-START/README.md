# Next.js React Testing with Fetch Calls.

# Why?

Most of our applications will use fetch, and we only want to test code that we write. This means that we don't test any external packages that we import or any rest api calls we may make.


# Steps
1. Install Jest and React testing library.
```sh
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

2. Create a `jest.config.js` file in the root of your project with the following content:
```js

const nextJest = require('next/jest')
 
/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
  // ...
    '^@/(.*)$': '<rootDir>/$1',
    }
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config)
```
Take a look [here](https://nextjs.org/docs/app/building-your-application/testing/jest) for more information on how to set it up.

2. In the `package.json` file, add a script to run Jest:
```json
  {
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch"  
  },
```
