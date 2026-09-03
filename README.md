
  # BUBT Faculty Finder App

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.


  ## Public feedback setup

  Faculty feedback is stored in Cloudflare D1 and is published immediately.

  1. In Cloudflare, create a D1 database (for example, `bubt-faculty-feedback`).
  2. Run the SQL in [`database/schema.sql`](database/schema.sql) against that database.
  3. In the Pages project, add a D1 binding named `FEEDBACK_DB` and select the database.
  4. Deploy the latest `main` branch.

  The public site opens directly at `/#/`. Existing `/#/home` links also continue to work.
