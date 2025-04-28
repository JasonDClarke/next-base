This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

(Install nvm or nvm-windows so you can run npm in different versions of node.
Things should work 20.13.0 for example)

First, run the development server:

npm run dev

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and loads Spectral and Inter fonts

## Tech stack

React Components:

- ShadCN/Radix components used as base components
- react-hook-form used for forms
- lucide-react used for icons

CSS:

- Tailwind

Testing:

- Unit tests: Jest, React testing library
- Logging/reporting: sentry
- e2e tests: cypress (page snapshots, axe accessibility testing and basic e2e scenarios)
- cypress-axe for accessibility testing
- Linting: eslint
- Typechecking with typescript
- File formatting with prettier.

- Typechecking and file formatting run on commit. (See .husky/precommit)
- ESLint, Typechecking, filteformatting, unit tests, build, and e2e tests run before pushing. (See .husky/prepush).

## Links to external connections (needs separate access/login)

Please note environment variables with connection keys are not included in the github repository.

There are environment variables for

- Sentry connection (logging/reporting)

### Sentry dashboard (for error logging/reporting)

https://<your user>.sentry.io/issues/?project=<your project id>&statsPeriod=14d

This shows logs and errors for development and monitoring.
Update dsn attribute on
sentry.client.config.ts
sentry.edge.config.ts
sentry.server.config.ts
Check config in next.config.ts and enable sentry

### Vercel (deployment)

https://vercel.com/<vercelusername>-projects/<projectfolder>

Config for deployment for vercel.

Importantly all the environment variables are configured here.

## File structure

- cypress is in cypress.config.ts + e2e tests are in cypress folder
- cypress/snapshots/screenshotTests contains snapshots of all pages on desktop and mobile.
- Cypress tests end in \*.cy.js

- .husky folder contains precommit and prepush hooks config
- Next js folders https://nextjs.org/docs/app/getting-started/project-structure
- public folder contains svgs for title icons, and static images (eg images for splash page)
  src/app contains page routes per next.js docs. The folder structure here and file names here control the page routing
  https://nextjs.org/docs/app/building-your-application/routing
  src/app/api contains api routes which is where to define API endpoints
  src/app/actions contains next server actions which
  (API routes are highly customizable endpoints that can support all the HTTP verbs and respond with any kind of payload. The downside of APIs is that they aren't inherintely type-safe. Server Actions, on the other hand, are type-safe out of the box when you use them within the context of the NextJS application.)
  src/lib/queries contains db getters, if needed on client, make these API routes.
- src/components stores components (NB src/components/ui stores shadCN based base components)
- src/fonts contains global font config
- src/hooks contains react hooks
- src/instrumentation.ts is a file for sentry setup.

Unit tests are colocated in the same file with .spec.{ts|tsx} extension. See also jest.setup.js, jest.config.js in the root.

## Root folder config files (use-case)

- .gitignore configures ignored git files (version control)
- .prettierignore configures files ignored by prettier (code formatting)
- .prettierrc toggles code formatting such as indenting for prettier (code formatting)
- components.json is a config for shadcn cli tool, enabling import of shadcn components into the project (react component library)
- cypress.config.ts is config for cypress, see also cypress/support/e2e.ts (e2e testing)
- eslint.config.mjs is config for eslint (linting)
- jest.config.ts, jest.setup.js is config for jest (unit testing)
- next.config.ts is configuration for next build (building next application, bundle analysis)
- package.json includes packages and scripts used in the project. See also package.json.Readme.md (package management)
- postcss.config.mjs is css config enabling tailwind (css/tailwind)
- sentry.client.config.ts, sentry.edge.config.ts, sentry.server.config.ts is sentry config in these 3 contexts of next (application logging/reporting)
- vercel.json allows you to configure vercel auto-deployment options (deployment)
- tailwind.config.ts is config for tailwind css (css/tailwind)
- tsconfig.json is config for typescript (type-safety)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Note that redeployments occur on push to master.
Auto-deploy can be toggled of in vercel.json.
Branch unit tests occur using pre-push hook
