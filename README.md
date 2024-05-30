# ERC 4337 landing page
This is the frontend project of the ERC-4337 Landing Page, based on Next.js.

## Development

First, install dependencies.

```bash
npm install
# or
yarn install
```

Then, start local development.

```bash
npm run dev
# or
yarn dev
```

If you want to display the test results from a local file, make sure you checkout the "bundler-test-results" project, and symlink from this project's "public" folder to it.

e.g. 
```bash
cd public; ln -s ../../bundler-test-results/v06
```

Then run the project using the command

```bash
npm run dev:localtestresults
```

The site will be accessable on [localhost:3000](http://localhost:3000).

## Deployment

Merging to the `master` branch will automaticlaly deploy to Vercel
