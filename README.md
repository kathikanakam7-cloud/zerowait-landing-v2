# ZeroWait

Landing page and Express API for ZeroWait.

## Run locally

1. Install Node.js 18 or newer.
2. Install dependencies with `npm install`.
3. Copy `.env.example` to `.env` and set the values for the services you use.
4. Create a PostgreSQL database and run `database/schema.sql` against it.
5. Start the site and API with `npm start`, then open `http://localhost:10000`.

The database URL is optional for the demo: when PostgreSQL is unavailable, the
API serves its in-memory sample restaurants and orders. That data is lost when
the server restarts. OTP verification also has a local demo flow when Twilio is
not configured; do not use that mode in production.

## Environment variables

| Variable | Required for | Notes |
| --- | --- | --- |
| `PORT` | Hosting | Defaults to `10000`; most hosts set this automatically. |
| `DATABASE_URL` | Persistent restaurants, users, and orders | PostgreSQL connection string for the database initialized with `database/schema.sql`. |
| `TWILIO_ACCOUNT_SID` | SMS OTP | Twilio Account SID. |
| `TWILIO_AUTH_TOKEN` | SMS OTP | Keep this secret; configure it in the host's secret environment settings. |
| `TWILIO_VERIFY_SERVICE_SID` | SMS OTP | SID of the Twilio Verify service. |
| `GOOGLE_CLIENT_ID` | Google sign-in API | OAuth client ID; register the website's origin with Google. |

For local development, create `.env` from `.env.example`; `.env` is ignored by
Git. For deployment, add the same variables to your hosting provider's
environment/secrets settings instead of committing credentials. The frontend
uses the same origin as the page for API requests, so deploy the Express server
and website together.

## Deploying

Configure the environment variables in the hosting service, initialize its
PostgreSQL database with `database/schema.sql`, and deploy this repository with
`npm start` as the start command. Keep database and provider credentials out
of source control. The website's restaurant list has a frontend fallback, but
authentication and persistent order flows require the corresponding services
to be configured.