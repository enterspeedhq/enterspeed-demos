# Astro demo

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
git sparse-checkout set astro
```

## Development

Once you've cloned this and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server.

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

## What you'll need

You will need to set up a free Enterspeed account. You can sign up here: https://app.enterspeed.com/signup

Once you have created your account and created a tenant, you need to configure your tenant by setting up:
Domains and hostnames
Environment and environment clients
Data sources
You can read more about it in our getting started guide: https://docs.enterspeed.com/getting-started

### Ingesting dummy data

Once you have created a data source in Enterspeed, you can start ingesting data. This can be done using our API: https://docs.enterspeed.com/api#tag/Ingest

You can find the data used in the demos here: [enterspeed-dummy-data](https://github.com/enterspeedhq/enterspeed-demos/tree/master/enterspeed-dummy-data)

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
