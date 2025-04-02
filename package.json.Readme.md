Scripts:

npm run dev
Runs development server (see http://localhost:4000)

npm run build
Builds the application

npm run build:analyze
Builds the application with javascript bundle analysis

npm run start-for-cypress
Runs application with auth bypassed for e2e testing

npm run start
Runs production application, (do npm run build first).

npm run lint
Runs ESlint

npm run prepare
This sets up husky which is for precommit and prepush hooks for lint/testing. Relates to husky package.

npm run typescript
this checks typescript validity in the project

npm run prettier
this runs file formatting to files in the project (see .prettierrc for config)

npm run test
this runs all unit tests on the project

Cypress/e2e testing commands:
npm run cypress
Runs all cypress e2e tests in the console. NOTE, does not work unless server has started!
To run server automatically consider using npm run cypressTestProd instead.

npm run cypress:update-snapshots
Runs cypress e2e tests and takes new snapshots of each page in desktop and mobile.
Note this only works if server is running.
To run server automatically consider using npm run cypressTestProd:update-snapshots instead.

npm run cypress:open
Runs cypress e2e suite in a user interface for visual debugging

npm run cypressTestProd
Starts the production server with auth disabled and runs e2e against that server.
Note production server cannot run unless there is a production build.
So run npm run build first.

npm run cypressTestProd:update-snapshots
Starts the production server with auth disabled and runs e2e against that serverand updates snapshots
Note production server cannot run unless there is a production build.
So run npm run build first.
Disclaimer: please use snapshot test for review only. They are not set up/stable enough for usage on pipeline

lint-staged
Runs and commits linting changes on files that are staged in git. Used in pre-commit hook to keep committed files clean.
