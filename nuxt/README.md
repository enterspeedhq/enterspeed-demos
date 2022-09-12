# Nuxt 3 Demo

**🔗 Live demo: [https://enterspeed-nuxt.netlify.app/](https://enterspeed-nuxt.netlify.app/)**

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
git sparse-checkout set nuxt
```

## Development

Once you've cloned this and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

Start the development server on http://localhost:3000

```bash
npm run dev
```

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
