# Next.js Middleware demo

**🔗 Live demo: [https://enterspeed-next-middleware.netlify.app/](https://enterspeed-next-middleware.netlify.app/)**

## Cloning this demo

To clone a single folder use Git Bash.

```bash
git clone \
  --depth 1  \
  --filter=blob:none  \
  --sparse \
  https://github.com/enterspeedhq/enterspeed-demos \
;
cd enterspeed-demos
git sparse-checkout set next-middleware
```

## Development

This demo uses Netlify’s Next.js Runtime to utilize edge functions. To run this demo you need the [Netlify CLI](https://www.npmjs.com/package/netlify-cli).

👉 **Note:** Environment variables stored in the .env file will not work in edge functions. You will need to set them up via Netlify or replace them with the actual value _(for local testing only)_.

Once you've cloned this repository, installed dependencies with `npm install` (or `pnpm install` or `yarn`), and installed the Netlify CLI, start a local server using the Netlify CLI.

```bash
netlify dev
```

Open [http://localhost:8888](http://localhost:8888) with your browser to see the result.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY`

## What you'll need

You will need to set up a free Enterspeed account. You can sign up here: https://app.enterspeed.com/signup

Once you have created your account and created a tenant, you need to configure your tenant by setting up:

- Domains and hostnames
- Environment and environment clients
- Data sources

You can read more about it in our getting started guide: https://docs.enterspeed.com/getting-started

### Ingesting dummy data

Once you have created a data source in Enterspeed, you can start ingesting data. This can be done using our API: https://docs.enterspeed.com/api#tag/Ingest

You can find the data used in the demo here: [DEMO DATA](./DEMO-DATA/)

#### Example ingest

```curl
curl --location --request POST 'https://api.enterspeed.com/ingest/v2/UNIQUE-ID' \
--header 'X-Api-Key: [INSERT-YOUR-OWN-API-KEY]' \
--header 'Content-Type: application/json' \
--data-raw '{
  "type": "blog",
  "url": "/blog"
}'
```

### Setting up your schemas in Enterspeed

The schemas used to transform the data in Enterspeed can be found here: [DEMO DATA](./DEMO-DATA/).
